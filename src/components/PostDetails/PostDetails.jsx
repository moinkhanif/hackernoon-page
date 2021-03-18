/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './PostDetails.styles.css';

const PostDetails = ({ postMarkup }) => (
  <div className="post-details">
    <div className="inner-details" dangerouslySetInnerHTML={{ __html: postMarkup }} />
  </div>
);

export default PostDetails;
