import React, {FC} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {useCustomTheme} from '../../hooks';
import {Picture} from './picture';
import {CarouselProps} from './prop-types';
import {styles} from './styles';

const ImageCarousel: FC<CarouselProps> = ({pictures, onLoadMore, isLoading}) => {
  const {colors} = useCustomTheme();
  return (
    <FlatList
      data={pictures}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Picture item={item} />}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.5}
      refreshing={isLoading}
      onRefresh={() => {
        <ActivityIndicator color={colors.accent} size="large" style={styles.loader} />;
      }}
    />
  );
};

export {ImageCarousel};
