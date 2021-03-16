import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HnLogo from '../../images/hn-logo.png';
import { setColorScheme } from '../../redux';
import './PrimaryNavBar.styles.css';

const PrimaryNavBar = () => {
  const [colorAnimate, setColorAnimate] = useState(false);
  const primary = useSelector(state => state.siteData.primaryNav);
  const loginStatus = useSelector(state => state.siteData.loginStatus);
  const colorScheme = useSelector(state => state.siteData.colorScheme);
  const dispatch = useDispatch();

  let colorAnimateTimeout;

  const toggleColorPreference = () => {
    dispatch(setColorScheme(colorScheme === 'light' ? 'dark' : 'light'));
  };

  const handleColorInput = () => {
    setColorAnimate(true);
    toggleColorPreference();
    colorAnimateTimeout = setTimeout(() => {
      setColorAnimate(false);
    }, 600);
  };

  useEffect(() => () => {
    clearTimeout(colorAnimateTimeout);
  }, []);

  return (
    <div className={`h-menu color-${colorScheme}`}>
      <a href="./" className="logo-link">
        <img className="hn-logo" src={HnLogo} alt="Hacker Noon logo" />
      </a>
      <div className={`nav-right ${primary ? 'show' : 'hide'}`}>
        <form id="main-nav-search" className="search-form">
          <label className="label-name" htmlFor="search">
            <input type="search" name="search" placeholder="Search..." className="search-input" id="search" />
            <button className="search-submit" type="submit"><span>Search</span></button>
          </label>
        </form>
        <nav className="nav-right-menu-container">
          <ul className={`nav-right-menu color-${colorScheme}`}>
            <li className="menu-item write-cta"><a href="./" className={`menu-link ${colorScheme}`}>Start Writing</a></li>
            <li className={`menu-item menu-profile ${loginStatus ? 'menu-profile-pic' : ''}`}>
              {loginStatus ? '' : <a href="./" className={`menu-link ${colorScheme}`}>Log in</a>}
            </li>
            <li className="menu-item">
              <button
                type="button"
                className={`test color-icon ${colorAnimate ? 'animate' : ''} ${colorScheme === 'light' ? 'menu-sun' : 'menu-moon'}`}
                onClick={handleColorInput}
              >
                <span />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PrimaryNavBar;
