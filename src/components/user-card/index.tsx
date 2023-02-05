import React, {FC} from 'react';
import {View, Image, Text} from 'react-native';
import {useCustomTheme} from '../../hooks';
import {UserCardProps} from './prop-types';
import {styles} from './styles';

const UserCard: FC<UserCardProps> = ({user}) => {
  const {colors} = useCustomTheme();

  return (
    <View style={[styles.card, {backgroundColor: colors.backgroundSecondary}]}>
      {user && (
        <>
          <Image source={{uri: user.avatar}} style={styles.avatar} />
          <View style={styles.info}>
            <Text style={{color: colors.text}}>Name: {user.first_name}</Text>
            <Text style={{color: colors.text}}>Email: {user.email}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export {UserCard};
