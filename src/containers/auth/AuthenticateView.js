/**
 * Authenticate Screen
 *  - Entry screen for all authentication
 *  - User can tap to login, forget password, signup...
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import {
  View,
  Alert,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppStyles, AppSizes, AppColors } from '@theme/';
import { SocialIcon } from 'react-native-elements';
// Components
import { Spacer, Card, Text, Button } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  background: {
    backgroundColor: AppColors.brand.primary,
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },
  logo: {
    width: AppSizes.screen.width * 0.85,
    resizeMode: 'contain',
  },
  whiteText: {
    color: '#FFF',
  },
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
});

/* Component ==================================================================== */
class Authenticate extends Component {
  static componentName = 'Authenticate';
  render = () => (
    <View style={[AppStyles.containerCentered, AppStyles.container, styles.background]}>
      <Image
        source={require('../../images/bg.png')}
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '110%',
          }}
        //style={[styles.logo]}
      />
      <Spacer size={200} />

      {/* <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Alert Title',
            alertMessage,
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ]
          )}>
          <View style={styles.button}>
            <Text>Alert with two buttons</Text>
          </View>
        </TouchableHighlight> */}

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]}>
          <Button
            title={'Login'}
            icon={{ name: 'lock' }}
            onPress={() => Alert.alert(
            'Kyçu si Kompani ose si Klient',
            'Nëse kyçeni si klient atëher mund të kyçeni me fb dhe gmail!',
            [
              {text: 'Klient', onPress: (Actions.login) },
              {text: 'Kompani', onPress: (Actions.login) },
            ]
          )}
            //onPress={() => Alert.alert('Login as Client')}
            //onPress={Actions.login}
            backgroundColor={'#00BF9A'}
          />
        </View>
      </View>

      <Spacer size={10} />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]}>
          <Button
            title={'Sign up'}
            icon={{ name: 'face' }}
            onPress={Actions.signUp}
            backgroundColor={'#00BF9A'}
          />
        </View>
      </View>

      <Spacer size={15} />

      <Text p style={[AppStyles.textCenterAligned, styles.whiteText]}>
        - or -
      </Text>

      <Spacer size={10} />
 
      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]} />
        <View style={[AppStyles.flex2]}>
          <Button
            small
            title={'Skip'}
            onPress={Actions.app}
            raised={false}
            backgroundColor={'rgba(255,255,255,0.2)'}
          />
        </View>
        <View style={[AppStyles.flex1]} />
      </View>

      <Spacer size={40} />
    </View>
  )
}

// var AlertExample = React.createClass({
//   statics: {
//     title: 'Alert',
//     description: 'Alerts display a concise and informative message ' +
//     'and prompt the user to make a decision.',
//   },
//   render: function() {
//     return (
//       <UIExplorerBlock title={'Alert'}>
//         <Authenticate />
//       </UIExplorerBlock>
//     );
//   }
// });
// module.exports = {
//   AlertExample,
//   Authenticate,
// };

// // corporate ipsum > lorem ipsum
// var alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +
//                    'catalysts for change. Dynamically revolutionize.';

/* Export Component ==================================================================== */
export default Authenticate;
