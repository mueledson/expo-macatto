import React from "react"
import { Stack } from "expo-router"
import { StatusBar } from "react-native"

export default function StackRoutes(){
    return(
        <Stack screenOptions={{ headerShown: false }}>
            
            <Stack.Screen
                name="index"
                options={{
                    statusBarColor: "#000000",
                    statusBarStyle: "light"
                }}
            />
            
            <Stack.Screen
                name="register"
                options={{
                    statusBarColor: "#000000",
                    statusBarStyle: "light"
                }}
            />

            <Stack.Screen
                name="list"
                options={{
                    statusBarColor: "#000000",
                    statusBarStyle: "light"
                }}
            />

            <Stack.Screen
                name="new"
                options={{
                    statusBarColor: "#000000",
                    statusBarStyle: "light"
                }}
            />
        </Stack>
    )
}