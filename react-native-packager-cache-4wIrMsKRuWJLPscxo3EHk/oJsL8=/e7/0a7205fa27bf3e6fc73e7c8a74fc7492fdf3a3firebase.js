Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FirebaseRef = undefined;

var _firebase = require('firebase');

var Firebase = babelHelpers.interopRequireWildcard(_firebase);


var firebaseInitialized = false;

if ('AIzaSyDJVZ6CfaTce0YYy-h3t-TsFiKBKlwVMew' !== 'null' && 'react-native-starter-app-b7e72.firebaseapp.com' !== 'null' && 'https://react-native-starter-app-b7e72.firebaseio.com' !== 'null' && 'react-native-starter-app-b7e72.appspot.com' !== 'null' && '566881639382' !== 'null') {
  Firebase.initializeApp({
    apiKey: 'AIzaSyDJVZ6CfaTce0YYy-h3t-TsFiKBKlwVMew',
    authDomain: 'react-native-starter-app-b7e72.firebaseapp.com',
    databaseURL: 'https://react-native-starter-app-b7e72.firebaseio.com',
    storageBucket: 'react-native-starter-app-b7e72.appspot.com',
    messagingSenderId: '566881639382'
  });

  firebaseInitialized = true;
}

var FirebaseRef = exports.FirebaseRef = firebaseInitialized ? Firebase.database().ref() : null;
exports.default = firebaseInitialized ? Firebase : null;