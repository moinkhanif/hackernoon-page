import sponsorImage from '../../images/sponsorBar.jpeg';
import './SponsoredNavBar.styles.css';

const SponsorNavBar = () => (
  <div className="sponsored-bar">
    <a href="./" className="sponsored-bar-link">
      <img className="sponsored-image" src={sponsorImage} alt="Sponsored content" />
      <span className="sponsored-text">Download this sponsored VPN</span>
    </a>
  </div>
);

export default SponsorNavBar;
