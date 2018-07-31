import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import {Root} from 'native-base';
import {connect} from "react-redux";

import TempScreen from './screens/TempScreen';

class App extends Component {
    render() {
        const AppNavigator = createStackNavigator(
            {
                TempScreen: {screen: TempScreen},
            },
            {
                initialRouteName: 'TempScreen',
                navigationOptions: {gesturesEnabled: false},
                headerMode: 'none'
            }
        );

        return (
            <Root>
                <AppNavigator/>
            </Root>
        );
    }
}

export default connect(null, null)(App);

Expo.registerRootComponent(App);
