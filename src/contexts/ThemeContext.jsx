import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();
export const useTema = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState(() => localStorage.getItem('tema') || 'light');
  useEffect(() => {
    document.documentElement.dataset.theme = tema;
    localStorage.setItem('tema', tema);
  }, [tema]);
  const alternar = () => setTema((t) => (t === 'light' ? 'dark' : 'light'));
  return <ThemeContext.Provider value={{ tema, alternar }}>{children}</ThemeContext.Provider>;
}
