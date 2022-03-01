import React, { useEffect, useState } from 'react'
import Library from './Library';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookDetail from './BookDetail';
const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <BookContext.Provider value ={{
      id: '1',
      title: 'Tarzan of the Apes',
      author: 'Edgar Rice Burroughs ',
      progress: 'none',
      img: require('../assets/images/tarzan.jpg')
    }}>
      <Stack.Navigator
      initialRouteName = 'Library'
      >
      <Stack.Screen
          name="BookDetail"
          component={BookDetail}
          options={{ headerShown: false }}
          />
        <Stack.Screen
          name="Library"
          component={Library}
          options={{ headerShown: false }}
        
          
         />
           
    </Stack.Navigator>
    </BookContext.Provider>
  );
}
