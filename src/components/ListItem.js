import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { theme } from '../core/theme';
import { windowWidth } from '../utils/Dimensions';
import { translate } from './i18n';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
export default function ListItem({ onPress, title, address, specialization, price }) {
  return (
    <Card onPress={onPress} style={styles.card}>
      <Card.Title
        titleStyle={{ color: theme.colors.primary, fontWeight: 'bold', marginHorizontal: -10 }}
        title={title}
      />
      <Paragraph style={styles.subTitle}>
        <Text style={{ fontWeight: 'bold', }}>{translate('search.specialization') + ': '}</Text>
        {specialization}
      </Paragraph>
      <Paragraph style={styles.subTitle}>
        <Text style={{ fontWeight: 'bold', }}>{translate('search.address') + ': '}</Text>
        {address}
      </Paragraph>

      <Card.Actions style={{ justifyContent: 'flex-end' }}>
        <Button labelStyle={{ color: theme.colors.primary,fontWeight: 'bold' }}>{translate('search.More')}</Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: widthPercentageToDP(90),
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
    marginBottom: 50,
  },
  row: {
    flexDirection: 'row',
  },
  subTitle: {
    marginHorizontal: 20,
  },
});
