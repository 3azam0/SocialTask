import * as yup from 'yup';
import { translate } from '../components/i18n';
yup.setLocale({
  mixed: {
    required: ({ path }) => translate('validation.required', { path: translate(`form.${path}`) }),
  },
  string: {
    length: ({ path, length }) =>
      translate('validation.length', {
        path: translate(`form.${path}`),
        length,
      }),
    min: ({ path, min }) =>
      translate('validation.minString', {
        path: translate(`form.${path}`),
        min,
      }),
    max: ({ path, max }) =>
      translate('validation.maxString', {
        path: translate(`form.${path}`),
        max,
      }),
    email: ({ path }) => translate('validation.email', { path: translate(`form.${path}`) }),
  },
  number: {
    min: ({ path, min }) =>
      translate('validation.minNumber', {
        path: translate(`form.${path}`),
        min,
      }),
    max: ({ path, max }) =>
      translate('validation.maxNumber', {
        path: translate(`form.${path}`),
        max,
      }),
  },
});
export const UserLoginSchema = yup.object().shape({
  email: yup.string().email().required(),
});
export const addPostSchema = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required(),
});
export const addPostCommentSchema = yup.object().shape({
  body: yup.string().required(),
});
export const UserSignupSchema = yup.object().shape({
  email: yup.string().required().email(),
  name: yup.string().required(),
  gender: yup.string().required(),
  status: yup.string().required(),
});
export const GroupSessionSchemaStepOne = yup.object().shape({
  sessionName: yup.string().required(),
  maxNumOfInvitees: yup.number().integer('Should be more than one invitee').required(),
  strtDateAndTime: yup.string(),
  enddateAndTime: yup.string(),
  sessionDescription: yup.string(),
});
export const GroupSessionSchemaStepTwo = yup.object().shape({
  paymentConfig: yup.object(),
  customHourRate: yup.number().integer('Should be more than one '),
  onToggleMutePArticipants: yup.boolean(),
});
