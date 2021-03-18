/* eslint-disable react/prop-types */
import './PostTags.styles.css';

const PostTags = ({ tags }) => (
  <div className="post-tags">
    <h2 className="tag-title">Tags</h2>
    <div className="tags-container">
      {tags.map(tag => (
        <a key={tag} href={`/tagged/${tag}`}>
          <div className="tag">{`#${tag}`}</div>
        </a>
      ))}
    </div>
  </div>
);

export default PostTags;
