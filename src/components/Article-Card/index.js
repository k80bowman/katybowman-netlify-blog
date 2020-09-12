import React from 'react';
import { withPrefix } from 'gatsby';
import classNames from 'classnames';
import propTypes from './types';

const ArticleCard = (props) => {
  const { post } = props;
  const { slug } = post.fields;
  const {
    title,
    date,
    excerpt,
    category,
    imageLink,
    publication,
    pubLink,
  } = post.frontmatter;

  const hasImage = imageLink && imageLink !== 'none';
  const imgClasses = classNames('article-card__excerpt-with-img', {
    'article-card--book-review': category === 'Book Review' || category === 'Reading',
    'article-card--top-image': category !== 'Book Review' && category !== 'Reading',
  });

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
          <div className={imgClasses}>
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
