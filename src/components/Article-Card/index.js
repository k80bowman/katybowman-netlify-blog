import React from 'react';
import { withPrefix } from 'gatsby';
import propTypes from './types';

const ArticleCard = (props) => {
  const {
    title,
    category,
    excerpt,
    date,
    slug,
    publication,
    pubLink,
    imageLink,
  } = props;

  const hasImage = imageLink && imageLink !== 'none';

  let link;
  let pubLinkText;


  if (pubLink !== 'none' && pubLink && publication !== 'none') {
    link = pubLink;
    pubLinkText = publication;
  } else {
    link = slug;
    pubLinkText = date;
  }

  return (
    <a href={link}>
      <div className="article-card card">
        <p className="article-card__category">{category}</p>
        <h3 className="article-card__title card__title">{title}</h3>
        {hasImage ? (
          <div className="article-card__excerpt-with-img">
            <div className="article-card__image-wrapper">
              <img className="article-card__image" src={withPrefix(imageLink)} alt={title} />
            </div>
            <p className="article-card__excerpt">{excerpt}</p>
          </div>
        ) : (
          <p className="article-card__excerpt">{excerpt}</p>
        )}
        <p className="article-card__pubLink">{pubLinkText}</p>
      </div>
    </a>
  );
};

ArticleCard.propTypes = propTypes;

export default ArticleCard;
