import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Reactions from '../Reactions/Reactions';
import SocialShares from '../SocialShares/SocialShares';
import postData from '../../data/postData.json';
import './PostContent.styles.css';

const PostContent = () => {
  const [publishedMonth, setPublishedMonth] = useState('');
  const [publishedMonthName, setPublishedMonthName] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [publishedYear, setPublishedYear] = useState('');

  const ordinal = number => {
    if (number !== '') {
      const englishOrdinalRules = new Intl.PluralRules('en', {
        type: 'ordinal',
      });
      const suffixes = {
        one: 'st',
        two: 'nd',
        few: 'rd',
        other: 'th',
      };
      const suffix = suffixes[englishOrdinalRules.select(number)];
      return (number + suffix);
    }
    return '';
  };

  useEffect(() => {
    const postDate = new Date(postData.publishedAt * 1000);
    setPublishedMonth(postDate.getMonth() + 1);
    setPublishedDate(postDate.getDate());
    setPublishedYear(postDate.getFullYear());
    setPublishedMonthName(postDate.toLocaleString('default', { month: 'long' }));
  });

  return (
    <>
      <Helmet>
        <title>{`${postData.title} | HackerNoon`}</title>
      </Helmet>
      <main className="post-container">
        <h1 className="post-title">{postData.title}</h1>
        <div className="main-post-meta">
          <div className="date-bookmark-container">
            <a
              className="post-date"
              href={`/archives/${publishedYear}/${publishedMonth < 10 ? '0' : ''}${publishedMonth}/${publishedDate}`}
            >
              {`${publishedMonthName} ${ordinal(publishedDate)} ${publishedYear}`}
            </a>
            <span className="total-booksmarks">
              <span className="star-icon" />
              <span>750 reads</span>
            </span>
            <span className="bookmark-icon" />
          </div>
          <div className="post-reactions">
            <Reactions reactionsData={postData.reactions} />
          </div>
        </div>
        <img className="featured-image" src={postData.mainImage} alt="post related main pic" />
        <div className="post-details" />
        <div className="bottom-reactions">
          <Reactions reactionsData={postData.reactions} />
        </div>
        <div className="social-media-share-container">
          <span className="social-media-share-text">Share this story</span>
          <SocialShares />
        </div>
      </main>
    </>
  );
};

export default PostContent;
