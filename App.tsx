/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ModalWithFocus = () => {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        accessibilityState={{disabled: false}}
        keyboardVerticalOffset={50}
        enabled
        behavior="height">
        {/*Disabling this fixes the issue*/}
        <View style={{height: '100%'}}>
          <ScrollView>
            <TextInput autoFocus />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
const Home = () => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView>
      <Button title="Go To Modal" onPress={() => navigate('ModalWithFocus')} />
    </SafeAreaView>
  );
};
function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="ModalWithFocus"
            component={ModalWithFocus}
            options={{
              presentation: 'modal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
