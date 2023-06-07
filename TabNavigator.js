import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Iconly } from 'react-iconly';
import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    borderTopColor: "transparent",
                    position: 'absolute',
                    borderRadius: 15,
                    bottom: 10,
                    left: 10,
                    right: 10,
                    elevation: 0,
                    height: 70,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <View style={{top: 10}}>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;