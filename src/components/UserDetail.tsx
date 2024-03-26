import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RootStackParamList from '../data/RootStackParamList';

type UserDetailRouteProps = RouteProp<RootStackParamList, 'UserDetail'>;
type Props = {
  route: UserDetailRouteProps;
};

const UserDetailScreen: React.FC<Props> = ({route}) => {
  const {user} = route.params;
  // Access user object properties
  console.log(user.firstName);
  return (
    <View style={styles.container}>
      <Text>First Name: {user.firstName}</Text>
      <Text>Last Name: {user.lastName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserDetailScreen;
