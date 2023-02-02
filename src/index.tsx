import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './navigation';

const App: FC = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
