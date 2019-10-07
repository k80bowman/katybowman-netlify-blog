import React from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import theme from './code-block-styles';

export default ({children, className}) => {
  const language = className.replace(/language-/, '')

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={theme}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}