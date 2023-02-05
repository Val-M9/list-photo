import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
const imageWidth = width - 20;
const imageHeight = imageWidth / 1.4;

const styles = StyleSheet.create({
  imageWrapper: {
    position: 'relative',
    marginVertical: 7,
  },
  image: {
    width: imageWidth,
    height: imageHeight,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  authorName: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 40,
    paddingTop: 10,
    paddingLeft: 20,
    backgroundColor: 'black',
    opacity: 0.7,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  loader: {
    marginTop: '50%',
  },
});

export {styles};
