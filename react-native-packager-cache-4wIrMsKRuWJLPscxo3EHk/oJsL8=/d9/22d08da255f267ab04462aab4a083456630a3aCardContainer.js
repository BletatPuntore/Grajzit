Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/containers/recipes/Card/CardContainer.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _actions = require('@redux/recipes/actions');

var RecipeActions = babelHelpers.interopRequireWildcard(_actions);

var _CardView = require('./CardView');

var _CardView2 = babelHelpers.interopRequireDefault(_CardView);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user,
    favourites: state.recipe && state.recipe.favourites ? state.recipe.favourites : null
  };
};

var mapDispatchToProps = {
  replaceFavourites: RecipeActions.replaceFavourites
};

var RecipeCard = function (_Component) {
  babelHelpers.inherits(RecipeCard, _Component);

  function RecipeCard(props) {
    babelHelpers.classCallCheck(this, RecipeCard);

    var _this = babelHelpers.possibleConstructorReturn(this, (RecipeCard.__proto__ || Object.getPrototypeOf(RecipeCard)).call(this, props));

    _this.onPressCard = function () {
      _reactNativeRouterFlux.Actions.recipeView({
        title: _this.props.recipe.title,
        recipe: _this.props.recipe
      });
    };

    _this.onPressFavourite = function () {
      if (_this.props.user && _this.props.user.uid) {
        var recipeId = _this.props.recipe.id;

        if (recipeId && _this.props.replaceFavourites) {
          var favs = _this.props.favourites;

          if (_this.isFavourite()) {
            favs.splice(favs.indexOf(_this.props.recipe.id), 1);
          } else {
            favs.push(recipeId);
          }

          _this.props.replaceFavourites(favs);

          _this.setState({ recipe: _this.state.recipe });
        }
      }
    };

    _this.isFavourite = function () {
      var _this$props = _this.props,
          favourites = _this$props.favourites,
          recipe = _this$props.recipe;


      if (recipe && recipe.id && favourites) {
        if (favourites.length > 0 && favourites.indexOf(recipe.id) > -1) return true;
      }

      return false;
    };

    _this.render = function () {
      var recipe = _this.state.recipe;
      var user = _this.props.user;


      return _react2.default.createElement(_CardView2.default, {
        title: recipe.title,
        body: recipe.body,
        image: recipe.image,
        onPress: _this.onPressCard,
        onPressFavourite: user && user.uid ? _this.onPressFavourite : null,
        isFavourite: user && user.uid && _this.isFavourite() && true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      });
    };

    _this.state = { recipe: props.recipe };
    return _this;
  }

  babelHelpers.createClass(RecipeCard, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (props.recipe) {
        this.setState({ recipe: props.recipe });
      }
    }
  }]);
  return RecipeCard;
}(_react.Component);

RecipeCard.componentName = 'RecipeCard';
RecipeCard.propTypes = {
  recipe: _propTypes2.default.shape({
    id: _propTypes2.default.number.isRequired,
    title: _propTypes2.default.string.isRequired,
    body: _propTypes2.default.string.isRequired,
    image: _propTypes2.default.string
  }).isRequired,
  replaceFavourites: _propTypes2.default.func.isRequired,
  favourites: _propTypes2.default.arrayOf(_propTypes2.default.number),
  user: _propTypes2.default.shape({
    uid: _propTypes2.default.string
  })
};
RecipeCard.defaultProps = {
  favourites: null,
  user: null
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RecipeCard);