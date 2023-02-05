import React, {FC, useLayoutEffect, useState} from 'react';
import {View} from 'react-native';
import {DataStatus} from '../../common/enums';
import {ScreenWrapper, ImageCarousel} from '../../components';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchImages} from '../../store/actions';
import {selectImages, selectImagesDataStatus} from '../../store/selectors';
import {styles} from './styles';

const Feeds: FC = () => {
  const dispatch = useAppDispatch();
  const images = useAppSelector(selectImages);
  const imagesDataStatus = useAppSelector(selectImagesDataStatus);
  const isLoading = imagesDataStatus === DataStatus.PENDING;
  const [page, setPage] = useState(1);

  useLayoutEffect(() => {
    dispatch(fetchImages({page: page, limit: 10}));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage((prev) => (prev += 1));
  };

  return (
    <ScreenWrapper>
      <View style={styles.wrapper}>
        <ImageCarousel pictures={images} onLoadMore={handleLoadMore} isLoading={isLoading} />
      </View>
    </ScreenWrapper>
  );
};

export {Feeds};
