module.exports = {
  'order/order': [
    // @include should come before custom-properties as we want the local custom properties to override the mixin ones
    {
      'type': 'at-rule',
      'name': 'include'
    },
    'custom-properties',
    'declarations',
    {
      'type': 'at-rule',
      'name': 'supports',
      'hasBlock': true
    },
    {
      'type': 'at-rule',
      'name': 'media',
      'hasBlock': true
    },
    {
      'type': 'at-rule',
      'name': 'include',
      'parameter': 'breakpoint',
      'hasBlock': true
    },
    {
      'type': 'at-rule',
      'name': 'include',
      'parameter': 'breakpoint-gte',
      'hasBlock': true
    },
    {
      'type': 'at-rule',
      'name': 'include',
      'parameter': 'breakpoint-lte',
      'hasBlock': true
    },
    'rules'
  ],
  'order/properties-order': [
    {
      'emptyLineBefore': 'always',
      'noEmptyLineBetween': true,
      'emptyLineBeforeUnspecified': 'always',
      'properties': [
        'content',
        'counter-increment',
        'counter-reset',
        'quotes'
      ]
    },
    {
      'emptyLineBefore': 'always',
      'noEmptyLineBetween': true,
      'emptyLineBeforeUnspecified': 'always',
      'properties': [
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index'
      ]
    },
    {
      'emptyLineBefore': 'always',
      'noEmptyLineBetween': true,
      'emptyLineBeforeUnspecified': 'always',
      'properties': [
        'align-content',
        'align-items',
        'align-self',
        'flex',
        'flex-basis',
        'flex-direction',
        'flex-flow',
        'flex-grow',
        'flex-shrink',
        'flex-wrap',
        'justify-content',
        'order'
      ]
    },
    {
      'emptyLineBefore': 'always',
      'noEmptyLineBetween': true,
      'emptyLineBeforeUnspecified': 'always',
      'properties': [
        'grid',
        'grid-area',
        'grid-auto-columns',
        'grid-auto-flow',
        'grid-auto-rows',
        'grid-column',
        'grid-column-end',
        'grid-column-gap',
        'grid-column-start',
        'grid-gap',
        'grid-row',
        'grid-row-end',
        'grid-row-gap',
        'grid-row-start',
        'grid-template',
        'grid-template-areas',
        'grid-template-columns',
        'grid-template-rows'
      ]
    },
    {
      'emptyLineBefore': 'always',
      'noEmptyLineBetween': true,
      'emptyLineBeforeUnspecified': 'always',
      'properties': [
        'box-sizing',
        'display',
        'max-width',
        'max-height',
        'min-width',
        'min-height',
        'width',
        'height',
        'clear',
        'float',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'margin-block',
        'margin-block-start',
        'margin-block-end',
        'margin-inline',
        'margin-inline-start',
        'margin-inline-end',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'padding-block',
        'padding-block-start',
        'padding-block-end',
        'padding-inline',
        'padding-inline-start',
        'padding-inline-end',
        'table-layout'
      ]
    },
    {
      'emptyLineBefore': 'always',
      'noEmptyLineBetween': true,
      'emptyLineBeforeUnspecified': 'always',
      'properties': [
        'font-family',
        'font-size',
        'font-style',
        'font-weight',
        'letter-spacing',
        'list-style',
        'list-style-image',
        'list-style-position',
        'list-style-type',
        'line-height',
        'text-align',
        'text-decoration',
        'text-indent',
        'text-overflow',
        'text-rendering',
        'text-transform',
        'word-break',
        'word-wrap'
      ]
    },
    {
      'emptyLineBefore': 'always',
      'noEmptyLineBetween': true,
      'emptyLineBeforeUnspecified': 'always',
      'properties': [
        'appearance',
        'backface-visibility',
        'background',
        'background-attachment',
        'background-blend-mode',
        'background-clip',
        'background-color',
        'background-image',
        'background-origin',
        'background-position',
        'background-repeat',
        'background-size',
        'border',
        'border-color',
        'border-top',
        'border-right',
        'border-bottom',
        'border-left',
        'border-top-color',
        'border-right-color',
        'border-bottom-color',
        'border-left-color',
        'border-radius',
        'border-top-left-radius',
        'border-top-right-radius',
        'border-bottom-right-radius',
        'border-bottom-left-radius',
        'box-shadow',
        'clip',
        'color',
        'cursor',
        'fill',
        'filter',
        'mask',
        'mix-blend-mode',
        'object-fit',
        'object-position',
        'opacity',
        'outline',
        'overflow',
        'overflow-x',
        'overflow-y',
        'visibility',
        'will-change'
      ]
    },
    {
      'emptyLineBefore': 'always',
      'noEmptyLineBetween': true,
      'emptyLineBeforeUnspecified': 'always',
      'properties': [
        'animation',
        'animation-delay',
        'animation-direction',
        'animation-duration',
        'animation-fill-mode',
        'animation-iteration-count',
        'animation-name',
        'animation-play-state',
        'animation-timing-function',
        'perspective',
        'transform',
        'transform-origin',
        'transform-style',
        'transition',
        'transition-delay',
        'transition-duration',
        'transition-property',
        'transition-timing-function'
      ]
    }
  ]
}
