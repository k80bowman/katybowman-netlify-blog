import React from 'react';
import { withPrefix } from 'gatsby';
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
    tags,
    imageLink,
  } = props;

  const hasImage = imageLink && imageLink !== 'none';
  const featured = tags && tags.includes('featured');

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
            <img className="article-card__image" src={withPrefix(imageLink)} alt={title} />
            <p className="article-card__excerpt">{excerpt}</p>
          </div>
        ) : (
          <p className="article-card__excerpt">{excerpt}</p>
        )
        }
        <p className="article-card__pubLink">{pubLinkText}</p>
      </div>
    </a>
  );
};

ArticleCard.propTypes = propTypes;
ArticleCard.defaultProps = defaultProps;

export default ArticleCard;
