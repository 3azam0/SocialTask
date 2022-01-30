import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Badge, Title } from 'react-native-paper';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import IcnButton from '../../components/BackButton';
import { theme } from '../../core/theme';
import Post from '../../components/Post';
import api from '../../services/axios';
import { Loader } from '../../components/Loader';
import Button from '../../components/Button';
import { translate } from '../../components/i18n';
import TextInput from '../../components/CustomTextInput/CustomTextInput';
import { addPostCommentSchema } from '../../utils/ValidationSchema';

export default function PostDetailsScreen({ route, navigation }) {
  const postDetails = route.params.postDetails;
  const [notificationCount, setNotificationCount] = useState(10);
  const [tabName, setTabName] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState();

  const [refresh, setSetRefresh] = useState(false);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [canFetchMore, setCanFetchMore] = useState(true);
  const flatListRef = useRef();

  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();
  const [showAddPost, setShowAddPost] = useState(false);
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
    control,
    reset,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(addPostCommentSchema),
  });
  const [{ loading }, getComments] = api.useAxios(
    {
      url: `/posts/${postDetails?.id}/comments?page=${page}`,
      method: 'get',
      headers: {
        Authorization: 'Bearer 3eccf3b2db729c81ec2372c0091150f4de368fa4d2d8e7bf6ad5d37f5712a6b4',
      },
    },

    { manual: true },
  );
  const [{ loading: isLoading }, addPostComment] = api.useAxios(
    {
      url: `/posts/${postDetails?.id}/comments/`,
      method: 'post',
      headers: {
        Authorization: 'Bearer 3eccf3b2db729c81ec2372c0091150f4de368fa4d2d8e7bf6ad5d37f5712a6b4',
      },
    },

    { manual: true },
  );

  useEffect(() => {
    getComments()
      .then((res) => {
        setIsMoreLoading(false);
        setCanFetchMore(true);
        setSetRefresh(false);

        if (refresh === true) {
          setSetRefresh(false);
        }
        if (page == 1) {
          setComments(res.data.data);
        } else {
          setComments([...comments, ...res.data.data]);
        }
      })
      .catch((err) => {
        setIsMoreLoading(false);
        setSetRefresh(false);

        setCanFetchMore(false);
      });
  }, [page, refresh]);
  const onTabPress = (tabName, activeTab) => {
    setTabName(tabName);
    setActiveTab(activeTab);
    if (tabName === 'Comments') {
      getComments()
        .then((res) => {
          setComments(res.data.data);
          setPages888Count(res.data.meta.pagination.pages);
        })
        .catch((err) => {
        });
    }
  };
  const flatListItem = ({ item }) => {
    return <Post loading={refresh} username={item.name} date={item.body} title={item.title} body={item.body} />;
  };

  const renderFooter = () => {
    return isMoreLoading && <ActivityIndicator animating size={'large'} />;
  };
  const handleOnEndReached = () => {
    if (page < pagesCount) {
      setIsMoreLoading(true);

      setPage(page + 1);
    }
  };

  const handleRefresh = () => {
    setSetRefresh(true);

    setPage(1);
  };

  const onSubmit = (data) => {
    const newData = { name: user?.name, email: user?.email, ...data };

    addPostComment({ data: newData })
      .then((res) => {
        setPage(1);

        setSetRefresh(true);
      })
      .catch((err) => {});
  };
  const renderAddPostComment = () => {
    return (
      <View style={styles.wrapper}>
        <TextInput
          control={control}
          style={styles.txtInpt}
          name="body"
          label={translate('form.comment')}
          // value={email.value}
          error={errors?.body}
          rightIcnName={'send'}
          rightIcnColor={theme.colors.primary}
          onRightIcnPress={handleSubmit(onSubmit)}
          rightIcnDisabled={isLoading}
        />
      </View>
    );
  };
  const toTop = () => {
    // use current
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };
  const handelShowAddPost = () => {
    setShowAddPost(!showAddPost);
    toTop();
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{ flex: 1, widh: widthPercentageToDP(90) }}>
        <View style={styles.header}>
          <IcnButton onIcnPress={() => navigation.goBack()} name="arrow-back-outline" />
          <Title style={styles.headerTxt}>{'Details'}</Title>
          <View style={styles.badgeCont}>
            <IcnButton name="notifications-outline" />
            <Badge size={10} style={styles.badge} visible={notificationCount > 0}>
              <Text>{notificationCount}</Text>
            </Badge>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Image style={styles.img} resizeMode="cover" source={{ uri: 'https://picsum.photos/700' }} />
          <View style={styles.contentHeader}>
            <Title style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
              {postDetails?.title}
            </Title>
          </View>
        </View>
        <View style={styles.tabsContainer}>
          <TouchableOpacity onPress={() => onTabPress('Details', 0)}>
            <Text style={[styles.tab, { color: activeTab === 0 ? theme.colors.primary : '#BDBDBD' }]}>
              {translate('addPost.details')}
            </Text>
            {activeTab === 0 && <View style={{ height: 4, backgroundColor: '#F9F0C8', width: '100%' }} />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onTabPress('Comments', 1)}>
            <Text style={[styles.tab, { color: activeTab === 1 ? theme.colors.primary : '#BDBDBD' }]}>
              {translate('addPost.comments')}
            </Text>
            {activeTab === 1 && <View style={{ height: 4, backgroundColor: '#F9F0C8', width: '100%' }} />}
          </TouchableOpacity>
        </View>
        {activeTab === 0 ? (
          <View style={styles.body}>
            <Text>{postDetails.body}</Text>
          </View>
        ) : (
          <FlatList
            ref={flatListRef}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, alignSelf: 'flex-start', height: heightPercentageToDP(100), marginHorizontal: 20 }}
            data={comments}
            keyExtractor={(itm) => itm.id.toString()}
            renderItem={flatListItem}
            // ListFooterComponent={renderFooter}
            ListHeaderComponent={showAddPost && renderAddPostComment}
            ListFooterComponentStyle={styles.wrapper}
            onEndReached={handleOnEndReached}
            onRefresh={handleRefresh}
            //  onEndReached={canFetchMore && handleOnEndReached}
            ListFooterComponent={renderFooter}
            refreshing={refresh}
            onEndReachedThreshold={0.4}
          />

        )}
      </View>

      <Button style={styles.bttn} mode="contained" onPress={handelShowAddPost}>
        {translate('addPost.add-comment')}
      </Button>
      <Loader loading={refresh === false && loading ? true : false} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 50,
    marginHorizontal: 20,
    backfaceVisibility: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    right: 0,
    left: 0,

    zIndex: 2,
  },
  contentHeader: {
    paddingHorizontal: 25,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    position: 'absolute',
    bottom: 0,
    width: widthPercentageToDP(100),
    alignSelf: 'center',
    marginTop: 0,
    backgroundColor: '#F4F4F4',
    height: heightPercentageToDP(7),
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  img: {
    flex: 1,
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(35),
  },
  title: {
    width: widthPercentageToDP(70),
    marginBottom: 5,
  },
  headerTxt: {
    color: '#fff',
  },
  badge: {
    position: 'absolute',
    alignSelf: 'center',
    top: 0,
    right: 0,

    backgroundColor: theme.colors.error,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#FEFAEF',
    height: heightPercentageToDP(7),
    width: widthPercentageToDP(90),
    alignSelf: 'center',
  },
  tab: {
    fontSize: 18,
  },
  body: {
    width: widthPercentageToDP(90),
    flex: 1,
    alignSelf: 'center',
  },
  bttn: {
    width: widthPercentageToDP(90),
    alignSelf: 'center',
  },
  wrapper: {
    width: widthPercentageToDP(90),
    flex: 1,
    alignSelf: 'center',
  },
  txtInpt: {
    width: widthPercentageToDP(89),
  },
});
