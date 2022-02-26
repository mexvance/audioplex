import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, Image, Dimensions, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView, TouchableWithoutFeedback } from 'react-native-web';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LibraryNav from './screens/LibraryNav';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import CustomIcon from './components/CustomIcon';
import { borderTopColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bookmarks from './screens/Bookmarks';
import BookDetail from './screens/BookDetail';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'LibraryNav':
      iconName = 'book-open';
      break;
    case 'Bookmarks':
      iconName = 'bookmark';
      break;
    case 'Profile':
      iconName = 'user';
    break;
      case 'Settings':
      iconName = 'sliders-h';
      break;
    default:
      break;
  }
  return <Icon name={iconName} color={color} size={24} />;
};
export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName = 'Home'
      screenOptions={({route}) => ({
        tabBarStyle: styles.appBar,
        tabBarIcon: ({color})=> screenOptions(route,color),
        tabBarActiveTintColor: '#ECB365'
      })}> 
      <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
          />
        <Tab.Screen
          name="LibraryNav"
          component={LibraryNav}
          options={{ headerShown: false }}
        
          
         />
            
           <Tab.Screen
          name="Bookmarks"
          component={Bookmarks}
          options={{ headerShown: false }}
          
          />
           <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
          
          />
           <Tab.Screen
          name="Settings" 
          component={Settings}
          options={{ headerShown: false }}
          
          />
           
    </Tab.Navigator>
   
    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04293A',
    alignItems: 'stretch',
    paddingTop: '10%',
    padding: '3%',
  },
  topOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: '5%',
    paddingRight: '3%',
    paddingLeft: '3%',
    paddingBottom: 5,
  },
  topLeft: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  topRight: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  
  header: {
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  containerList: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: '4%',

  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: '2%',
    paddingBottom: '3%',
  },
  item: {
    flexDirection: "row",

  },
  bookData: {
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#555',
    
  },
  bookRight: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 20,
    paddingLeft: 15,

  },
  bookText: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 12,
    flexWrap: 'wrap',
    color: '#aaa'
  },
  bookTitle: {
    fontSize: 16,
    color: 'white',
    flexWrap: 'wrap',
    paddingBottom: 2,
  },
  bookMetadata: {
    flexDirection: "column",
    justifyContent: 'center',
    flex: 1,
    margin: 6,
  },
  imageBox:{
    padding: 5,
    flex: 1/3,
    aspectRatio: 1 / 1,
  },
  bookImage: {
    aspectRatio: 1/1,
    flex: 1,
    borderRadius: 7,
  },
  appBar: {
    backgroundColor: '#041C32',
    paddingTop: 10,
    borderTopWidth: 0
  },
  searchBar: {
    fontSize: 18,
    height: 40,
    backgroundColor: '#064663',
    color: 'white',
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  
});