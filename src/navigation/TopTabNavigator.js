import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MovieScreen from '../screen/MovieScreen';
import SearchScreen from '../screen/SearchScreen';
import TvScreen from '../screen/TvScreen';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerTintColor: 'gray', tabBarPressColor: '#004764' }}>
            <Tab.Screen name="movies" component={MovieScreen} />
            <Tab.Screen name="Search screen" component={SearchScreen} />
            <Tab.Screen name="Tv shows" component={TvScreen} />
        </Tab.Navigator>
    );
}
export default TopTabNavigator