import React from 'react';
import { propTypes } from './types';

const ExperienceCard = (props) => {
  const {
    title,
    org,
    orgLink,
    dates,
    skills,
    summary,
  } = props;

  return (
    <div className="experience-card">
      <h3 className="experience-card__title">{title}</h3>
      <a className="experience-card__org" href={orgLink}>{org}</a>
      <p className="experience-card__dates">{dates}</p>
      {skills.forEach((skill, index) => {
        if (index === 0) { return (<span>{skill}</span>); }

        return (
          <div>
            <span>|</span>
            <span>{skill}</span>
          </div>
        );
      })}
      <p className="experience-card__summary">{summary}</p>
    </div>
  );
};

ExperienceCard.propTypes = propTypes;

export default ExperienceCard;
