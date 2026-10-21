import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function RotaProtegida({ somenteAdmin = false }) {
  const { usuario, admin, carregando } = useAuth();
  if (carregando) return <p className="carregando">Carregando…</p>;
  if (!usuario) return <Navigate to="/login" replace />;
  if (somenteAdmin && !admin) return <Navigate to="/" replace />;
  return <Outlet />;
}

export function RotaPublica() {
  const { usuario, carregando } = useAuth();
  if (carregando) return <p className="carregando">Carregando…</p>;
  return usuario ? <Navigate to="/" replace /> : <Outlet />;
}
