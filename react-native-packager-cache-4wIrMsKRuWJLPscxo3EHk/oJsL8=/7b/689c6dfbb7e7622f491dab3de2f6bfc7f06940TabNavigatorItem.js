'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _ViewPropTypes = require('./config/ViewPropTypes');

var _ViewPropTypes2 = babelHelpers.interopRequireDefault(_ViewPropTypes);

var TabNavigatorItem = function (_React$Component) {
  babelHelpers.inherits(TabNavigatorItem, _React$Component);

  function TabNavigatorItem() {
    babelHelpers.classCallCheck(this, TabNavigatorItem);
    return babelHelpers.possibleConstructorReturn(this, (TabNavigatorItem.__proto__ || Object.getPrototypeOf(TabNavigatorItem)).apply(this, arguments));
  }

  babelHelpers.createClass(TabNavigatorItem, [{
    key: 'render',
    value: function render() {
      var child = _react2.default.Children.only(this.props.children);
      return _react2.default.cloneElement(child, {
        style: [child.props.style, this.props.style]
      });
    }
  }]);
  return TabNavigatorItem;
}(_react2.default.Component);

TabNavigatorItem.propTypes = {
  renderIcon: _propTypes2.default.func,
  renderSelectedIcon: _propTypes2.default.func,
  badgeText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  renderBadge: _propTypes2.default.func,
  title: _propTypes2.default.string,
  titleStyle: _reactNative.Text.propTypes.style,
  selectedTitleStyle: _reactNative.Text.propTypes.style,
  tabStyle: _ViewPropTypes2.default.style,
  selected: _propTypes2.default.bool,
  onPress: _propTypes2.default.func,
  allowFontScaling: _propTypes2.default.bool
};
TabNavigatorItem.defaultProps = {};
exports.default = TabNavigatorItem;