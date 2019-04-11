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
    <a href={link}>
      <div className="article-card">
        <p className="article-card__category">{category}</p>
        <h3 className="article-card__title">{title}</h3>
        {hasImage && featured ? (
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
