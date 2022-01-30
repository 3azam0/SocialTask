import React, { memo } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
const IcnButton = ({ color, size, name, onIcnPress, style }) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onIcnPress}>
    <Icon name={name} size={size || 24} color={color || '#fff'} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 24,
    height: 24,
    flex: 1,
  },
});

export default IcnButton;
