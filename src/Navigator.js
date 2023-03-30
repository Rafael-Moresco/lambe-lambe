import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import Icon from 'react-native-vector-icons/FontAwesome'

import Splash from "./screens/Splash"
import Feed from "./screens/Feed"
import AddPhoto from "./screens/AddPhoto"
import Profile from "./screens/Profile"
import Login from "./screens/Login"
import Register from "./screens/Register"


    const Tab = createBottomTabNavigator()
    const Stack = createStackNavigator()

    const MyTabs = () =>{
        return(
                <Tab.Navigator>
                    <Tab.Screen name = 'Feed' component={Feed} options={{
                        title: 'Feed', 
                        headerShown: false,
                        tabBarIcon: ({ tintColor }) => 
                        <Icon name = 'home' size={30} color={tintColor} /> }}  />
                    <Tab.Screen name='AddPhoto' component={AddPhoto} options={{
                        title: 'Add Picture',
                        headerShown: false,
                        tabBarIcon: ({ tintColor }) =>
                        <Icon name ='camera' size={30} color={tintColor} />}} />
                    <Tab.Screen name="Login" component={Login} options={{ title: 'Profile',
                        headerTitle: 'Login',
                        tabBarIcon: ({ tintColor }) =>
                        <Icon name ='user' size={30} color={tintColor} />}} />
                </Tab.Navigator>         
        )
    }

    export default function MyStacks() {
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash">
                    <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
                    <Stack.Screen  name="Home" component={MyTabs} options={{headerShown: false}} />
                    <Stack.Screen name="Profile" component={Profile} options={{headerTitle:'Profile', headerLeft: false}} />
                    <Stack.Screen name="Register" component={Register} options={{headerTitle: 'Registrar'}} />
                </Stack.Navigator>
            </NavigationContainer>
        )        
    }