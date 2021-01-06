import React from 'react';
import DrawerNavigation from './src/navigation/drawerNavigation'
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer from './src/reducers/loginFormReducer'




const store = createStore(reducer);

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
      </Provider>
  
        
    );
  }

}
