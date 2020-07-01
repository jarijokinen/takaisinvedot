import 'react-native-gesture-handler';
import React from 'react';

import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  touchableOpacity: {
    paddingHorizontal: 15
  }
});

const App: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        animationEnabled: false
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: 'Takaisinvedot',
          headerRight: () => (
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => navigation.navigate('Settings')}
            >
              <Icon name="settings" type="material-community" />
            </TouchableOpacity>
          )
        })}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerTitle: 'Asetukset' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
