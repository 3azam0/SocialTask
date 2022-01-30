import React, { memo } from 'react';
import { Image, StyleSheet, useWindowDimensions } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const Logo = ({style}) => <Image resizeMode="contain"  source={require('../assets/logo.png')} style={styles.image} />;

const styles = StyleSheet.create({
  image: {
    width: widthPercentageToDP(32),
    height: heightPercentageToDP(17),
    marginVertical: 30,
  },
});

export default memo(Logo);
