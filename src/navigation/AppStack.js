import React from 'react';
import { I18nManager } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import BottomTabs from './BottomTabs';
import AuthStack from './AuthStack';
import { translate } from '../components/i18n';
import { theme } from '../core/theme';
import RNRestart from 'react-native-restart';
import * as RNLocalize from 'react-native-localize';

const Drawer = createDrawerNavigator();

const AppStack = (props) => {
  const { isSignedIn } = useSelector((state) => state.userState);
  const { locale } = useSelector((state) => state.langState);

  let defaultLanguage = RNLocalize.getLocales()[0].languageCode;
  const onReady = () => {
    RNBootSplash.hide();

    if (locale === 'en' && I18nManager.isRTL === true) {
      I18nManager.forceRTL(false);
      
      RNRestart.Restart();
    } else if (locale === 'ar' && I18nManager.isRTL === false) {
      I18nManager.forceRTL(true);
      RNRestart.Restart();
    }
  };
  console.warn(locale)
  return (
    <NavigationContainer onReady={onReady}>
      {isSignedIn === true ? (
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawer {...props} />}
          screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: theme.colors.primary,
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#333',
            drawerLabelStyle: {
              marginLeft: -25,
              fontFamily: 'Roboto-Medium',
              fontSize: 15,
            },
          }}>
          <Drawer.Screen
            name="Home"
            component={BottomTabs}
            options={{
              drawerLabel: translate('tabs.home'),
              drawerIcon: ({ color }) => <Ionicons name="home" size={22} color={color} />,
            }}
          />

          <Drawer.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              drawerLabel: translate('setting.settings'),
              drawerIcon: ({ color }) => <Ionicons name="person" size={22} color={color} />,
            }}
          />
        </Drawer.Navigator>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default AppStack;
