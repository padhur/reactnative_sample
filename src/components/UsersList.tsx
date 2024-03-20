import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import NetworkService from '../service/NetworkService';
import {User, UsersResult} from '../data/UserResult';
import {useNavigation} from '@react-navigation/native';

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchUsers = async () => {
    try {
      const networkService = new NetworkService('https://dummyjson.com');
      const response = await networkService.get<UsersResult>('users');
      setUsers(response.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const navigateToUserDetail = (user: User) => {
    // @ts-ignore
    navigation.navigate('Detail', {user});
  };

  const renderUserItem = ({item}: {item: User}) => {
    return (
      <TouchableOpacity onPress={() => navigateToUserDetail(item)}>
        <View style={styles.userItem}>
          <Text>{item.firstName}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={users}
      renderItem={renderUserItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  userItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default UsersList;
