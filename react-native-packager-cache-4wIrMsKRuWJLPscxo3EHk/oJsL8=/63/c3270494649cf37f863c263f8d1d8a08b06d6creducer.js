Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;
exports.default = recipeReducer;

var _store = require('./store');

var _store2 = babelHelpers.interopRequireDefault(_store);

var initialState = exports.initialState = _store2.default;

function recipeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'FAVOURITES_REPLACE':
      {
        return babelHelpers.extends({}, state, {
          favourites: action.data || []
        });
      }
    case 'MEALS_REPLACE':
      {
        return babelHelpers.extends({}, state, {
          meals: action.data
        });
      }
    case 'RECIPES_REPLACE':
      {
        var recipes = [];

        if (action.data && typeof action.data === 'object') {
          recipes = action.data.map(function (item) {
            return {
              id: item.id,
              title: item.title,
              body: item.body,
              category: item.category,
              image: item.image,
              author: item.author,
              ingredients: item.ingredients,
              method: item.method
            };
          });
        }

        return babelHelpers.extends({}, state, {
          recipes: recipes
        });
      }
    default:
      return state;
  }
}