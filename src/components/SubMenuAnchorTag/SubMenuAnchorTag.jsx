import PropTypes from 'prop-types';

const SubMenuAnchorTag = ({
  name, link, external, classes,
}) => (
  <a
    href={link}
    rel="noreferrer"
    target={external ? '_blank' : ''}
    className={classes}
  >
    {name}
  </a>
);

SubMenuAnchorTag.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  external: PropTypes.bool,
  classes: PropTypes.string.isRequired,
};

SubMenuAnchorTag.defaultProps = {
  external: false,
};

export default SubMenuAnchorTag;
