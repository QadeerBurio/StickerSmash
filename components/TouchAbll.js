import React from 'react'
import { View, Text, FlatList, StyleSheet, Button, TouchableHighlight,  } from 'react-native'

const TouchAbll = () => {
  return (
   <View style={styles.main}>
   <TouchableHighlight>
    <Text style={styles.button}>Button</Text>
   </TouchableHighlight>
   <TouchableHighlight>
    <Text style={[styles.button, styles.success]}>success</Text>
   </TouchableHighlight>
   <TouchableHighlight>
    <Text style={[styles.button, styles.primary]}>Primary</Text>
   </TouchableHighlight>
   <TouchableHighlight>
    <Text style={[styles.button, styles.warning]}>warning</Text>
   </TouchableHighlight>
   <TouchableHighlight>
    <Text style={[styles.button, styles.error]}>Error</Text>
   </TouchableHighlight>
   </View>
  )
}

const styles=StyleSheet.create({
    main:{
        flex:1
    },
    button:{
        backgroundColor:'grey',
        color:'white',
        fontSize:25,
        textAlign:'center',
        padding:3,
        margin:8,
        borderRadius:9,
        shadowColor:'black',
        elevation:10,
        shadowOpacity:1
    },
    success:{
        backgroundColor:'black',
    },
    primary:{
        backgroundColor:'green',
    },
    warning:{
        backgroundColor:'gold'
    },
    error:{
        backgroundColor:'red'
    }


})

export default TouchAbll
