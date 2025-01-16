module.exports = {
  'plugins': [
    'stylelint-order'
  ],
  'rules': {
    ...require('./config/order.js'),
    ...require('./config/core.js')
  },
}
