import React from 'react';
import { propTypes, defaultProps } from './types';

const ArticleCard = (props) => {
  const {
    title,
    category,
    excerpt,
    date,
    slug,
    publication,
    pubLink,
    imageName,
    featured,
    imageLink,
  } = props;

  const hasImage = imageName !== 'none';

  let link;
  let pubLinkText;

  if (pubLink !== 'none' && publication !== 'none') {
    link = pubLink;
    pubLinkText = publication;
  } else {
    link = slug;
    pubLinkText = date;
  }

  return (
    <div className="article-card">
      <p className="article-card__category">{category}</p>
      <a href={link}>
        <h3 className="article-card__title">{title}</h3>
      </a>
      {hasImage && featured ? (
        <div className="article-card__excerpt-with-img">
          <img className="article-card__image" src={imageLink} alt={title} />
          <p className="article-card__excerpt">{excerpt}</p>
        </div>
      ) : (
        <p className="article-card__excerpt">{excerpt}</p>
      )
      }
      <a href={link} className="article-card__pubLink">{pubLinkText}</a>
    </div>
  );
};

ArticleCard.propTypes = propTypes;
ArticleCard.defaultProps = defaultProps;

export default ArticleCard;
