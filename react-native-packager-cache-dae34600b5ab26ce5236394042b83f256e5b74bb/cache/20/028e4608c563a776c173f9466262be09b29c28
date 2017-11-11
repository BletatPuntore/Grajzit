Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFavourites = getFavourites;
exports.resetFavourites = resetFavourites;
exports.replaceFavourites = replaceFavourites;
exports.getMeals = getMeals;
exports.getRecipes = getRecipes;

var _constants = require('@constants/');

function getFavourites(dispatch) {
  if (_constants.Firebase === null) return function () {
    return new Promise(function (resolve) {
      return resolve();
    });
  };

  var UID = _constants.Firebase.auth().currentUser.uid;
  if (!UID) return false;

  var ref = _constants.FirebaseRef.child('favourites/' + UID);

  return ref.on('value', function (snapshot) {
    var favs = snapshot.val() || [];

    return dispatch({
      type: 'FAVOURITES_REPLACE',
      data: favs
    });
  });
}

function resetFavourites(dispatch) {
  return dispatch({
    type: 'FAVOURITES_REPLACE',
    data: []
  });
}

function replaceFavourites(newFavourites) {
  if (_constants.Firebase === null) return function () {
    return new Promise(function (resolve) {
      return resolve();
    });
  };

  var UID = _constants.Firebase.auth().currentUser.uid;
  if (!UID) return false;

  return function () {
    return _constants.FirebaseRef.child('favourites/' + UID).set(newFavourites);
  };
}

function getMeals() {
  if (_constants.Firebase === null) return function () {
    return new Promise(function (resolve) {
      return resolve();
    });
  };

  return function (dispatch) {
    return new _constants.Firebase.Promise(function (resolve) {
      var ref = _constants.FirebaseRef.child('meals');

      return ref.once('value').then(function (snapshot) {
        var meals = snapshot.val() || {};

        return resolve(dispatch({
          type: 'MEALS_REPLACE',
          data: meals
        }));
      });
    });
  };
}

function getRecipes() {
  if (_constants.Firebase === null) return function () {
    return new Promise(function (resolve) {
      return resolve();
    });
  };

  return function (dispatch) {
    return new _constants.Firebase.Promise(function (resolve) {
      var ref = _constants.FirebaseRef.child('recipes');

      return ref.on('value', function (snapshot) {
        var recipes = snapshot.val() || {};

        return resolve(dispatch({
          type: 'RECIPES_REPLACE',
          data: recipes
        }));
      });
    });
  };
}