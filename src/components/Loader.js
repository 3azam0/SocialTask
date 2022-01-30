/* eslint-disable react-native/no-inline-styles */
import { View, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import React from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { theme } from '../core/theme';

export const Loader = ({ loading }) => {
  if (loading) {
    return (
      <View
        style={{
          width: widthPercentageToDP(100),
          height: heightPercentageToDP(100),
          position: 'absolute',
          zIndex: 5,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,.6)',
        }}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }
  return null;
};
