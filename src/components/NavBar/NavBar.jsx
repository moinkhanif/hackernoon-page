/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import HnLogo from '../../images/hn-logo.png';
import './NavBar.styles.css';

const NavBar = ({ primary, loginStatus, colorScheme }) => (
  <div className={`h-menu color-${colorScheme}`}>
    <a href="./" className="logo-link">
      <img className="hn-logo" src={HnLogo} alt="Hacker Noon logo" />
    </a>
    <div className={`nav-right ${primary ? 'show' : 'hide'}`}>
      <form id="main-nav-search" className="search-form">
        <label className="label-name hide" htmlFor="search">Search</label>
        <input type="search" name="search" placeholder="Search..." className="search-input" id="search" />
        <button className="search-submit" type="submit"><span>Search</span></button>
      </form>
      <nav className="nav-right-menu-container">
        <ul className={`nav-right-menu color-${colorScheme}`}>
          <li className="menu-item write-cta"><a href="./" className="menu-link">Start Writing</a></li>
          <li className={`menu-item menu-profile ${loginStatus ? 'menu-profile-pic' : ''}`}>
            {loginStatus ? '' : <a href="./" className="menu-link">Log in</a>}
          </li>
          <li className={`menu-item color-icon ${colorScheme === 'light' ? 'menu-moon' : 'menu-sun'}`} />
        </ul>
      </nav>
    </div>
  </div>
);

NavBar.propTypes = {
  primary: PropTypes.bool.isRequired,
  loginStatus: PropTypes.bool.isRequired,
  colorScheme: PropTypes.string.isRequired,
};

export default NavBar;
