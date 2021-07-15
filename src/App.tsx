import React from 'react';
import { Text, View, StatusBar } from 'react-native'


const App: React.FC = () => (
    <>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <View style={{
            flex: 1,
            backgroundColor: '#ffffff'
        }}>
            <Text>
                Evandro
            </Text>
        </View>
    </>
);

export default App;