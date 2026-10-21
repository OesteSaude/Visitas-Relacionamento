import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function entrar(e) {
    e.preventDefault();
    setErro(''); setCarregando(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), senha);
    } catch {
      setErro('E-mail ou senha incorretos. Confira os dados e tente de novo.');
    }
    setCarregando(false);
  }

  return (
    <div className="tela-auth">
      <form className="card form auth" onSubmit={entrar}>
        <h1>Entrar</h1>
        <p className="suave">Registro de visitas do Relacionamento Corporativo</p>
        <label>E-mail<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
        <label>Senha<input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required /></label>
        {erro && <p className="aviso erro">{erro}</p>}
        <button className="btn" disabled={carregando}>{carregando ? 'Entrando…' : 'Entrar'}</button>
        <p className="suave">Ainda não tem conta? <Link to="/cadastro">Criar conta</Link></p>
      </form>
    </div>
  );
}
