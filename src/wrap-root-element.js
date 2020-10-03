import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Gist from 'react-gist';
import PostBookImage from './components/Post-Book-Image';
import ImageWithAttribution from './components/Image-With-Attribution';
import PhotoAttribution from './components/Photo-Attribution';

const components = {
  pre: (props) => <div {...props} />,
  Gist,
  PostBookImage,
  ImageWithAttribution,
  PhotoAttribution,
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
