import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../pages/Home'

const Auth = createStackNavigator();


const AuthRoutes: React.FC = () => (
    <Auth.Navigator
        screenOptions={{
            headerTitleAlign: "center"
        }}
    >
        <Auth.Screen name="Eshop" component={Home} />
    </Auth.Navigator>
);

export default AuthRoutes;