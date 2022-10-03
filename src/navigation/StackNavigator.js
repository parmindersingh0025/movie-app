import React from 'react'
import { StyleSheet, View, text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopTabNavigator from './TopTabNavigator';
import MovieDetailScreen from '../screen/MovieDetailScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', statusBarColor: '#004764', headerTintColor: 'white', }}>
                <Stack.Screen
                    options={{ headerStyle: { backgroundColor: '#004764' } }}
                    name="Movie App"
                    component={TopTabNavigator} />
                <Stack.Screen
                    options={{ headerStyle: { backgroundColor: '#004764' } }}
                    name="Movie details"
                    component={MovieDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}
export default StackNavigator;