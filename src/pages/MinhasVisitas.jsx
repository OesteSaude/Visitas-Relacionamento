import { useEffect, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import { db, formatarData } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import VisitForm from '../components/VisitForm';

export default function MinhasVisitas() {
  const { usuario } = useAuth();
  const [visitas, setVisitas] = useState(null);
  const [acoes, setAcoes] = useState([]);
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    const off1 = onValue(ref(db, `visitas/${usuario.uid}`), (s) => {
      const v = s.val() || {};
      setVisitas(Object.entries(v).map(([id, d]) => ({ id, uid: usuario.uid, ...d })).sort((a, b) => b.dataVisita.localeCompare(a.dataVisita)));
    });
    const off2 = onValue(ref(db, 'acoesColetivas'), (s) => {
      setAcoes(Object.entries(s.val() || {}).map(([id, d]) => ({ id, ...d })).sort((a, b) => b.data.localeCompare(a.data)));
    });
    return () => { off1(); off2(); };
  }, [usuario.uid]);

  if (!visitas) return <p className="carregando">Carregando…</p>;

  return (
    <>
      <h1>Minhas visitas</h1>
      <p className="suave">Você registrou {visitas.length} {visitas.length === 1 ? 'visita' : 'visitas'}. Clique em Editar para corrigir qualquer informação.</p>

      {visitas.length === 0 && <div className="card vazio">Você ainda não registrou visitas. Use a opção “Registrar visita” no menu.</div>}

      {visitas.map((v) =>
        editando === v.id ? (
          <VisitForm key={v.id} visita={v} aoSalvar={() => setEditando(null)} aoCancelar={() => setEditando(null)} />
        ) : (
          <article className="card visita" key={v.id}>
            <div className="visita-topo">
              <div><h3>{v.empresa}</h3><span className="suave">{v.cidade} · {formatarData(v.dataVisita)}</span></div>
              <button className="btn btn-sec" onClick={() => setEditando(v.id)}>Editar</button>
            </div>
            <p><strong>Objetivo:</strong> {v.objetivo}</p>
            <p><strong>Assuntos tratados:</strong> {v.assuntos}</p>
          </article>
        )
      )}

      {acoes.length > 0 && (
        <>
          <h2>Ações coletivas da equipe</h2>
          <p className="suave">Ações em que todo o departamento participou.</p>
          {acoes.map((a) => (
            <article className="card visita acao" key={a.id}>
              <h3>{a.titulo}</h3>
<span className="suave">
  {[a.cidade, formatarData(a.data), a.nomeUsuario && `registrada por ${a.nomeUsuario}`].filter(Boolean).join(' · ')}
</span>
{a.objetivo && <p><strong>Objetivo:</strong> {a.objetivo}</p>}
{a.descricao && <p>{a.descricao}</p>}
            </article>
          ))}
        </>
      )}
    </>
  );
}
