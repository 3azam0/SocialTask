import React, { memo } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import IcnButton from './BackButton';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
const Background = ({
  navigation,
  children,
  showHeader,
  title,
  subtitle,
  More,
  search,
  titleStyle,
  _handleSearch,
  _handleMore,
  backPress,
  style,
  headerStyle,
  _handleCancel,
  Cancel,
  AddMedia,
  onAddMediaPress,
  disableBackAction,
  onBackPress,
  backGroundStyle,
  ...props
}) => (
  <ImageBackground
    source={require('../assets/background_dot.png')}
    resizeMode="repeat"
    style={[styles.background, backGroundStyle]}>
    {showHeader && (
      <IcnButton
        name={'chevron-back-outline'}
        color="black"
        style={{ position: 'absolute', top: 20, left: 20}}
        onIcnPress={onBackPress}
      />
    )}
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {children}
    </KeyboardAwareScrollView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
  },
  container: {
    flex: 1,
    padding: 20,
    width: wp(100),
    paddingTop: 20,
    paddingBottom: 0,

    backgroundColor: 'transparent',
  },
});

export default memo(Background);
