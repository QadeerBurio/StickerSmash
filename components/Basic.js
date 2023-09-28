import React from 'react'
import { StyleSheet, Text, View,Image, Button } from 'react-native';
const Basic = () => {
    const name="AQ Khan";
    let age=40;
    var email="aqkhan110@gmail.com"
    function fruit(){
      return "apple";
    }
  return (
    <View>
   
      <Text>Here Start React_Native </Text>
      <Button title="press here"></Button>
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Text>{email}</Text>
      <Text>{fruit()}</Text>
      <Text>{age===39?"above 30":"unknown"}</Text>
</View>
  )
}

export default Basic;
