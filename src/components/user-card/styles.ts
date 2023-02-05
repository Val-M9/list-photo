import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 5,
    width: '100%',
    padding: 20,
    elevation: 7,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  info: {
    justifyContent: 'center',
    paddingLeft: 15,
  },
});

export {styles};
