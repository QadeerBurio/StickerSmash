import React, { useState } from 'react'
import { StyleSheet, Text, View,Image, Button, TextInput } from 'react-native';

const Inputs = () => {
    const [name, setName]=useState('')
  return (
    <View>
        <Text style={{color:'black', fontSize:20, alignItems:'center'}}>Here Use For Get Inputs</Text>

        <Text>Your Name Is:{name}</Text>
        <TextInput style={styles.box} placeholder='Enter Your Name' value={name} onChangeText={(text)=>setName(text)}/>
        <Button title='clear' onPress={()=>setName('')} />
    </View>
  )
}

const styles=StyleSheet.create({
    box:{
        fontSize:20,
        color:'',
        backgroundColor:'wheat',
        margin:10,
        borderWidth:2,
        borderColor:'black',
        borderRadius:10,
        paddingLeft:10
    }
})

export default Inputs
