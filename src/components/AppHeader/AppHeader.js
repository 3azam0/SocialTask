//import { RFC_2822 } from 'moment';
import React from 'react';
import { Appbar } from 'react-native-paper';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { theme } from '../../core/theme';
//import { colors } from '../../../styles/colors';
//import { fontFamilies, fontSizes } from '../../../styles/typography';

export const AppHeader = ({
  title,
  subtitle,
  More,
  search,
  titleStyle,
  _handleSearch,
  _handleMore,
  backPress,
  style,
  _handleCancel,
  Cancel,
  AddMedia,
  onAddMediaPress,
  disableBackAction,
  add,
  addPostPress,
}) => {
  return (
    <Appbar.Header style={[{ backgroundColor: '#fff', width: '100%' }, style]}>
      {!disableBackAction ? (
        <Appbar.BackAction color={theme.colors.secondary} onPress={backPress} />
      ) : add ? (
        <Appbar.Action icon="add-outline" onPress={addPostPress} />
      ) : (
        <Appbar.Action color={'red'} />
      )}
      <Appbar.Content
        // style={{ textAlign: 'center' }}
        // textAlign="center"
        title={title}
        titleStyle={[
          {
            color: theme.colors.primary,
            // marginLeft: -10,
            alignSelf: 'center',
            // textAlign: 'center',
            fontSize: 16,
            // textAlign: 'center',
            fontFamily: 'GE-SS-Two-Bold',
          },
          titleStyle,
        ]}
        subtitle={subtitle}
        style={{ marginLeft: 0 }}
      />
      <Appbar.Action color={'red'} />

      {search && <Appbar.Action icon="magnify" onPress={_handleSearch} />}
      {More && <Appbar.Action icon="menu" color={theme.colors.secondary} onPress={_handleMore} />}
      {Cancel && <Appbar.Action icon="close" onPress={_handleCancel} />}
      {AddMedia && (
        <View style={styles.uploadButtonStyle}>
          <TouchableOpacity activeOpacity={0.8} onPress={onAddMediaPress}>
            {
              // <Image source={require('../../../assets/icons/plus.png')} style={styles.uploadButtonImageStyle} />
            }
          </TouchableOpacity>
        </View>
      )}
    </Appbar.Header>
  );
};
const styles = StyleSheet.create({
  uploadButtonStyle: {
    width: 20,
    height: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  uploadButtonImageStyle: {
    width: 20,
    height: 20,
  },
  imageContainerStyle: {
    width: 80,
    borderRadius: 50,
    height: 80,
    // borderWidth: 1,
    overflow: 'hidden',
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
});
