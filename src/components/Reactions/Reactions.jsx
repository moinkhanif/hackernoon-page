/* eslint-disable react/prop-types */
import './Reactions.styles.css';

const Reactions = ({ reactionsData }) => (
  <div className="reactions-container">
    <span className="total-reactions">{reactionsData.total}</span>
    <span className="reaction-icon heart" />
    <span className="reaction-icon bulb" />
    <span className="reaction-icon boat" />
    <span className="reaction-icon money" />
  </div>
);

export default Reactions;
