import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';

import { useDispatch } from 'react-redux';
import Post from '../../components/Post';
import api from '../../services/axios';
import { Loader } from '../../components/Loader';
import { AddPostForm } from '../../components/AddPost';
import IcnButton from '../../components/BackButton';
import { theme } from '../../core/theme';

const Posts = ({ navigation, showAddPost }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [refresh, setSetRefresh] = useState(false);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [canFetchMore, setCanFetchMore] = useState(true);
  const [pagesCount, setPagesCount] = useState();
  const flatListRef = useRef();

  const dispatch = useDispatch();

  const [{ loading }, getPosts] = api.useAxios(
    {
      url: `/posts?page=${page}`,
      method: 'get',
      headers: {
        Authorization: 'Bearer 3eccf3b2db729c81ec2372c0091150f4de368fa4d2d8e7bf6ad5d37f5712a6b4',
      },
    },

    { manual: true },
  );

  const toTop = () => {
    // use current
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  useEffect(() => {
    getPosts()
      .then((res) => {
        setSetRefresh(false);

        if (refresh === true) {
          setSetRefresh(false);
        }
        if (page == 1) {
          setPosts(res.data.data);
          setIsMoreLoading(false);
        } else {
          setPosts([...posts, ...res.data.data]);
          setIsMoreLoading(false);
        }
      })
      .catch((err) => {
        setIsMoreLoading(false);
        setCanFetchMore(false);
        setSetRefresh(false);
      });
  }, [page, refresh]);
  useEffect(() => {
    getPosts()
      .then((res) => {
        setPagesCount(res.data.meta.pagination.pages);
        setPosts(res.data.data);
      })
      .catch((err) => {});
  }, []);
  const flatListItem = ({ item }) => {
    const onPostpress = () => {
      navigation.navigate('Details', { postDetails: item });
    };
    return (
      <Post
        post
        loading={refresh}
        refresh={refresh}
        isMoreLoading={isMoreLoading}
        onPostPress={onPostpress}
        username={'john Doe'}
        date="1/1/2022"
        title={item.title}
        body={item.body}
      />
    );
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

  const renderAddPost = () => {
    return <AddPostForm handleRefresh={handleRefresh} />;
  };

  return (
    <>
      <FlatList
        ref={flatListRef}
        style={{ flex: 1 }}
        data={posts}
        keyExtractor={(itm) => itm.id.toString()}
        renderItem={flatListItem}
        ListHeaderComponent={showAddPost && renderAddPost}
        ListFooterComponent={renderFooter}
        onEndReached={handleOnEndReached}
        onRefresh={handleRefresh}
        refreshing={refresh}
        onEndReachedThreshold={0.5}
      />
      <IcnButton
        onIcnPress={toTop}
        size={50}
        style={{ position: 'absolute', bottom: 30, right: 20 }}
        color={theme.colors.primary}
        name="arrow-up-outline"
      />

      <Loader loading={refresh === false && isMoreLoading === false && loading ? true : false} />
    </>
  );
};
export default Posts;
