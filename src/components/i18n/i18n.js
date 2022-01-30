import { I18nManager } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import en from './en.json';
import ar from './ar.json';
import { store } from '../../redux/store';
import { useSelector } from 'react-redux';
//import  {translate}  from './';

i18n.fallbacks = true;
i18n.translations = { en, ar };

const state = store.getState();
const { locale, isRTL } = state.langState;
const fallback = { languageTag: 'en', isRTL: false };

const { languageTag } = RNLocalize.findBestAvailableLanguage(Object.keys(i18n.translations)) || fallback;

i18n.locale = locale;


let defaultLanguage = RNLocalize.getLocales()[0].languageCode;

store.subscribe(() => {
  const state = store.getState();
  const { locale, isRTL } = state.langState;
  i18n.locale = locale;
});
