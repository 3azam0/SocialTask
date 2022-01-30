import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import { theme } from '../core/theme';
import { translate } from '../components/i18n';

// react-native-vector-icons/Ionicons otherwise.
import Ionicons from 'react-native-vector-icons/Ionicons';
//import ProfileStack from './ProfileStack'

const Tab = createBottomTabNavigator();

// (...)

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Homee"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Homee') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        options={{
          tabBarLabel: translate('tabs.home'),
        }}
        name="Homee"
        component={HomeStack}
      />

      <Tab.Screen
        options={{
          tabBarLabel: translate('tabs.benefits'),
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}
