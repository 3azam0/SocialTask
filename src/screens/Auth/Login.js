import React, { useState, memo, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/CustomTextInput/CustomTextInput';
import BackButton from '../../components/BackButton';
import { theme } from '../../core/theme';
import api from '../../services/axios';
import { UserLoginSchema } from '../../utils/ValidationSchema';
import { translate } from '../../components/i18n';
import { loginUser } from '../../redux/actions/user';
import { Loader } from '../../components/Loader';

const LoginScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
    control,
    reset,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(UserLoginSchema),
    mode: 'onChange',
  });

  const [{ loading }, execute] = api.useAxios(
    {
      url: '/users',
      method: 'get',
      headers: {
        Authorization: 'Bearer 3eccf3b2db729c81ec2372c0091150f4de368fa4d2d8e7bf6ad5d37f5712a6b4',
      },
    },

    { manual: true },
  );

  const { locale } = useSelector((state) => state.langState);
  const onSubmit = (data) => {
    for (let i = 0; i < users.length; i++) {
      if (data.email === users[i].email) {
        dispatch(loginUser({ user: users[i], isSignedIn: true }));
      }
    }
    setError('email', {
      type: 'manual',
      message: 'Invalid email',
    });
  };
  const [apiError, setApiError] = useState();
  const dispatch = useDispatch();
  const navigateBack = () => {
    navigation.goBack();
  };
  useEffect(() => {
    execute()
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <>
      <Background onBackPress={navigateBack} showHeader headerStyle={{ backGroundColor: '#fff' }}>
        <Logo />

        <Header>{translate('common.welcomeback')}</Header>

        <TextInput
          control={control}
          name="email"
          label={translate('form.email')}
          // value={email.value}
          error={errors?.email}
          errorText={errors?.email?.message}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <View style={styles.forgotPassword}>
          <TouchableOpacity onPress={() => navigation.navigate('PasswordResset')}>
            {
              //   <Text style={styles.label}>{translate('auth.forgotPassword')}</Text>
            }
          </TouchableOpacity>
        </View>

        <Button mode="contained" loading={loading} disabled={loading} onPress={handleSubmit(onSubmit)}>
          {translate('auth.login')}
        </Button>

        <View style={styles.row}>
          <Text style={styles.label}>{translate('auth.newAccount')} </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}> {translate('auth.signup')}</Text>
          </TouchableOpacity>
        </View>
      </Background>
    </>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(LoginScreen);
