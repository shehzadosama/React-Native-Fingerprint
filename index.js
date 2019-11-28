/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import FingerprintPopup from './src/FingerprintPopup';
import Biometrics from './src/ReactNativeBiometrics';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Biometrics);
