import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useCustomTheme} from './hooks';
import {Navigation} from './navigation';
import {darkTheme, lightTheme} from './styles/theme';

const App: FC = () => {
  let {dark} = useCustomTheme();

  return (
    <NavigationContainer theme={dark ? darkTheme : lightTheme}>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
