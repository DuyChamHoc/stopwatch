/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import StopWatch from './watch'
import Game from './src/Game';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Game);
                