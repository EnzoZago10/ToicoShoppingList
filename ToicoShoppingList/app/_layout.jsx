import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
        <Stack>
            <Stack.Screen name='index' options={{ headerShown : False}} />
            <Stack.Screen name='home' options={{ headerShown : False}} />
        </Stack>    
        <StatusBar style='light' />
    </>
  )
}