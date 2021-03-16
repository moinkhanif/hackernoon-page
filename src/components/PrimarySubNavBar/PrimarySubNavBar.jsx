import navData from './subNavData';
import PrimarySubNavLi from '../PrimarySubNavLi/PrimarySubNavLi';
import './PrimarySubNavBar.styles.css';

const PrimarySubNavBar = () => (
  <nav className="primary-sub-navbar">
    <ul className="psub-nav-ul">
      {navData.map(navElement => <PrimarySubNavLi key={navElement.id} navElement={navElement} />)}
    </ul>
  </nav>
);

export default PrimarySubNavBar;
