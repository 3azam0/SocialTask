import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import { Controller } from 'react-hook-form';
import { theme } from '../../core/theme';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

const TextInput = ({
  control,
  name,
  rightIcnName,
  onRightIcnPress,
  error,
  errorText,
  multiline,
  numberOfLines,
  rightIcnColor,
  rightIcnDisabled,
  ...props
}) => (
  <View style={styles.container}>
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <Input
            style={styles.input}
            selectionColor={theme.colors.primary}
            underlineColor="transparent"
            mode="outlined"
            right={<Input.Icon disabled={rightIcnDisabled} color={rightIcnColor} name={rightIcnName} onPress={onRightIcnPress} />}
            {...props}
            numberOfLines={numberOfLines}
            value={value}
            error={error}
            onBlur={onBlur}
            onChangeText={(text) => onChange(text)}
          />

          {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
        </>
      )}
      name={name}
      defaultValue=""
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(90),
    marginVertical: 12,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
    marginHorizontal: 4,
    paddingTop: 4,
  },
});

export default memo(TextInput);
