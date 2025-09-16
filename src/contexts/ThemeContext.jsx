import { createContext, useContext, useState } from 'react';

const ThemeCtx = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggle = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  return (
    <ThemeCtx.Provider value={{ theme, toggle }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeCtx);
}

// Usage in a component
function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#222', color: theme === 'light' ? '#000' : '#fff', padding: '2rem', textAlign: 'center' }}>
      <p>Current theme: {theme}</p>
      <button onClick={toggle}>Toggle Theme</button>
    </div>
  );
}
