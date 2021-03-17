import { useEffect } from 'react';

/* eslint-disable react/prop-types */
const RelatedContent = ({ stories }) => {
  useEffect(() => {
    console.log('load');
  }, []);
  return (
    <div className="related-content">
      <h2 className="related-content-title">Related</h2>
      <div className="related-stories">
        {stories && stories.map(story => {
          if (story.id === undefined) {
            return (
              <article key={`sponsor${story.link}`} className="related-story">
                <h3>{story.text}</h3>
              </article>
            );
          }
          return (
            <article key={story.id} className="related-story">
              <h3>{story.title}</h3>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedContent;
