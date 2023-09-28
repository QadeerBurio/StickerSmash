import React, { useState } from 'react'
import { StyleSheet, Text, View,Image, Button } from 'react-native';

const Uses = () => {
  const [name,setName]=useState('AQ')

  function changeName(){
    setName("AQ khan")
  }
  return (
   
    <View>
      <Text>{name}</Text>
      <Button title='Change Name' onPress={changeName} />
      </View>
   
  )
}

export default Uses
