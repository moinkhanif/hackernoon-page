import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [primaryNav, setPrimaryNav] = useState(true);
  const [scrollValue, setScrollValue] = useState(0);
  const [loginStatus, setLoginStatus] = useState(false);
  const [darkColor, setDarkColor] = useState(true);
  const [colorScheme, setColorScheme] = useState('light');

  const handleScroll = () => {
    setScrollValue(window.scrollY);
  };

  const handleColorScheme = color => {
    setDarkColor(color.matches);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleColorScheme(window.matchMedia('(prefers-color-scheme: dark)'));
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleColorScheme);

    // /Sample Use Of Login Status
    setLoginStatus(false);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleColorScheme);
    };
  }, []);

  useEffect(() => {
    if (scrollValue > 100) {
      if (primaryNav === true) {
        setPrimaryNav(false);
      }
    } else if (primaryNav === false) {
      setPrimaryNav(true);
    }
  }, [scrollValue]);

  useEffect(() => {
    const color = darkColor ? 'dark' : 'light';
    setColorScheme(color);
  }, [darkColor]);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar primary={primaryNav} loginStatus={loginStatus} colorScheme={colorScheme} />
      </header>
    </div>
  );
}

export default App;
