import footerMenuData from '../../data/footerMenu.json';
import './AppFooter.styles.css';

const AppFooter = () => (
  <footer>
    <nav className="footer-nav">
      <ul className="footer-ul footer-top-menu">
        { footerMenuData['top-menu'].map(menuItem => (
          <li key={menuItem.name} className="footer-menu-item">
            <a href={menuItem.link} className="footer-link">{menuItem.name}</a>
          </li>
        ))}
      </ul>
      <ul className="footer-ul footer-bottom-menu">
        { footerMenuData['bottom-menu'].map(menuItem => (
          <li key={menuItem.name} className="footer-menu-item">
            <a href={menuItem.link} className="footer-link">{menuItem.name}</a>
          </li>
        ))}
      </ul>
    </nav>
    <div className="footer-social">
      <nav>
        <ul>
          <li className="social-icon linkedin-icon" />
          <li className="social-icon facebook-icon" />
          <li className="social-icon twitter-icon" />
          <li className="social-icon github-icon" />
          <li className="social-icon youtube-icon" />
          <li className="social-icon instagram-icon" />
          <li className="social-icon podcast-icon" />
          <li className="social-icon feed-icon" />
        </ul>
      </nav>
    </div>
  </footer>
);

export default AppFooter;
