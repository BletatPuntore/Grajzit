Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/containers/recipes/Listing/ListingContainer.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _actions = require('@redux/recipes/actions');

var RecipeActions = babelHelpers.interopRequireWildcard(_actions);

var _Loading = require('@components/general/Loading');

var _Loading2 = babelHelpers.interopRequireDefault(_Loading);

var _ListingView = require('./ListingView');

var _ListingView2 = babelHelpers.interopRequireDefault(_ListingView);

var mapStateToProps = function mapStateToProps(state) {
  return {
    recipes: state.recipe.recipes || []
  };
};

var mapDispatchToProps = {
  getRecipes: RecipeActions.getRecipes
};

var MealListing = function (_Component) {
  babelHelpers.inherits(MealListing, _Component);

  function MealListing() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, MealListing);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = MealListing.__proto__ || Object.getPrototypeOf(MealListing)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading: false,
      recipes: []
    }, _this.componentDidMount = function () {
      return _this.getThisMealsRecipes(_this.props.recipes);
    }, _this.componentWillReceiveProps = function (props) {
      return _this.getThisMealsRecipes(props.recipes);
    }, _this.getThisMealsRecipes = function (allRecipes) {
      if (allRecipes.length > 0) {
        var recipes = allRecipes.filter(function (recipe) {
          return recipe.category.toString() === _this.props.meal.toString();
        });

        _this.setState({
          recipes: recipes,
          loading: false
        });
      }
    }, _this.fetchRecipes = function () {
      return _this.props.getRecipes().then(function () {
        return _this.setState({ error: null, loading: false });
      }).catch(function (err) {
        return _this.setState({ error: err.message, loading: false });
      });
    }, _this.render = function () {
      if (_this.state.loading) return _react2.default.createElement(_Loading2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      });

      return _react2.default.createElement(_ListingView2.default, {
        recipes: _this.state.recipes,
        reFetch: _this.fetchRecipes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      });
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  return MealListing;
}(_react.Component);

MealListing.componentName = 'MealListing';
MealListing.propTypes = {
  recipes: _propTypes2.default.arrayOf(_propTypes2.default.object),
  meal: _propTypes2.default.string.isRequired,
  getRecipes: _propTypes2.default.func.isRequired
};
MealListing.defaultProps = {
  recipes: []
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MealListing);