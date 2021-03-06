Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/node_modules/react-native-elements/src/swipedeck/SwipeDeck.js';

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var SCREEN_WIDTH = _reactNative.Dimensions.get('window').width;
var SWIPE_THRESHOLD = 0.4 * SCREEN_WIDTH;
var MOVE_THRESHOLD = 50;

var SwipeDeck = function (_Component) {
  babelHelpers.inherits(SwipeDeck, _Component);

  function SwipeDeck(props) {
    babelHelpers.classCallCheck(this, SwipeDeck);

    var _this = babelHelpers.possibleConstructorReturn(this, (SwipeDeck.__proto__ || Object.getPrototypeOf(SwipeDeck)).call(this, props));

    var position = new _reactNative.Animated.ValueXY();

    var panResponder = _reactNative.PanResponder.create({
      onMoveShouldSetPanResponderCapture: function onMoveShouldSetPanResponderCapture(e, gesture) {
        return Math.abs(gesture.dx) > MOVE_THRESHOLD;
      },
      onStartShouldSetPanResponder: function onStartShouldSetPanResponder() {
        return true;
      },
      onPanResponderMove: function onPanResponderMove(event, gesture) {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: function onPanResponderRelease(event, gesture) {
        if (gesture.dx > SWIPE_THRESHOLD) {
          _this.forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          _this.forceSwipe('left');
        } else {
          _this.resetPosition();
        }
      }
    });

    _this.state = { panResponder: panResponder, position: position, index: 0 };
    return _this;
  }

  babelHelpers.createClass(SwipeDeck, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.data !== this.props.data) {
        this.setState({ index: 0 });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      _reactNative.UIManager.setLayoutAnimationEnabledExperimental && _reactNative.UIManager.setLayoutAnimationEnabledExperimental(true);
      _reactNative.LayoutAnimation.spring();
    }
  }, {
    key: 'forceSwipe',
    value: function forceSwipe(direction) {
      var _this2 = this;

      var x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;

      _reactNative.Animated.timing(this.state.position, {
        toValue: { x: x * 2, y: direction === 'right' ? -x : x },
        duration: 750
      }).start(function () {
        return _this2.onSwipeComplete(direction);
      });
    }
  }, {
    key: 'onSwipeComplete',
    value: function onSwipeComplete(direction) {
      var _props = this.props,
          onSwipeRight = _props.onSwipeRight,
          onSwipeLeft = _props.onSwipeLeft,
          data = _props.data;

      var item = data[this.state.index];

      direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
      this.state.position.setValue({ x: 0, y: 0 });
      this.setState({ index: this.state.index + 1 });
    }
  }, {
    key: 'resetPosition',
    value: function resetPosition() {
      _reactNative.Animated.spring(this.state.position, {
        toValue: { x: 0, y: 0 }
      }).start();
    }
  }, {
    key: 'getCardStyle',
    value: function getCardStyle() {
      var position = this.state.position;

      var rotate = position.x.interpolate({
        inputRange: [-SCREEN_WIDTH * 2, 0, SCREEN_WIDTH * 2],
        outputRange: ['-60deg', '0deg', '60deg']
      });

      return babelHelpers.extends({}, this.state.position.getLayout(), {
        transform: [{ rotate: rotate }]
      });
    }
  }, {
    key: 'renderCards',
    value: function renderCards() {
      var _this3 = this;

      if (this.state.index >= this.props.data.length) {
        return this.props.renderNoMoreCards();
      }

      return this.props.data.map(function (item, i) {
        if (i < _this3.state.index) {
          return null;
        } else if (i === _this3.state.index) {
          return _react2.default.createElement(
            _reactNative.Animated.View,
            babelHelpers.extends({
              key: item.id,
              style: [_this3.getCardStyle(), styles.cardStyle]
            }, _this3.state.panResponder.panHandlers, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 112
              }
            }),
            _this3.props.renderCard(item)
          );
        }

        return _react2.default.createElement(
          _reactNative.Animated.View,
          {
            key: item.id,
            style: [styles.cardStyle, { zIndex: 0 }],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 123
            }
          },
          _this3.props.renderCard(item)
        );
      }).reverse();
    }
  }, {
    key: 'render',
    value: function render() {
      console.warn("Warning: SwipeDeck has been deprecated and will be removed in a future version of React Native Elements. To keep up with it's development you can check the project here(https://github.com/Monte9/react-native-tinder-cards).");

      return _react2.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          }
        },
        this.renderCards()
      );
    }
  }]);
  return SwipeDeck;
}(_react.Component);

SwipeDeck.defaultProps = {
  onSwipeRight: function onSwipeRight() {},
  onSwipeLeft: function onSwipeLeft() {}
};
exports.default = SwipeDeck;


var styles = _reactNative.StyleSheet.create({
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH
  }
});

SwipeDeck.propTypes = {
  data: _propTypes2.default.any,
  renderCard: _propTypes2.default.any,
  renderNoMoreCards: _propTypes2.default.any,
  onSwipeRight: _propTypes2.default.any,
  onSwipeLeft: _propTypes2.default.any
};