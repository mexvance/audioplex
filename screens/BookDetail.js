import React, { useEffect, useState, useContext } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, Image, Dimensions, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BookContext from '../components/BookContext';
import CustomIcon from '../components/CustomIcon'

const BookContent = ({ item }) => {
  return(
  <View style={styles.item}>
    
    <View style={styles.imageBox}>
    <Image source={item.img}
      style={styles.bookImage} />
    </View>
    <View style={styles.bookData}>
      <View style={styles.bookMetadata}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.bookText}>{item.author}</Text>
        <Text style={styles.bookText}>{item.progress}</Text>

      </View>
      <View style={styles.playPause}>
        <CustomIcon style={styles.playPauseIcon}  type='play' iconName='play' size={50}/>
      </View>
    </View>
  </View>
  )
  };


export default function BookDetail({navigation, route}) {

  const context = useContext(BookContext);
  const [searchText, setSearchText] = React.useState("");

  return (
    
    <View style={styles.container}>
      <View style={styles.topOptions}>
        <View style={styles.topLeft}>
          <CustomIcon iconName="server" size={20} type='options' />
        </View>
        <View style={styles.topRight}>
          <CustomIcon iconName="sort-alpha-down" size={20} type='options' />
          <CustomIcon iconName="ellipsis-v" size={20} type='options' />
        </View>
      </View>
      <Pressable onPress={()=>{navigation.goBack()}}>
      <Text style={styles.titleText}>
          {"<"}
      </Text>
      </Pressable>
      {context.book &&
       <BookContent item={context.book}></BookContent>
      }
      <StatusBar style='light' />
    </View>
  );
}
const color = '#04293A'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color,
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
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: '2%',
    paddingBottom: '3%',
  },
  item: {
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  bookData: {
    backgroundColor: 'red',
    alignItems: 'stretch',
    
      },
  playPause: {
    padding: 20,
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  playPauseIcon:{
    
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
  },
  imageBox:{
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',

  },
  bookImage: {
    justifyContent: 'center',
    aspectRatio: 1/1,
    width: '60%',
    alignItems: 'stretch',
  },
  icon:{
    paddingRight: 10,
    paddingLeft: 10,
  },
  defaultIconColor:{
    color: '#999',
  },
  defaultIconColorHover:{
    color: '#ECB365',
  },
  playIconColor:{
    color: '#ccc',
  },
  playIconColorHover:{
    color: '#555',
  },
  optionsIconColor:{
   
    color: '#ccc',
  },
  optionsIconColorHover:{
    color: '#444',
  },
  appBarIconColor:{
    color: '#999',
  },
  appBarIconColorHover:{
    color: '#ECB365',
  }
});
