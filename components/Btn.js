import React from 'react'
import { StyleSheet, Text, View,Image, Button } from 'react-native';
const Btn = () => {
  const fruit=()=>{
    console.warn('function called')
  }
  return (
    <View style={{paddingTop:40}}>
    <Text >Here Start React_Native </Text>
    <Text></Text>
        <Button title="On Press" onPress={()=>fruit()} color={'wheat'}></Button>

       
        </View>
  )
}

export default Btn
