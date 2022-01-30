import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { Loader } from '../../components/Loader';
import TextInput from '../../components/CustomTextInput/CustomTextInput';
import BackButton from '../../components/BackButton';
import { theme } from '../../core/theme';
import { UserSignupSchema } from '../../utils/ValidationSchema';
import api from '../../services/axios';
import { loginUser } from '../../redux/actions/user';
//import { Navigation } from '../types';
import { translate } from '../../components/i18n';
import DropDown from '../../components/DropDown/DropDown';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const RegisterScreen = ({ navigation }) => {
  const {
    handleSubmit,
    setError,
    formState: { errors },
    control,
    reset,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(UserSignupSchema),
    mode: 'onChange',
  });
  const { locale } = useSelector((state) => state.langState);
  const [showCategories, setShowCategories] = useState(false);
  const [status, setStatus] = useState();

  const [statusList, setStatusList] = useState([
    { id: '1', name: 'Active', value: 'Active' },
    { id: '2', name: 'inActive', value: 'inActive' },
  ]);
  const [genders, setGenders] = useState([
    { id: '1', name: 'Male', value: 'Male' },
    { id: '2', name: 'Female', value: 'Female' },
  ]);
  const [showGenders, setShowGenders] = useState(false);

  const [{ loading }, execute] = api.useAxios(
    {
      url: '/users',
      method: 'post',
      headers: {
        Authorization: 'Bearer 3eccf3b2db729c81ec2372c0091150f4de368fa4d2d8e7bf6ad5d37f5712a6b4',
      },
    },

    { manual: true },
  );
  const onSubmit = (data) => {
    execute({ data })
      .then((res) => {
        dispatch(loginUser({ user: res.data.data, isSignedIn: true }));
      })
      .catch((error) => {
        setError(error.response.data.data[0].field, {
          type: 'manual',
          message: error.response.data.data[0].field + ' ' + error.response.data.data[0].message,
        });
      });
  };
  const [apiError, setApiError] = useState();
  const dispatch = useDispatch();
  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <Background onBackPress={navigateBack} showHeader>
        <Logo />

        <Header>{translate('auth.createaccount')}</Header>
        <TextInput
          control={control}
          name="name"
          label={translate('form.name')}
          // value={email.value}
          error={errors?.name}
          errorText={errors?.name?.message}
        />
        <TextInput
          control={control}
          name="email"
          label={translate('form.email')}
          // value={email.value}
          error={errors?.email}
          errorText={errors?.email?.message}
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <View style={{ width: widthPercentageToDP(90) }}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <DropDown
                  label={translate('form.gender')}
                  mode={'outlined'}
                  visible={showGenders}
                  showDropDown={() => setShowGenders(true)}
                  onDismiss={() => setShowGenders(false)}
                  value={value}
                  control={control}
                  setValue={onChange}
                  list={genders}
                  style={{ backgroundColor: theme.colors.white, borderColor: 'red' }}
                />
                <Text style={styles.err}>{errors?.gender?.message}</Text>
              </>
            )}
            name="gender"
            defaultValue=""
          />
        </View>
        <View style={{ width: widthPercentageToDP(90) }}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <DropDown
                  label={translate('form.status')}
                  mode={'outlined'}
                  visible={showCategories}
                  showDropDown={() => setShowCategories(true)}
                  onDismiss={() => setShowCategories(false)}
                  value={value}
                  control={control}
                  setValue={onChange}
                  list={statusList}
                  style={{ backgroundColor: theme.colors.white, borderColor: 'red' }}
                />
                <Text style={styles.err}>{errors?.status?.message}</Text>
              </>
            )}
            name="status"
            defaultValue=""
          />
        </View>

        <Button
          mode="contained"
          loading={loading}
          disabled={loading}
          onPress={handleSubmit(onSubmit)}
          style={styles.button}>
          <Text style={styles.link}> {translate('auth.signup')}</Text>
        </Button>

        <View style={styles.row}>
          <Text style={styles.label}> {translate('auth.aleadyhaveacc')}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>{translate('auth.login')}</Text>
          </TouchableOpacity>
        </View>
      </Background>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: '#FFF',
  },
  spacerStyle: {
    marginBottom: 15,
  },
  err: {
    color: theme.colors.error,
    marginTop: 3,
  },
});

export default memo(RegisterScreen);
