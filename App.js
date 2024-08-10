// App.js
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ContactsScreen from './screens/ContactsScreen';
import HelpScreen from './screens/HelpScreen';
import Header from './components/Header';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            header: () => <Header navigation={navigation} />
          })}
        />
        <Stack.Screen
          name="Contacts"
          component={ContactsScreen}
          options={({ navigation }) => ({
            header: () => <Header navigation={navigation} />
          })}
        />
        <Stack.Screen
          name="Help"
          component={HelpScreen}
          options={({ navigation }) => ({
            header: () => <Header navigation={navigation} />
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}