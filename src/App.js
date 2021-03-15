import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { setColorScheme } from './redux';

function App() {
  const [primaryNav, setPrimaryNav] = useState(true);
  const [scrollValue, setScrollValue] = useState(0);
  const [loginStatus, setLoginStatus] = useState(false);
  const [darkColor, setDarkColor] = useState(true);
  const colorScheme = useSelector(state => state.siteData.colorScheme);
  const dispatch = useDispatch();

  const handleScroll = () => {
    setScrollValue(window.scrollY);
  };

  const handleColorScheme = color => {
    setDarkColor(color.matches);
  };

  const toggleColorPreference = () => {
    dispatch(setColorScheme(colorScheme === 'light' ? 'dark' : 'light'));
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
    dispatch(setColorScheme(color));
  }, [darkColor]);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar
          primary={primaryNav}
          loginStatus={loginStatus}
          colorScheme={colorScheme}
          toggleColorPreference={toggleColorPreference}
        />
      </header>
    </div>
  );
}

export default App;
