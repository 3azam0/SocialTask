import React from 'react';
import { View, Text, ImageBackground, Image, I18nManager, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/actions/user';
import { changeLang } from '../redux/actions/lang';
import RNRestart from 'react-native-restart'; // Import package from node modules
import { translate } from '../components/i18n';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { theme } from '../core/theme';

const CustomDrawer = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);

  return (
    <View style={{ flex: 1, marginTop: -20 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: theme.colors.primary }}>
        <ImageBackground style={{ padding: 20 }}>
          <Image
            source={{ uri: 'https://picsum.photos/700' }}
            style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            {translate('common.welcome') + ' ' + user?.name}
          </Text>
          <View style={{ flexDirection: 'row' }} />
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: widthPercentageToDP(30) }}>
          <TouchableOpacity
            onPress={() => {
              dispatch(changeLang({ locale: 'ar', isRTL: true }));
              I18nManager.forceRTL(true);
              RNRestart.Restart();
            }}
            style={{ paddingVertical: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                }}>
                {translate('ar')}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(changeLang({ locale: 'en', isRTL: false }));
              I18nManager.forceRTL(false);

              RNRestart.Restart();
            }}
            style={{ paddingVertical: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                }}>
                {translate('en')}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(logoutUser());
          }}
          style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              {translate('auth.logout')}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
