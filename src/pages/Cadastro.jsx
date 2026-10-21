import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { auth, db, DOMINIO_EMAIL } from '../firebase';

export default function Cadastro() {
  const [f, setF] = useState({ nome: '', email: '', senha: '', confirmar: '' });
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);
  const mudar = (e) => setF({ ...f, [e.target.name]: e.target.value });

  async function criar(e) {
    e.preventDefault();
    setErro('');
    const email = f.email.trim().toLowerCase();
    if (!email.endsWith(DOMINIO_EMAIL)) return setErro(`Use seu e-mail corporativo (final ${DOMINIO_EMAIL}).`);
    if (f.senha.length < 6) return setErro('A senha precisa ter pelo menos 6 caracteres.');
    if (f.senha !== f.confirmar) return setErro('As senhas não são iguais.');
    setCarregando(true);
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, f.senha);
      await updateProfile(user, { displayName: f.nome.trim() });
      await set(ref(db, `usuarios/${user.uid}`), { nome: f.nome.trim(), email, administrador: false, criadoEm: Date.now() });
    } catch (err) {
      setErro(err.code === 'auth/email-already-in-use' ? 'Este e-mail já tem uma conta. Volte e clique em Entrar.' : 'Não foi possível criar a conta. Tente novamente.');
    }
    setCarregando(false);
  }

  return (
    <div className="tela-auth">
      <form className="card form auth" onSubmit={criar}>
        <h1>Criar conta</h1>
        <p className="suave">Somente e-mails corporativos {DOMINIO_EMAIL}</p>
        <label>Nome completo<input name="nome" value={f.nome} onChange={mudar} required /></label>
        <label>E-mail corporativo<input type="email" name="email" value={f.email} onChange={mudar} required /></label>
        <label>Senha<input type="password" name="senha" value={f.senha} onChange={mudar} required /></label>
        <label>Repita a senha<input type="password" name="confirmar" value={f.confirmar} onChange={mudar} required /></label>
        {erro && <p className="aviso erro">{erro}</p>}
        <button className="btn" disabled={carregando}>{carregando ? 'Criando…' : 'Criar conta'}</button>
        <p className="suave">Já tem conta? <Link to="/login">Entrar</Link></p>
      </form>
    </div>
  );
}
