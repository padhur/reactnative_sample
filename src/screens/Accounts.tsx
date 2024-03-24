import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Accounts: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Accounts!</Text>
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

export default Accounts;
