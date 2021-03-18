import './SocialShares.styles.css';

const SocialShares = () => (
  <span className="social-shares">
    <button type="button" className="social-icon twitter-icon">
      <span className="social-label">Twitter</span>
    </button>
    <button type="button" className="social-icon facebook-icon">
      <span className="social-label">Facebook</span>
    </button>
    <button type="button" className="social-icon linkedin-icon">
      <span className="social-label">LinkedIn</span>
    </button>
    <button type="button" className="social-icon email-icon">
      <span className="social-label">Email</span>
    </button>
  </span>
);

export default SocialShares;
