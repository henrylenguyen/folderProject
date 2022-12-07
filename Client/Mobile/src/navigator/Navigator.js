import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes';
import {useSelector} from 'react-redux';
import Sigin from '../view/Sigin';

const Stack = createNativeStackNavigator();
export default function Navigator() {
  const {isSigin} = useSelector(state => state.authen);
  console.log('isSigin', isSigin);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group navigationKey={`${isSigin}`}>
          <Stack.Screen name="SignIn" component={Sigin} />
        </Stack.Group>
        {isSigin &&
          routes.map(item => (
            <Stack.Screen
              key={item.name}
              name={item.name}
              component={item.component}
            />
          ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
