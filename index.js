import {registerRootComponent} from 'expo';
// import {AppRegistry} from 'react-native'
import App from './App';
import TrackPlayer from 'react-native-track-player'

// AppRegistry.registerComponent('main', ()=> App)
TrackPlayer.registerPlaybackService(()=> require('./service.js'))

registerRootComponent(App);