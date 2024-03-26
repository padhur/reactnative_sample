import React from 'react';
import {View} from 'react-native';
import UsersList from '../components/UsersList';

const Home: React.FC = () => {
  return (
    <View>
      {/* <Text>Home!</Text> */}
      <UsersList />
    </View>
  );
};

export default Home;
