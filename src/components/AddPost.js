import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addPostSchema } from '../utils/ValidationSchema';
import api from '../services/axios';
import TextInput from './CustomTextInput/CustomTextInput';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { translate } from './i18n';

export const AddPostForm = ({ handleRefresh }) => {
  const user = useSelector((state) => state.userState.user);
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
    control,
    reset,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(addPostSchema),
  });
  const [{ loading: isLoading }, addPost] = api.useAxios(
    {
      url: `/users/${user?.id}/posts`,
      method: 'post',
      headers: {
        Authorization: 'Bearer 3eccf3b2db729c81ec2372c0091150f4de368fa4d2d8e7bf6ad5d37f5712a6b4',
      },
    },

    { manual: true },
  );
  const onSubmit = (data) => {
    addPost({ data })
      .then((res) => {
        handleRefresh();
      })
      .catch((err) => {
      });
  };
  return (
    <>
      <TextInput
        control={control}
        style={styles.txtInpt}
        name="title"
        label={translate('addPost.title')}
        // value={email.value}
        error={errors?.title}
        errorText={errors?.title?.message}
      />
      <TextInput
        control={control}
        style={styles.txtInpt}
        name="body"
        label={translate('addPost.body')}
        // value={email.value}
        error={errors?.body}
        errorText={errors?.body?.message}
        multiline
        numberOfLines={5}
      />
      <Button
        loading={isLoading}
        disabled={isLoading}
        style={styles.bttn}
        mode="contained"
        onPress={handleSubmit(onSubmit)}>
        {translate('addPost.add')}
      </Button>
    </>
  );
};
const styles = StyleSheet.create({
  txtInpt: {
    width: widthPercentageToDP(90),
    alignSelf: 'center',
  },
  bttn: {
    width: widthPercentageToDP(80),
    alignSelf: 'center',
    marginBottom: 20,
  },
});
