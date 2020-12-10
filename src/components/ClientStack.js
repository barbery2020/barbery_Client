import 'react-native-gesture-handler';
import React, { Component } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icons from 'react-native-vector-icons/AntDesign';

import colors from '../styles/colors';

import HomeScreen from '../screen/ClientSide/HomeScreen';
import ProfileScreen from '../screen/ClientSide/ProfileScreen';
import AppointmentListScreen from '../screen/ClientSide/AppointmentScreen';
import AppointmentDetailScreen from '../screen/ClientSide/AppointmentDetailScreen';
import ChatScreen from '../screen/others/ChatScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

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

  BottomTabs = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={colors.red}
        inactiveColor={colors.medium}
        barStyle={{ backgroundColor: colors.white }}
        // tabBarOptions={{
        //   activeTintColor: colors.red,
        // }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Icons name="home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <Icons name="user" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Appointments"
          // component={AppointmentListScreen}
          children={this.createAppointmentStack}
          options={{
            tabBarLabel: 'Appointments',
            tabBarIcon: ({ color }) => (
              <Icons name="calendar" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color }) => (
              <Icons name="message1" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  createAppointmentStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Appointment Screen"
        component={AppointmentListScreen}
        options={{
          // headerStyle: { backgroundColor: colors.red },
          // headerTintColor: 'white',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Appointment Details"
        component={AppointmentDetailScreen}
        options={{
          headerStyle: { backgroundColor: colors.red },
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );

  render() {
    return (
      <Drawer.Navigator edgeWidth={200}>
        <Drawer.Screen
          name="Home"
          children={this.BottomTabs}
          // component={HomeScreen}
        />
        {/* <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen
          name="Appointment"
          children={this.createAppointmentStack}
        /> */}
        {/* <Drawer.Screen name="Services" children={this.createServiceStack} /> */}
      </Drawer.Navigator>
    );
  }
}
