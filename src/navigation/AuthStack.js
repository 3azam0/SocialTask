import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/Auth/Login';
import RegisterScreen from '../screens/Auth/Register';
import IntroScreen from '../screens/Auth/Intro';
import ForgotPasswordScreen from '../screens/Auth/PasswordResset';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="PasswordResset" component={ForgotPasswordScreen} />

    </Stack.Navigator>
  );
};

export default AuthStack;

