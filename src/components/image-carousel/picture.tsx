import React, {FC} from 'react';
import {View, Image, Text} from 'react-native';
import {PictureProps} from './prop-types';
import {styles} from './styles';

const Picture: FC<PictureProps> = ({item}) => {
  return (
    <View style={styles.imageWrapper}>
      <Image source={{uri: item.download_url}} style={styles.image} />
      <Text style={styles.authorName}>{item.author}</Text>
    </View>
  );
};

export {Picture};
