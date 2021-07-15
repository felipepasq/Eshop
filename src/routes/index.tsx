import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../pages/Home'
import Cart from '../pages/Cart'

const Stack = createStackNavigator();


const StackRoutes: React.FC = () => (
    <Stack.Navigator
        screenOptions={{
            headerTitleAlign: "center"
        }}
    >
        <Stack.Screen name="Eshop" component={Home} />
        <Stack.Screen name="MyCart" component={Cart} />
    </Stack.Navigator>
);

export default StackRoutes;