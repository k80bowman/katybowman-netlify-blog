import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from './code-block-styles';
import { propTypes, defaultPropTypes } from './types';

const CodeBlock3 = ({ children, className }) => {
  const language = className.replace(/language-/, '');

  /* eslint-disable react/no-array-index-key */
  return (
    <Highlight {...defaultProps} code={children} language={language} theme={theme}>
      {({
        tokens, getLineProps, getTokenProps,
      }) => (
        <pre className={className}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );

  /* eslint-enable react/no-array-index-key */
};

CodeBlock3.propTypes = propTypes;
CodeBlock3.defaultPropTypes = defaultPropTypes;

export default CodeBlock3;
