import React, {Component} from 'react';
import {View} from 'react-native';
import {Container, Label} from 'native-base';

class TempScreen extends Component {
    render() {
        return (
            <Container>
                <View style={styles.containerStyle}>
                    <Label>Hello</Label>
                </View>
            </Container>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default TempScreen;
