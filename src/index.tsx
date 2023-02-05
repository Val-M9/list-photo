import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import 'fast-text-encoding';
import {useCustomTheme} from './hooks';
import {store} from './store/store';
import {Navigation} from './navigation';
import {darkTheme, lightTheme} from './styles/theme';

const App: FC = () => {
  let {dark} = useCustomTheme();
  dark = false;
  return (
    <Provider store={store}>
      <NavigationContainer theme={dark ? darkTheme : lightTheme}>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
