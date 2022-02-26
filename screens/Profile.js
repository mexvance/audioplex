import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native';
import CustomIcon from '../components/CustomIcon'; 

export default function Profile({navigation}) {

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
      <View style={styles.header}>
        <Text style={styles.titleText}>Profile
        
        </Text>
        <Text style={styles.bookTitle}>Recent</Text>
       
      </View>
      <View style={styles.containerList}>
    
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
