import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
                    borderRadius: 12,
                    bottom: 34,
                    left: 5,
                    right: 5,
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