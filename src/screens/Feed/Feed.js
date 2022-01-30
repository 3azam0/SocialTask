import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

import { widthPercentageToDP } from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import { AppHeader } from '../../components/AppHeader/AppHeader';
import { translate } from '../../components/i18n';
import Posts from './posts';

export default function FeedScreen({ navigation }) {
  const [refresh, setSetRefresh] = useState(false);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [showAddPost, setShowAddPost] = useState(false);
  const [canFetchMore, setCanFetchMore] = useState(true);

  const dispatch = useDispatch();

  const handelShowAddPost = () => {
    setShowAddPost(!showAddPost);
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle={'light-content'} />
      <AppHeader
        More
        _handleMore={() => navigation.openDrawer()}
        title={translate('tabs.Feed')}
        disableBackAction={true}
        add
        addPostPress={handelShowAddPost}
      />
      {
        //showAddPost && renderAddPost()
      }
      <Posts navigation={navigation} showAddPost={showAddPost} toTop={showAddPost} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
