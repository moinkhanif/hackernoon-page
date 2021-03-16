/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import './PrimarySubNavLi.styles.css';

const PrimarySubNavLi = ({ navElement }) => {
  const subLinkMenu = subLinks => {
    if (subLinks && subLinks.length > 0) {
      return (
        <div className="sub-menu-container">
          {subLinks.map(sMenu => (
            <section className="submenu-section">
              <header className="submenu-header">
                <a href={sMenu.link} className="submenu-heading">{sMenu.name}</a>
              </header>
              <ul className="submenu-ul">
                {sMenu.subLinks.map(listItem => (
                  <li className="submenu-list-item">
                    <a href={listItem.link} className="submenu-list-item-name">{listItem.name}</a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      );
    }
    return '';
  };

  return (
    <li className="psub-nav-menu-item">
      <a
        href={navElement.link}
        rel="noreferrer"
        target={navElement.external ? '_blank' : ''}
        className="psub-link"
      >
        {navElement.name}
      </a>
      {subLinkMenu(navElement.subLinks)}
    </li>
  );
};

PrimarySubNavLi.propTypes = {
  navElement: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    link: PropTypes.string,
    external: PropTypes.bool,
  }).isRequired,
};

export default PrimarySubNavLi;
