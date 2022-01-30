import React, { useState } from 'react';
import { TouchableOpacity, Animated, Text, StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import IcnButton from './BackButton';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const Post = ({ username, date, cardStyle, title, body, post,navigation, refresh, onPostPress, isMoreLoading, loading }) => {
  const [liked, setLiked] = useState(false);

  const onLikePress = () => {
    setLiked(!liked);
  };

  return (
    <Card onPress={onPostPress} style={cardStyle}>
      <View style={styles.row}>
        <ShimmerPlaceholder style={styles.avatarShimmer} visible={!loading}>
          <Avatar.Image size={55} style={styles.avatar} source={{ uri: 'https://picsum.photos/700' }} />
        </ShimmerPlaceholder>
        <View style={styles.wrapper}>
          <ShimmerPlaceholder style={styles.usernameSh} visible={!loading}>
            <Title style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
              {username}
            </Title>
          </ShimmerPlaceholder>
          <ShimmerPlaceholder style={styles.usernameSh} visible={!loading}>
            <Text ellipsizeMode="tail" numberOfLines={1}>
              {date}
            </Text>
          </ShimmerPlaceholder>
        </View>
      </View>

      {post && (
        <>
          <ShimmerPlaceholder style={styles.coverSh} visible={!loading}>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          </ShimmerPlaceholder>

          <Card.Actions>
            <ShimmerPlaceholder style={styles.icnSh} visible={!loading}>
              <IcnButton onIcnPress={onLikePress} color={liked ? 'red' : 'grey'} name="heart-outline" />
            </ShimmerPlaceholder>
            <ShimmerPlaceholder style={styles.icnSh} visible={!loading}>
              <IcnButton onIcnPress={onLikePress} color={'grey'} name="chatbubbles-outline" />
            </ShimmerPlaceholder>
          </Card.Actions>
          <Card.Content>
            <ShimmerPlaceholder style={styles.titleShimmer} visible={!loading}>
              <Title style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
                {title}
              </Title>
            </ShimmerPlaceholder>

            <ShimmerPlaceholder style={styles.paragraphShimmer} visible={!loading}>
              <Paragraph ellipsizeMode="tail" numberOfLines={3}>
                {body}
              </Paragraph>
            </ShimmerPlaceholder>
          </Card.Content>
        </>
      )}
    </Card>
  );
};
const styles = StyleSheet.create({
  title: {
    width: widthPercentageToDP(80),
  },
  titleShimmer: {
    width: widthPercentageToDP(70),
    marginBottom: 5,
  },
  paragraph: {
    width: widthPercentageToDP(90),
  },
  paragraphShimmer: {
    width: widthPercentageToDP(90),
    height: 80,
  },
  avatar: {
    marginHorizontal: 0,
  },
  usernameSh: {
    width: widthPercentageToDP(70),
  },
  avatarShimmer: {
    height: 55,
    width: 55,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  coverSh: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(20),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 15,
    flex:1,
  },
  wrapper: {
    marginHorizontal: 5,
    marginTop: -10,
  },
  icnSh: { width: 30, height: 30, marginHorizontal: 2, justifyContent: 'center', alignItems: 'center' },
});

export default Post;
