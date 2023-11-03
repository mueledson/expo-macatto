import React from "react"
import { Stack } from "expo-router"

export default function StackRoutes(){
    return(
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="index"
            />
            
            <Stack.Screen
                name="register"
            />

            <Stack.Screen
                name="list"
            />
        </Stack>
    )
}