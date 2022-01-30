import React, { memo, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '../../components/Background';
import BackButton from '../../components/BackButton';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import TextInput from '../../components/CustomTextInput/CustomTextInput';
import { theme } from '../../core/theme';
import Button from '../../components/Button';
//import { Navigation } from '../types';

const ForgotPasswordScreen = ({ navigation }) => {
 
  return (
    <Background>
      <BackButton goBack={() => navigation.goBack()} />

      <Logo />

      <Header>Restore Password</Header>

      <TextInput
        label="E-mail address"
        returnKeyType="done"
      
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Button mode="contained"style={styles.button}>
        Send Reset Instructions
      </Button>

      <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.label}>← Back to login</Text>
      </TouchableOpacity>
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
});

export default memo(ForgotPasswordScreen);
