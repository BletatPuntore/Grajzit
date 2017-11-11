Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _BrowseView = require('./BrowseView');

var _BrowseView2 = babelHelpers.interopRequireDefault(_BrowseView);

var mapStateToProps = function mapStateToProps(state) {
  return {
    meals: state.recipe.meals || []
  };
};

var mapDispatchToProps = {};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_BrowseView2.default);