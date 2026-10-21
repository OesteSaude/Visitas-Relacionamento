import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { useTema } from '../contexts/ThemeContext';

export default function Layout() {
  const { perfil, admin } = useAuth();
  const { tema, alternar } = useTema();
  const navegar = useNavigate();
  const sair = async () => { await signOut(auth); navegar('/login'); };

  return (
    <>
      <header className="topo">
        <strong className="marca">Oeste Saúde · Relacionamento Corporativo</strong>
        <nav>
          <NavLink to="/" end>Registrar visita</NavLink>
          <NavLink to="/minhas-visitas">Minhas visitas</NavLink>
          {admin && <NavLink to="/admin">Painel do administrador</NavLink>}
        </nav>
        <div className="topo-acoes">
          <span className="nome">{perfil?.nome}</span>
          <button className="btn btn-sec" onClick={alternar}>{tema === 'light' ? 'Modo escuro' : 'Modo claro'}</button>
          <button className="btn btn-sec" onClick={sair}>Sair</button>
        </div>
      </header>
      <main className="conteudo"><Outlet /></main>
    </>
  );
}
