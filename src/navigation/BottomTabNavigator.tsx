import React, {useEffect, useState} from 'react';
import Home from '../components/Home'; // import your screen components
import Accounts from '../components/Accounts';
import Services from '../components/Services';
import Reports from '../components/Reports';
import SplashScreen from '../screens/SplashScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserDetail from '../components/UserDetail';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigator = () => {
  const [isSplashFinished, setIsSplashFinished] = useState(false);

  // eslint-disable-next-line react/no-unstable-nested-components
  const TabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="home-work" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Services"
          component={Services}
          options={{
            tabBarLabel: 'Services',
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="miscellaneous-services" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Reports"
          component={Reports}
          options={{
            tabBarLabel: 'Reports',
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="list-alt" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Accounts}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="manage-accounts" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setIsSplashFinished(true);
    }, 2000);
  }, []);

  if (!isSplashFinished) {
    return <SplashScreen />;
  }

  return (
    // <NavigationContainer independent={true}>
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Detail" component={UserDetail} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default BottomTabNavigator;
