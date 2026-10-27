import { useEffect, useMemo, useState } from 'react';
import { onValue, push, ref, remove } from 'firebase/database';
import { db, formatarData } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

const abas = ['Comparativo', 'Todas as visitas', 'Ações coletivas', 'Usuários'];

export default function Admin() {
  const { usuario } = useAuth();
  const [aba, setAba] = useState(abas[0]);
  const [visitas, setVisitas] = useState([]);
  const [acoes, setAcoes] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [de, setDe] = useState('');
  const [ate, setAte] = useState('');
  const [func, setFunc] = useState('');

  useEffect(() => {
    const o1 = onValue(ref(db, 'visitas'), (s) => {
      const lista = [];
      Object.entries(s.val() || {}).forEach(([uid, vs]) => Object.entries(vs).forEach(([id, d]) => lista.push({ id, uid, ...d })));
      setVisitas(lista.sort((a, b) => b.dataVisita.localeCompare(a.dataVisita)));
    });
    const o2 = onValue(ref(db, 'acoesColetivas'), (s) =>
      setAcoes(Object.entries(s.val() || {}).map(([id, d]) => ({ id, ...d })).sort((a, b) => b.data.localeCompare(a.data))));
    const o3 = onValue(ref(db, 'usuarios'), (s) =>
      setUsuarios(Object.entries(s.val() || {}).map(([uid, d]) => ({ uid, ...d })).sort((a, b) => a.nome.localeCompare(b.nome))));
    return () => { o1(); o2(); o3(); };
  }, []);

  const noPeriodo = (d) => (!de || d >= de) && (!ate || d <= ate);
  const vF = useMemo(() => visitas.filter((v) => noPeriodo(v.dataVisita)), [visitas, de, ate]);
  const aF = useMemo(() => acoes.filter((a) => noPeriodo(a.data)), [acoes, de, ate]);
  const vTabela = useMemo(() => (func ? vF.filter((v) => v.uid === func) : vF), [vF, func]);

  return (
    <>
      <h1>Painel do administrador</h1>
      <div className="abas">
        {abas.map((a) => <button key={a} className={a === aba ? 'aba ativa' : 'aba'} onClick={() => setAba(a)}>{a}</button>)}
      </div>

      {(aba === 'Comparativo' || aba === 'Todas as visitas') && (
        <div className="card linha filtro">
          <label>De<input type="date" value={de} onChange={(e) => setDe(e.target.value)} /></label>
          <label>Até<input type="date" value={ate} onChange={(e) => setAte(e.target.value)} /></label>
          {aba === 'Todas as visitas' && (
            <label>Funcionário
              <select value={func} onChange={(e) => setFunc(e.target.value)}>
                <option value="">Todos os funcionários</option>
                {usuarios.map((u) => <option key={u.uid} value={u.uid}>{u.nome}</option>)}
              </select>
            </label>
          )}
          {(de || ate || func) && (
            <button className="btn btn-sec" onClick={() => { setDe(''); setAte(''); setFunc(''); }}>Limpar filtros</button>
          )}
        </div>
      )}

      {aba === 'Comparativo' && <Comparativo visitas={vF} acoes={aF} usuarios={usuarios} />}
      {aba === 'Todas as visitas' && <TodasVisitas visitas={vTabela} />}
      {aba === 'Ações coletivas' && <Acoes acoes={acoes} uid={usuario.uid} />}
      {aba === 'Usuários' && <Usuarios usuarios={usuarios} visitas={visitas} />}
    </>
  );
}

function Barra({ rotulo, partes, max }) {
  const total = partes.reduce((s, p) => s + p.valor, 0);
  return (
    <div className="barra-linha">
      <span className="barra-rotulo">{rotulo}</span>
      <div className="barra-trilho">
        {partes.map((p) => <div key={p.nome} className={`barra ${p.classe}`} style={{ width: `${(p.valor / max) * 100}%` }} title={`${p.nome}: ${p.valor}`} />)}
      </div>
      <strong className="barra-total">{total}</strong>
    </div>
  );
}

function Comparativo({ visitas, acoes, usuarios }) {
  const linhas = usuarios.map((u) => ({ nome: u.nome, visitas: visitas.filter((v) => v.uid === u.uid).length })).sort((a, b) => b.visitas - a.visitas);
  const max = Math.max(1, ...linhas.map((l) => l.visitas + acoes.length));
  const cidades = Object.entries(visitas.reduce((m, v) => { const c = v.cidade.trim(); m[c] = (m[c] || 0) + 1; return m; }, {})).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const maxC = Math.max(1, ...cidades.map((c) => c[1]));

  return (
    <>
      <div className="resumo">
        <div className="card"><span className="suave">Visitas no período</span><strong className="grande">{visitas.length}</strong></div>
        <div className="card"><span className="suave">Ações coletivas no período</span><strong className="grande">{acoes.length}</strong></div>
        <div className="card"><span className="suave">Funcionários cadastrados</span><strong className="grande">{usuarios.length}</strong></div>
      </div>
      <section className="card">
        <h2>Atividades por funcionário</h2>
        <p className="suave legenda"><i className="amostra b-visita" /> Visitas feitas <i className="amostra b-acao" /> Ações coletivas (todos participam)</p>
        {linhas.length === 0 && <p className="suave">Nenhum funcionário cadastrado ainda.</p>}
        {linhas.map((l) => (
          <Barra key={l.nome} rotulo={l.nome} max={max} partes={[{ nome: 'Visitas', valor: l.visitas, classe: 'b-visita' }, { nome: 'Ações coletivas', valor: acoes.length, classe: 'b-acao' }]} />
        ))}
      </section>
      <section className="card">
        <h2>Cidades mais visitadas</h2>
        {cidades.length === 0 && <p className="suave">Nenhuma visita no período.</p>}
        {cidades.map(([c, n]) => <Barra key={c} rotulo={c} max={maxC} partes={[{ nome: 'Visitas', valor: n, classe: 'b-visita' }]} />)}
      </section>
    </>
  );
}

function TodasVisitas({ visitas }) {
  const apagar = (v) => window.confirm(`Excluir a visita à empresa “${v.empresa}”? Isso não pode ser desfeito.`) && remove(ref(db, `visitas/${v.uid}/${v.id}`));
  if (visitas.length === 0) return <div className="card vazio">Nenhuma visita encontrada neste período.</div>;
  return (
    <div className="card tabela-wrap">
      <table>
        <thead><tr><th>Data</th><th>Funcionário</th><th>Empresa</th><th>Cidade</th><th>Objetivo</th><th>Assuntos tratados</th><th /></tr></thead>
        <tbody>
          {visitas.map((v) => (
            <tr key={v.id}>
              <td>{formatarData(v.dataVisita)}</td><td>{v.nomeUsuario}</td><td>{v.empresa}</td><td>{v.cidade}</td><td>{v.objetivo}</td><td>{v.assuntos}</td>
              <td><button className="btn btn-sec" onClick={() => apagar(v)}>Excluir</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Acoes({ acoes, uid }) {
  const [f, setF] = useState({ titulo: '', data: '', descricao: '' });
  const mudar = (e) => setF({ ...f, [e.target.name]: e.target.value });
  async function criar(e) {
    e.preventDefault();
    await push(ref(db, 'acoesColetivas'), { titulo: f.titulo.trim(), data: f.data, descricao: f.descricao.trim(), criadoPor: uid, criadoEm: Date.now() });
    setF({ titulo: '', data: '', descricao: '' });
  }
  const apagar = (a) => window.confirm(`Excluir a ação “${a.titulo}”?`) && remove(ref(db, `acoesColetivas/${a.id}`));
  return (
    <>
      <form className="card form" onSubmit={criar}>
        <h2>Nova ação coletiva</h2>
        <p className="suave">Ações em que todos os funcionários participaram, como o Novembro Azul.</p>
        <div className="grade-2">
          <label>Nome da ação<input name="titulo" value={f.titulo} onChange={mudar} required /></label>
          <label>Data<input type="date" name="data" value={f.data} onChange={mudar} required /></label>
        </div>
        <label>Descrição (opcional)<textarea name="descricao" rows="2" value={f.descricao} onChange={mudar} /></label>
        <div><button className="btn">Adicionar ação</button></div>
      </form>
      {acoes.length === 0 && <div className="card vazio">Nenhuma ação coletiva cadastrada ainda.</div>}
      {acoes.map((a) => (
        <article className="card visita acao" key={a.id}>
          <div className="visita-topo"><div><h3>{a.titulo}</h3><span className="suave">{formatarData(a.data)}</span></div><button className="btn btn-sec" onClick={() => apagar(a)}>Excluir</button></div>
          {a.descricao && <p>{a.descricao}</p>}
        </article>
      ))}
    </>
  );
}

function Usuarios({ usuarios, visitas }) {
  return (
    <div className="card tabela-wrap">
      <table>
        <thead><tr><th>Nome</th><th>E-mail</th><th>Tipo</th><th>Visitas registradas</th></tr></thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.uid}><td>{u.nome}</td><td>{u.email}</td><td>{u.administrador ? 'Administrador' : 'Funcionário'}</td><td>{visitas.filter((v) => v.uid === u.uid).length}</td></tr>
          ))}
        </tbody>
      </table>
      <p className="suave">Para tornar alguém administrador, altere o campo “administrador” para true no Realtime Database do Firebase.</p>
    </div>
  );
}
