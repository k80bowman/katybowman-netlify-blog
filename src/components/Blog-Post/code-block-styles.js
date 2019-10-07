const theme = {
  plain: {
    backgroundColor: '#2a2734',
    color: '#ff4e50',
  },
  styles: [{
    types: ['namespace'],
    style: {
      opacity: 0.7,
    },
  }, {
    types: [
      'comment',
      'prolog',
      'doctype',
      'cdata',
      'tag-id',
      'selector',
      'atrule-id',
      'attr-name',
      'string',
      'url',
      'attr-value',
      'keyword',
      'control',
      'directive',
      'unit',
      'statement',
      'at-rule',
      'placeholder',
    ],
    style: {
      color: '#3bc7b8', // teal
    },
  }, {
    types: ['punctuation', 'entity'],
    style: {
      color: '#fff', // white
    },
  }, {
    types: ['tag', 'operator', 'number', 'boolean', 'regex', 'variable', 'important'],
    style: {
      color: '#ff4e50', // red
    },
  }, {
    types: ['property', 'function'],
    style: {
      color: '#c3cb4c', // yellow
    },
  }, {
    types: ['deleted'],
    style: {
      textDecorationLine: 'line-through',
    },
  }, {
    types: ['inserted'],
    style: {
      textDecorationLine: 'underline',
    },
  }, {
    types: ['italic'],
    style: {
      fontStyle: 'italic',
    },
  }, {
    types: ['important', 'bold'],
    style: {
      fontWeight: 'bold',
    },
  }],
};

export default theme;
