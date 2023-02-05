import {ImageDto} from '../../common/types';

type CarouselProps = {
  pictures: ImageDto[];
  onLoadMore: () => void;
  isLoading: boolean;
};

type PictureProps = {
  item: ImageDto;
};

export type {CarouselProps, PictureProps};
