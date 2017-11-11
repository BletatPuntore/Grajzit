Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/containers/recipes/Listing/ListingView.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _theme = require('@theme/');

var _constants = require('@constants/');

var _CardContainer = require('@containers/recipes/Card/CardContainer');

var _CardContainer2 = babelHelpers.interopRequireDefault(_CardContainer);

var _Error = require('@components/general/Error');

var _Error2 = babelHelpers.interopRequireDefault(_Error);

var _reactNativeEasyGridview = require('react-native-easy-gridview');

var _reactNativeEasyGridview2 = babelHelpers.interopRequireDefault(_reactNativeEasyGridview);

var RecipeListing = function (_Component) {
  babelHelpers.inherits(RecipeListing, _Component);

  function RecipeListing() {
    babelHelpers.classCallCheck(this, RecipeListing);

    var _this = babelHelpers.possibleConstructorReturn(this, (RecipeListing.__proto__ || Object.getPrototypeOf(RecipeListing)).call(this));

    _this.reFetch = function () {
      if (_this.props.reFetch) {
        _this.setState({ isRefreshing: true });

        _this.props.reFetch().then(function () {
          _this.setState({ isRefreshing: false });
        });
      }
    };

    _this.render = function () {
      var recipes = _this.props.recipes;
      var _this$state = _this.state,
          isRefreshing = _this$state.isRefreshing,
          dataSource = _this$state.dataSource;


      if (!isRefreshing && (!recipes || recipes.length < 1)) {
        return _react2.default.createElement(_Error2.default, { text: _constants.ErrorMessages.recipe404, __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        });
      }

      return _react2.default.createElement(
        _reactNative.View,
        { style: [_theme.AppStyles.container], __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        },
        _react2.default.createElement(_reactNativeEasyGridview2.default, {
          initialListSize: 1,
          renderRow: function renderRow(recipe) {
            return _react2.default.createElement(_CardContainer2.default, { recipe: recipe, __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              }
            });
          },
          dataSource: dataSource,
          automaticallyAdjustContentInsets: false,
          pageSize: 5,
          numberOfItemsPerRow: 2,
          refreshControl: _this.props.reFetch ? _react2.default.createElement(_reactNative.RefreshControl, {
            refreshing: isRefreshing,
            onRefresh: _this.reFetch,
            tintColor: _theme.AppColors.brand.primary,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            }
          }) : null,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        })
      );
    };

    _this.state = {
      isRefreshing: true,
      dataSource: new _reactNative.ListView.DataSource({
        rowHasChanged: function rowHasChanged(row1, row2) {
          return row1 !== row2;
        }
      })
    };
    return _this;
  }

  babelHelpers.createClass(RecipeListing, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(props.recipes),
        isRefreshing: false
      });
    }
  }]);
  return RecipeListing;
}(_react.Component);

RecipeListing.componentName = 'RecipeListing';
RecipeListing.propTypes = {
  recipes: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  reFetch: _propTypes2.default.func
};
RecipeListing.defaultProps = {
  reFetch: null
};
exports.default = RecipeListing;