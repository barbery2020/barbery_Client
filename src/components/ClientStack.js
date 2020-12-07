import 'react-native-gesture-handler';
import React, {Component} from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import colors from '../styles/colors';

import HomeScreen from '../screen/ClientSide/HomeScreen';
import ProfileScreen from '../screen/ClientSide/ProfileScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class ClientStack extends Component {
  // createServiceStack = () => (
  // 	<Stack.Navigator>
  // 		<Stack.Screen
  // 			name="Services List"
  // 			component={ServicesListScreen}
  // 			options={{
  // 				headerStyle: { backgroundColor: colors.red },
  // 				headerTintColor: 'white',
  // 			}}
  // 		/>
  // 		<Stack.Screen
  // 			name="Service Details"
  // 			component={ServiceDetailsScreen}
  // 			options={{
  // 				headerStyle: { backgroundColor: colors.red },
  // 				headerTintColor: 'white',
  // 			}}
  // 		/>
  // 		<Stack.Screen
  // 			name="Add Service"
  // 			component={ServicesAddScreen}
  // 			options={{
  // 				headerStyle: { backgroundColor: colors.red },
  // 				headerTintColor: 'white',
  // 			}}
  // 		/>
  // 		<Stack.Screen
  // 			name="Update Service"
  // 			component={ServicesEditScreen}
  // 			options={{
  // 				headerStyle: { backgroundColor: colors.red },
  // 				headerTintColor: 'white',
  // 			}}
  // 		/>
  // 		<Stack.Screen
  // 			name="Image View"
  // 			component={ViewImageScreen}
  // 			options={{
  // 				headerStyle: { backgroundColor: 'black' },
  // 				headerTintColor: 'white',
  // 			}}
  // 		/>
  // 	</Stack.Navigator>
  // );

  render() {
    return (
      <Drawer.Navigator edgeWidth={200}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        {/* <Drawer.Screen name="Services" children={this.createServiceStack} /> */}
      </Drawer.Navigator>
    );
  }
}
