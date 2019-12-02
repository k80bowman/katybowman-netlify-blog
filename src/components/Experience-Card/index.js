import React from 'react';
import { propTypes } from './types';

const ExperienceCard = (props) => {
  const { position } = props;

  const {
    title,
    org,
    orgLink,
    dates,
    skills,
    summary,
  } = position;

  return (
    <div className="experience-card card">
      <h4 className="experience-card__title card__title">{title}</h4>
      { org !== 'none'
        ? <a className="experience-card__org" href={orgLink}>{org}</a>
        : false}
      <p className="experience-card__dates">{dates}</p>
      <div className="experience-card__skill-list">
        {skills.forEach((skill, index) => {
          if (index === 0) { return (<span>{skill}</span>); }

          return (
            <div>
              <span>|</span>
              <span>{skill}</span>
            </div>
          );
        })}
      </div>
      { /* TODO: why am I using dangerouslySetInnerHTML here? */ }
      <div className="experience-card__summary" dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};

ExperienceCard.propTypes = propTypes;

export default ExperienceCard;
