import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView, TouchableWithoutFeedback } from 'react-native-web';


const data = [
  {
    id: '1',
    title: 'Tarzan of the Apes',
    author: 'Edgar Rice Burroughs ',
    progress: 'none',
    img: require('./assets/images/tarzan.jpg')
  },
  {
    id: '2',
    title: 'The Princess of Mars',
    author: 'Edgar Rice Burroughs',
    progress: '100%',
    img: require('./assets/images/princessofmars.jpg')
  },
  {
    id: '3',
    title: 'The Eye of the World',
    author: 'Robert Jordan',
    progress: '1.5%',
    img: require('./assets/images/eyeoftheworld.jpg')
  },
  {
    id: '4',
    title: 'Fablehaven',
    author: 'Brandon Mull',
    progress: 'none',
    img: require('./assets/images/fablehaven.jpg')
  },

];

const BookItem = ({ title, author, progress, img }) => (
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

        <Icon name="play" size={25} color='#ccc' />
      </View>
    </View>
  </View>
);
export default function App() {
  const bookList = ({ item }) => (
    <BookItem title={item.title} author={item.author} progress={item.progress} img={item.img}></BookItem>
  )
  return (
    <View style={styles.container}>
      <View style={styles.topOptions}>
        <View style={styles.topLeft}>
          <Icon style={styles.icon} name="folder-open" size={20} color="#999" />

        </View>
        <View style={styles.topRight}>
          <Icon style={styles.icon} name="sort-alpha-down" size={20} color="#999" />
          <Icon style={styles.icon} name="ellipsis-v" size={20} color="#999" />
        </View>
      </View>
      <View style={styles.header}>
        <Text style={styles.titleText}>Library - Mike Plex
        </Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#fff"
        />
      </View>
      <View style={styles.containerList}>
        <FlatList
          data={data}
          renderItem={bookList}
          keyExtractor={item => item.id}
        >

        </FlatList>
      </View>
      <View style={styles.appBar}>
        <Icon name="home" size={25} color="#999" />
        <Icon name="book-open" size={25} color="#ECB365" />
        <Icon name="bookmark" size={25} color="#999" />
        <Icon name="user" size={25} color="#999" />
        <Icon name="sliders-h" size={25} color="#999" />

      </View>
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
  icon: {
    paddingRight: 10,
    paddingLeft: 10,
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
    margin: 5,
  },
  bookData: {
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#555',
    marginLeft: 6,
    
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
    flex: 1
  },
  imageBox:{
    paddingTop: 2,
    paddingBottom: 2,
    flex: 1/2.5,
    aspectRatio: 1 / 1,
  },
  bookImage: {
    aspectRatio: 1/1,
    flex: 1,
  },
  appBar: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#041C32',
    borderRadius: 20,
    marginBottom: 20,
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
