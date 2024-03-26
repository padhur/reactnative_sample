import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator'; // Import your bottom tab navigator
import {AnalyticsTracker} from './src/service/AnalyticsTracker';

const App: React.FC = () => {
  useEffect(() => {
    // On Start of application, run only once
    AnalyticsTracker.initialise(); //Init the analytics
  }, []);

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
