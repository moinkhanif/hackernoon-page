/* eslint-disable react/no-danger */
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import './PostDetails.styles.css';

const PostDetails = ({ postMarkup }) => {
  const purifiedMarkup = DOMPurify.sanitize(postMarkup, { ADD_TAGS: ['iframe'], ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'] });
  return (
    <div className="post-details">
      <div className="inner-details" dangerouslySetInnerHTML={{ __html: purifiedMarkup }} />
    </div>
  );
};

PostDetails.propTypes = {
  postMarkup: PropTypes.string.isRequired,
};

export default PostDetails;
