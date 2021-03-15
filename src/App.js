import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { setColorScheme, setPrimaryNav } from './redux';

function App() {
  const [scrollValue, setScrollValue] = useState(0);
  const [darkColor, setDarkColor] = useState(true);
  const primaryNav = useSelector(state => state.siteData.primaryNav);
  const colorScheme = useSelector(state => state.siteData.colorScheme);
  const dispatch = useDispatch();

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleColorScheme);
    };
  }, []);

  useEffect(() => {
    if (scrollValue > 100) {
      if (primaryNav === true) {
        dispatch(setPrimaryNav(false));
      }
    } else if (primaryNav === false) {
      dispatch(setPrimaryNav(true));
    }
  }, [scrollValue]);

  useEffect(() => {
    const color = darkColor ? 'dark' : 'light';
    dispatch(setColorScheme(color));
  }, [darkColor]);

  return (
    <div className={`App ${colorScheme}`}>
      <header className="App-header">
        <NavBar />
      </header>
    </div>
  );
}

export default App;
