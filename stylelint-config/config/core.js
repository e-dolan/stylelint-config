module.exports = {
  // At rule
  'at-rule-name-case': 'lower',
  'at-rule-name-space-after': 'always',

  // Block
  'block-no-empty': true,
  'block-closing-brace-empty-line-before': 'never',
  'block-closing-brace-newline-after': 'always',
  'block-closing-brace-newline-before': 'always-multi-line',
  'block-closing-brace-space-before': 'always-single-line',
  'block-opening-brace-newline-after': 'always-multi-line',
  'block-opening-brace-space-after': 'always-single-line',
  'block-opening-brace-space-before': 'always',

  // Color
  'color-no-invalid-hex': true,
  'color-hex-case': 'lower',
  'color-hex-length': 'short',
  'color-named': [
    'never',
    {
      'ignore': [
        'inside-function'
      ]
    }
  ],

  // Comment
  'comment-no-empty': true,
  'comment-whitespace-inside': 'always',
  'custom-property-no-missing-var-function': true,

  // Declaration
  'declaration-block-no-duplicate-custom-properties': true,
  'declaration-block-no-duplicate-properties': [
    true,
    {
      'ignore': [
        'consecutive-duplicates-with-different-values'
      ]
    }
  ],
  'declaration-no-important': true,
  'declaration-block-no-redundant-longhand-properties': true,
  'declaration-block-no-shorthand-property-overrides': true,
  'declaration-block-semicolon-space-after': 'always-single-line',
  'declaration-block-semicolon-space-before': 'never',
  'declaration-block-single-line-max-declarations': 3,
  'declaration-block-trailing-semicolon': 'always',
  'declaration-bang-space-after': 'never',
  'declaration-bang-space-before': 'always',
  'declaration-colon-newline-after': 'always-multi-line',
  'declaration-colon-space-after': 'always-single-line',
  'declaration-colon-space-before': 'never',

  // Font
  'font-family-name-quotes': 'always-unless-keyword',
  'font-family-no-duplicate-names': true,
  'font-family-no-missing-generic-family-keyword': true,
  'font-weight-notation': 'numeric',

  // Function
  'function-calc-no-unspaced-operator': true,
  'function-comma-newline-after': 'always-multi-line',
  'function-comma-newline-before': 'never-multi-line',
  'function-comma-space-after': 'always-single-line',
  'function-comma-space-before': 'never',
  'function-linear-gradient-no-nonstandard-direction': true,
  'function-max-empty-lines': 0,
  'function-parentheses-newline-inside': 'always-multi-line',
  'function-parentheses-space-inside': 'never-single-line',
  'function-url-quotes': 'always',
  'function-whitespace-after': 'always',

  // Media
  'media-feature-colon-space-after': 'always',
  'media-feature-colon-space-before': 'never',
  'media-feature-name-case': 'lower',
  'media-feature-parentheses-space-inside': 'never',
  'media-feature-range-operator-space-after': 'always',
  'media-feature-range-operator-space-before': 'always',

  // General
  'indentation': 2,
  'length-zero-no-unit': [true, {
    ignore: 'custom-properties'
  }],
  'max-empty-lines': [1, {
    ignore: ['comments']
  }],
  'max-nesting-depth': [
    3,
    {
      'ignore': [
        'blockless-at-rules'
      ],
      'ignoreAtRules': [
        'media'
      ]
    }
  ],
  'named-grid-areas-no-invalid': true,
  'no-duplicate-selectors': true,
  'no-eol-whitespace': true,
  'no-extra-semicolons': true,
  'no-invalid-double-slash-comments': true,
  'no-missing-end-of-source-newline': true,
  'unit-case': 'lower',

  // Keyframe
  'keyframe-declaration-no-important': true,

  // Number
  'number-max-precision': 10,
  'number-leading-zero': 'always',
  'number-no-trailing-zeros': true,

  // Property
  'property-case': 'lower',
  'property-no-unknown': true,

  // Selector
  'selector-attribute-brackets-space-inside': 'never',
  'selector-attribute-operator-space-after': 'never',
  'selector-attribute-operator-space-before': 'never',
  'selector-attribute-quotes': 'always',
  'selector-class-pattern': '^[a-z]([a-z0-9]){1,3}-[A-Z][a-zA-Z0-9]+(_[A-Z][a-zA-Z0-9]+)?(-[a-z0-9]([a-zA-Z0-9]+)?([a-z0-9]+)?)?$|^fz-([0-9]+)_([0-9]+)$',
  'selector-combinator-space-after': 'always',
  'selector-combinator-space-before': 'always',
  'selector-descendant-combinator-no-non-space': true,
  'selector-max-class': 3,
  'selector-max-combinators': 2,
  'selector-max-empty-lines': 1,
  'selector-max-id': 0,
  'selector-max-specificity': ['0,3,0', {
    ignoreSelectors: [
      '@media', '/:/'
    ]
  }],
  'selector-max-type': [0, {
    ignoreTypes: ['svg', 'path', 'circle', 'rect']
  }],
  'selector-max-universal': 0,
  'selector-no-qualifying-type': true,
  'selector-pseudo-class-case': 'lower',
  'selector-pseudo-class-parentheses-space-inside': 'never',
  'selector-pseudo-element-case': 'lower',
  'selector-pseudo-element-colon-notation': 'double',
  'selector-pseudo-class-no-unknown': true,
  'selector-type-case': 'lower',

  // Shorthand
  'shorthand-property-no-redundant-values': true,

  // String
  'string-no-newline': true,
  'string-quotes': 'single',

  // Value
  'value-list-comma-newline-after': 'always-multi-line',
  'value-list-comma-newline-before': 'never-multi-line',
  'value-list-comma-space-after': 'always-single-line',
  'value-list-comma-space-before': 'never',
  'value-list-max-empty-lines': 0,
}
