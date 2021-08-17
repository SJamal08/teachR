import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Appearance, StatusBar } from 'react-native'
import TeachrBackend from '../components/TeachrBackend/index.js'
import TeachrFavorites from '../components/TeachrFavorites.js'

const Stack = createStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: true,
                    headerStatusBarHeight: 50,
                    headerTitleStyle: {
                        color: 'white',
                    },
                    headerStyle: {
                        backgroundColor: 'blue'
                    }
                }}
            >
                <Stack.Screen name="Teachr Favorites" component={TeachrFavorites} />
                <Stack.Screen name="Teachr Backend" component={TeachrBackend} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router