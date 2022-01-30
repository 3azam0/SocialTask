import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { theme } from '../core/theme';

const Button = ({ mode, loading, disabled, style, children, ...props }) => (
  <PaperButton
    loading={loading}
    disabled={disabled}
    style={[styles.button, mode === 'outlined' && { backgroundColor: theme.colors.secondary }, style]}
    labelStyle={styles.text}
    mode={mode}
    {...props}>
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  button: {
    width: widthPercentageToDP(100),
    marginVertical: 10,
    backgroundColor: theme.colors.primary,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    color: theme.colors.white,
  },
});

export default memo(Button);
