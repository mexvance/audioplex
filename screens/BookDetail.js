import React, { useEffect, useState, useContext } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, Image, Dimensions, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BookContext from '../components/BookContext';
import CustomIcon from '../components/CustomIcon'
const data = [
  {
    id: '1',
    title: 'Tarzan of the Apes',
    author: 'Edgar Rice Burroughs ',
    progress: 'none',
    img: require('../assets/images/tarzan.jpg')
  },
  {
    id: '2',
    title: 'The Princess of Mars',
    author: 'Edgar Rice Burroughs',
    progress: '100%',
    img: require('../assets/images/princessofmars.jpg')
  },
  {
    id: '3',
    title: 'The Eye of the World',
    author: 'Robert Jordan',
    progress: '1.5%',
    img: require('../assets/images/eyeoftheworld.jpg')
  },
  {
    id: '4',
    title: 'Fablehaven',
    author: 'Brandon Mull',
    progress: 'none',
    img: require('../assets/images/fablehaven.jpg')
  },

];
const BookItem = ({ item }) => {
  console.log(item)
  return(
  <View style={styles.item}>
    
    <View style={styles.imageBox}>
    <Image source={img}
      style={styles.bookImage} />
    </View>
    <View style={styles.bookData}>
      <View style={styles.bookMetadata}>
        <Text style={styles.bookTitle}>{title}</Text>
        <Text style={styles.bookText}>{author}</Text>
        <Text style={styles.bookText}>{progress}</Text>

      </View>
      <View style={styles.bookRight}>
        <CustomIcon type='play' iconName='play' size={25}/>
      </View>
    </View>
  </View>
  )
  };


export default function BookDetail({navigation, route}) {
  const item = useContext(BookContext);
  const [searchText, setSearchText] = React.useState("");
    
    console.log(item)
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
          Back
      </Text>
      </Pressable>
      <BookContext.Consumer>
        {(item)=>(
          <BookItem title={item.title} author={item.author} progress={item.progress} img={item.img}></BookItem>
        )}
      {/* <BookItem title={item.title} author={item.author} progress={item.progress} img={item.img}></BookItem> */}
      </BookContext.Consumer>
      
      <StatusBar style='light' />
    </View>
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
