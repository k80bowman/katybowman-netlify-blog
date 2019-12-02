import React from 'react';
import { Link } from 'gatsby';
import propTypes from './types';
import ArticleCard from '../Article-Card';
import ExperienceCard from '../Experience-Card';
import CodepenSVG from './icons/codepenSVG';
import GithubSVG from './icons/githubSVG';
import LinkedinSVG from './icons/linkedinSVG';

const DevPage = (props) => {
  const { techPosts, techRoles, communityRoles } = props;

  return (
    <div className="developer main-content">
      <section className="experience">
        <h2 className="section__title">Experience</h2>
        <h3 className="section__subtitle">Technical Roles</h3>
        <div className="experience__cards experience__cards--technical">
          {techRoles
            .map(({ node: position }) => (
              <ExperienceCard position={position.frontmatter} />
            ))}
        </div>
        <h3 className="section__subtitle">Community Building</h3>
        <div className="experience__cards experience__cards--community">
          {communityRoles
            .map(({ node: position }) => (
              <ExperienceCard position={position.frontmatter} />
            ))}
        </div>
      </section>
      <section className="developer__links">
        <a className="developer__link" href="https://github.com/k80bowman">
          <GithubSVG />
        </a>
        <a className="developer__link" href="https://codepen.io/k80bowman/#">
          <CodepenSVG />
        </a>
        <a className="developer__link" href="https://www.linkedin.com/in/k80bowman/">
          <LinkedinSVG />
        </a>
      </section>
      <section className="tech-articles">
        <h2 className="section__title">Technical Articles</h2>
        <div className="blog-articles">
          {techPosts
            .map(({ node: post }) => (
              <ArticleCard
                slug={post.fields.slug}
                key={post.id}
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                excerpt={post.frontmatter.excerpt}
                category={post.frontmatter.category}
                publication={post.frontmatter.publication}
                pubLink={post.frontmatter.pubLink}
              />
            ))}
        </div>
      </section>
      <Link className="blog-link" to="blog/developer">more technical articles</Link>
    </div>
  );
};

DevPage.propTypes = propTypes;

export default DevPage;
