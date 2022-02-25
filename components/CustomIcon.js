import React, { useEffect, useState } from 'react'
import { StyleSheet, View,  Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function CustomIcon ({type, iconName, size, location, navigation}){
    const [colors, setColors] = useState([])
    useEffect(()=>{
      switch(type) {
      case 'default':
        setColors([styles.defaultIconColor, styles.defaultIconColorHover]);
        break;
      case 'play':
        setColors([styles.playIconColor, styles.playIconColorHover]);
        break;
      case 'options':
        setColors([styles.optionsIconColor, styles.optionsIconColorHover]);
        break;
      case 'appbar':
        setColors([styles.appBarIconColor, styles.appBarIconColorHover]);
        break;
      default:
        setColors([styles.appBarIconColor, styles.appBarIconColorHover]);
        break;
      };
      
        
      },[]);
    return(
      <View style={styles.icon}>
      <Pressable onPress={()=>{
          navigation && location && navigation.navigate(location);}}
          >
        {({pressed})=>(
           
          <Icon 
            name={iconName} 
            size={size} 
            style={{padding:10},pressed ? colors && colors[1] : colors && colors[0]}
            />
        )}
      </Pressable>
    </View>
    );
  };

const styles = StyleSheet.create({
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