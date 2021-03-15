import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import HnLogo from '../../images/hn-logo.png';
import './NavBar.styles.css';

const NavBar = ({
  primary, loginStatus, colorScheme, toggleColorPreference,
}) => {
  const [colorAnimate, setColorAnimate] = useState(false);

  let colorAnimateTimeout;

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
            <li>
              <button
                type="button"
                className={`menu-item color-icon ${colorAnimate ? 'animate' : ''} ${colorScheme === 'light' ? 'menu-sun' : 'menu-moon'}`}
                onClick={handleColorInput}
                onKeyPress={handleColorInput}
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

NavBar.propTypes = {
  primary: PropTypes.bool.isRequired,
  loginStatus: PropTypes.bool.isRequired,
  colorScheme: PropTypes.string.isRequired,
  toggleColorPreference: PropTypes.func.isRequired,
};

export default NavBar;
