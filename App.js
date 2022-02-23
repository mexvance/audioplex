import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-web';

const data = [
  {
    id: '1',
    title: 'Tarzan of the Apes',
    author: 'Edgar Rice Burroughs',
    progress: 'none',
  },
  {
    id: '2',
    title: 'The Princess of Mars',
    author: 'Edgar Rice Burroughs',
    progress: '100%',
  },
  {
    id: '3',
    title: 'The Eye of the World',
    author: 'Robert Jordan',
    progress: '1.5%',
  },
  {
    id: '4',
    title: 'Fablehaven',
    author: 'Brandon Mull',
    progress: 'none',
  },
];

const BookItem = ({title,author,progress}) => (
  <View style={styles.item}>
    <Image source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={styles.bookImage}/>
    <View style={styles.bookMetadata}>
      <Text style={styles.bookTitle}>{title}</Text>
      <Text style={styles.bookText}>{author}</Text>
      <Text style={styles.bookText}>{progress}</Text>
    </View>
  </View>
);
export default function App() {
  const renderItem = ({item})=>(
    <BookItem title={item.title} author={item.author} progress={item.progress}></BookItem>
  )
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Library
      </Text>
      <TextInput
        style={{fontSize: 18, height: 40, borderBottomColor: 'black', borderBottomWidth: 1, width: '100%'}}
        placeholder="Search" 
      />
      <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
        style={{width: '100%'}}> 
        
        </FlatList>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingTop: '10%',
    padding: '5%',
  },
  titleText:{
    fontSize: 40,
    fontWeight: 'bold',
  },
  item:{
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: "row",
    width: '100%'
  },
  bookText:{
    fontSize: 12,
  },
  bookTitle:{
    fontSize: 15,
  },
  bookMetadata:{
    flexDirection: "column",
    padding: 20
  },
  bookImage:{ 
    height:'100%', 
    aspectRatio: 1/1, 
    maxWidth: '30%',
    justifyContent: 'center',
    textAlignVertical: 'center'
  }
});
