import { useState } from 'react';
import { push, ref, update } from 'firebase/database';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

const hoje = () => new Date().toLocaleDateString('en-CA'); // AAAA-MM-DD

export default function VisitForm({ visita, aoSalvar, aoCancelar }) {
  const { usuario, perfil } = useAuth();
  const [dados, setDados] = useState({
    dataVisita: visita?.dataVisita || hoje(),
    empresa: visita?.empresa || '',
    cidade: visita?.cidade || '',
    objetivo: visita?.objetivo || '',
    assuntos: visita?.assuntos || '',
  });
  const [coletiva, setColetiva] = useState(false);
  const [salvando, setSalvando] = useState(false);
  const [msg, setMsg] = useState(null);
  const mudar = (e) => setDados({ ...dados, [e.target.name]: e.target.value });

  async function enviar(e) {
    e.preventDefault();
    setSalvando(true); setMsg(null);
    try {
      const limpo = Object.fromEntries(Object.entries(dados).map(([k, v]) => [k, v.trim()]));
      const nome = perfil?.nome || usuario.email;
      if (visita?.id) {
        await update(ref(db, `visitas/${visita.uid}/${visita.id}`), { ...limpo, editadoEm: Date.now() });
      } else if (coletiva) {
        await push(ref(db, 'acoesColetivas'), {
          titulo: limpo.empresa,
          data: limpo.dataVisita,
          cidade: limpo.cidade,
          objetivo: limpo.objetivo,
          descricao: limpo.assuntos,
          criadoPor: usuario.uid,
          nomeUsuario: nome,
          criadoEm: Date.now(),
        });
      } else {
        await push(ref(db, `visitas/${usuario.uid}`), { ...limpo, nomeUsuario: nome, criadoEm: Date.now() });
      }
      if (!visita) {
        setDados({ ...dados, empresa: '', cidade: '', objetivo: '', assuntos: '' });
        setColetiva(false);
      }
      setMsg({
        ok: true,
        texto: visita ? 'Alterações salvas.' : coletiva ? 'Ação coletiva registrada. Toda a equipe vai vê-la.' : 'Visita registrada com sucesso.',
      });
      aoSalvar?.();
    } catch {
      setMsg({ ok: false, texto: 'Não foi possível salvar. Verifique sua conexão e tente de novo.' });
    }
    setSalvando(false);
  }

  return (
    <form className="card form" onSubmit={enviar}>
      <div className="grade-2">
        <label>Data da visita
          <input type="date" name="dataVisita" value={dados.dataVisita} onChange={mudar} required />
        </label>
        <label>Cidade
          <input name="cidade" value={dados.cidade} onChange={mudar} required />
        </label>
      </div>
      <label>Empresa
        <input name="empresa" value={dados.empresa} onChange={mudar} required />
      </label>
      <label>Objetivo da visita
        <textarea name="objetivo" rows="2" value={dados.objetivo} onChange={mudar} required />
      </label>
      <label>Assuntos tratados
        <textarea name="assuntos" rows="4" value={dados.assuntos} onChange={mudar} required />
      </label>

      {!visita && (
        <label className="check">
          <input type="checkbox" checked={coletiva} onChange={(e) => setColetiva(e.target.checked)} />
          Foi uma visita coletiva (toda a equipe participou)
        </label>
      )}

      {msg && <p className={msg.ok ? 'aviso ok' : 'aviso erro'}>{msg.texto}</p>}
      <div className="linha">
        <button className="btn" disabled={salvando}>
          {salvando ? 'Salvando…' : visita ? 'Salvar alterações' : coletiva ? 'Registrar ação coletiva' : 'Registrar visita'}
        </button>
        {aoCancelar && <button type="button" className="btn btn-sec" onClick={aoCancelar}>Cancelar</button>}
      </div>
    </form>
  );
}