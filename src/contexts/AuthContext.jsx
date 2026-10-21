import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { onValue, ref } from 'firebase/database';
import { auth, db } from '../firebase';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [perfil, setPerfil] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(
    () =>
      onAuthStateChanged(auth, (u) => {
        setUsuario(u);
        if (!u) { setPerfil(null); setCarregando(false); }
      }),
    []
  );

  useEffect(() => {
    if (!usuario) return;
    return onValue(ref(db, `usuarios/${usuario.uid}`), (snap) => {
      setPerfil(snap.val());
      setCarregando(false);
    });
  }, [usuario]);

  const admin = perfil?.administrador === true;
  return <AuthContext.Provider value={{ usuario, perfil, admin, carregando }}>{children}</AuthContext.Provider>;
}
