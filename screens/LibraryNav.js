import React, { useEffect, useState } from 'react'
import Library from './Library';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookDetail from './BookDetail';
const Stack = createNativeStackNavigator();

export default function App() {
  const [book,setBook] = useState({
    id: '-1',
    title: 'Unknown',
    author: 'Unknown',
    progress: 'Unknown',
    img: ''
  })
  const value = {book, setBook}
  return (
    <BookContext.Provider value ={value}>
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
