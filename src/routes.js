import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Pedidos from './pages/Pedidos';

const Stack = createStackNavigator();

//console.tron.log(signed);

// export default (signed = false) =>
//   <Stack.Navigator>
//     {signed ? (
//       <>
//         <Stack.Screen name="Home" component={Home} />
//       </>
//     ) : (
//       <Stack.Screen name="SignIn" component={SignIn} />
//     )}
//   </Stack.Navigator>



//  const Stack = createStackNavigator();
//  const Swith = createSwitchNavigator();

//  export default (signedIn = false) =>
//     createSwitchNavigator({
//      Sign: createSwitchNavigator({
//        SignIn,
//      }),
//      App: createSwitchNavigator({
//       Home,
//     }),
//    }, 
//    {
//      initialRouteName: signedIn ? 'App' : 'Sign'
//    }),
//  );





const Routes = () => (
  <Stack.Navigator>
     {/* <Stack.Screen name="SignIn" component={SignIn} barStyle="light-content" backgroundColor="#1735CC"/> */}
     <Stack.Screen name="Pedidos" component={Pedidos} barStyle="light-content" backgroundColor="#1735CC"/>
  </Stack.Navigator>
  );

export default Routes;
