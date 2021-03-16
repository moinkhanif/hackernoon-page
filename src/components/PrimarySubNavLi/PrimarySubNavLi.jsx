/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import SubMenuAnchorTag from '../SubMenuAnchorTag/SubMenuAnchorTag';
import './PrimarySubNavLi.styles.css';

const PrimarySubNavLi = ({ navElement }) => {
  const subLinkMenu = subLinks => {
    if (subLinks && subLinks.length > 0) {
      return (
        <div className="sub-menu-container">
          {subLinks.map(sMenu => (
            <section key={sMenu.id} className="submenu-section">
              <header className="submenu-header">
                <SubMenuAnchorTag
                  name={sMenu.name}
                  link={sMenu.link}
                  external={sMenu.external}
                  classes="submenu-heading"
                />
              </header>
              {sMenu.subLinks && sMenu.subLinks.length > 0 ? (
                <ul className="submenu-ul">
                  {sMenu.subLinks.map(listItem => (
                    <li key={listItem.id} className="submenu-list-item">
                      <SubMenuAnchorTag
                        name={listItem.name}
                        link={listItem.link}
                        external={listItem.external}
                        classes="submenu-list-item-name"
                      />
                    </li>
                  ))}
                </ul>
              ) : ''}
            </section>
          ))}
        </div>
      );
    }
    return '';
  };

  return (
    <li className="psub-nav-menu-item">
      <SubMenuAnchorTag
        name={navElement.name}
        link={navElement.link}
        external={navElement.external}
        classes="psub-link"
      />
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
