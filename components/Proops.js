import React, { useState } from 'react'
import { StyleSheet, Text, View,Image, Button } from 'react-native';

const Proops = () => {

    const [name, setName]=useState("Buriro")
  return (
    <View>
        <Text>THis Is For Props</Text>
        <Button title='Update' onPress={()=>setName('Abro')} />

        <User name={name} age={29} />
    </View>
  )
}

const User = (props) => {
    return (
      <View>
          <Text>{props.name}</Text>
          <Text>{props.age}</Text>

      </View>
    )
  }

export default Proops
