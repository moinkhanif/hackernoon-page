/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import HnLogo from '../../images/hn-logo.png';
import './NavBar.styles.css';

const NavBar = ({ primary, loginStatus, colorScheme }) => (
  <nav>
    <img src={HnLogo} alt="Hacker Noon logo" />
    <div className={`nav-right ${primary ? 'show' : 'hide'}`}>
      <form id="main-nav-search">
        <label htmlFor="search">Search</label>
        <input type="search" name="search" id="search" />
        <button type="submit">Search</button>
      </form>
      <nav>
        <ul className={`color-${colorScheme}`}>
          <li>Start Writing</li>
          {loginStatus ? <li className="menu-profile-pic" /> : <li>Log in</li>}
          <li className={colorScheme === 'light' ? 'menu-moon' : 'menu-sun'} />
        </ul>
      </nav>
    </div>
  </nav>
);

export default NavBar;
