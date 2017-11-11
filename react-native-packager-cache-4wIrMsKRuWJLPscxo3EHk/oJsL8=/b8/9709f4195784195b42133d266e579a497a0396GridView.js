Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/node_modules/react-native-easy-gridview/Example/GridView.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var styles = _reactNative.StyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginHorizontal: 0,
        paddingHorizontal: 0
    }
});

var GridView = function (_Component) {
    babelHelpers.inherits(GridView, _Component);

    function GridView(props) {
        babelHelpers.classCallCheck(this, GridView);

        var _this = babelHelpers.possibleConstructorReturn(this, (GridView.__proto__ || Object.getPrototypeOf(GridView)).call(this, props));

        _this.state = {};
        _this._onLayout = _this._onLayout.bind(_this);
        _this._renderRow = _this._renderRow.bind(_this);
        return _this;
    }

    babelHelpers.createClass(GridView, [{
        key: '_onLayout',
        value: function _onLayout(event) {
            var width = event.nativeEvent.layout.width;


            if (this.state.availableWidth !== width) {
                this.setState({
                    availableWidth: width,
                    itemWidth: Math.floor(width / this.props.numberOfItemsPerRow),

                    outerContainerLeftPadding: Math.floor(width % this.props.numberOfItemsPerRow / 2)
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (__DEV__) {
                if (this.state.availableWidth === 0) {
                    console.warn('Cannot render GridView because available width is 0! ' + 'Try setting {flex: 1} to the parent component.');
                }
            }

            return _react2.default.createElement(
                _reactNative.View,
                {
                    onLayout: this._onLayout,
                    style: this.state.outerContainerLeftPadding > 0 && {
                        paddingLeft: this.state.outerContainerLeftPadding
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                    }
                },
                this.state.availableWidth > 0 && this._renderListView()
            );
        }
    }, {
        key: '_renderListView',
        value: function _renderListView() {
            return _react2.default.createElement(_reactNative.ListView, babelHelpers.extends({
                ref: this.props.listViewRef
            }, this.props, {
                renderRow: this._renderRow,
                contentContainerStyle: [this.props.contentContainerStyle, styles.contentContainer],
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }));
        }
    }, {
        key: '_renderRow',
        value: function _renderRow() {
            return _react2.default.createElement(
                _reactNative.View,
                { style: { width: this.state.itemWidth }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 84
                    }
                },
                this.props.renderRow.apply(null, arguments)
            );
        }
    }]);
    return GridView;
}(_react.Component);

GridView.propTypes = {
    numberOfItemsPerRow: _react2.default.PropTypes.number.isRequired,
    renderRow: _react2.default.PropTypes.func.isRequired,
    listViewRef: _react2.default.PropTypes.func,
    contentContainerStyle: _react2.default.PropTypes.any
};
exports.default = GridView;