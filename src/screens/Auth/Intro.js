import React, { memo } from 'react';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import { translate } from '../../components/i18n';

//import { Navigation } from '../../types';

const IntroScreen = ({ navigation }) => (
  <Background backGroundStyle={{ paddingTop: 50 }}>
    <Logo />

    <Button mode="contained" onPress={() => navigation.navigate('Login')}>
      {translate('auth.login')}
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate('Register')}>
      {translate('auth.signup')}
    </Button>
  </Background>
);

export default memo(IntroScreen);
