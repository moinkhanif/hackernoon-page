import { useEffect } from 'react';
import './RelatedContent.styles.css';

/* eslint-disable react/prop-types */
const RelatedContent = ({ stories }) => {
  useEffect(() => {

  }, []);
  return (
    <div className="related-content">
      <h2 className="related-content-title tag-title">Related</h2>
      <div className="related-stories">
        {stories && stories.map(story => {
          if (story.id === undefined) {
            return (
              <article key={`sponsor${story.link}`} className="related-story">
                <div className="title-container">
                  <a href={story.link} className="story-title">{story.text}</a>
                </div>
                <figure className="image-container">
                  <img src={story.image} alt={story.text} className="related-feature-image" />
                </figure>
                <div className="related-post-details">
                  <div className="related-post-links">
                    <div className="related-post-link">
                      <a href={story.link} rel="noreferrer" target="_blank">
                        {`Visit ${story.companyName}`}
                        <span className="external-symbol" />
                      </a>
                      <div className="related-post-website">
                        {story.website}
                      </div>
                    </div>
                  </div>
                  <div className="promoted-button">
                    <a
                      className="promoted-link no-highlight"
                      href="https://sponsor.hackernoon.com/ad-by-tag"
                    >
                      promoted
                    </a>
                  </div>
                </div>
              </article>
            );
          }
          return (
            <article key={story.id} className="related-story">
              <div className="title-container">
                <a href={`/${story.slug}`} className="story-title">{story.title}</a>
              </div>
              <figure className="image-container">
                <img src={story.mainImage} alt={story.title} className="related-feature-image" />
              </figure>
              <div className="related-post-details">
                <div className="related-post-user-links">
                  <img src={story.profile.avatar} alt="user profile" className="user-profile-pic" />
                  <div className="related-user-info">
                    <a href={`u/${story.profile.handle}`} className="related-user-link">
                      {`@${story.profile.handle}`}
                    </a>
                    <p>{story.profile.displayName}</p>
                  </div>
                </div>
                <div className="related-post-meta">
                  <p className="related-post-estimated-time">
                    {story.estimatedTime ? `${story.estimatedTime}min` : ''}
                  </p>
                  <p className="related-post-published-date">
                    {(() => {
                      const receivedDate = new Date(story.publishedAt * 1000);
                      const month = `${(receivedDate.getMonth() + 1) < 10 ? '0' : ''}${receivedDate.getMonth() + 1}`;
                      const date = `${receivedDate.getDate() < 10 ? '0' : ''}${receivedDate.getDate()}`;
                      const year = `${receivedDate.getFullYear()}`.slice(-2);
                      return `${month}/${date}/${year}`;
                    })()}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedContent;
