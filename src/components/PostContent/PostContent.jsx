import { useEffect } from 'react';
import postData from '../../data/postData.json';
import './PostContent.styles.css';

const PostContent = () => {
  useEffect(() => {

  });

  return (
    <div className="post-container">
      <h1 className="post-title">Hi{postData.title}</h1>
    </div>
  );
};

export default PostContent;
