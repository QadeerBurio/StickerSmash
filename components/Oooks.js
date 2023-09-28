import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, Button } from 'react-native'

const Oooks = () => {
    const [count, setCount]=useState(0);
     
    useEffect(()=>{
        console.warn("hello")
    }, [])
  return (
    <View>
        <Text style={{fontSize:20, color:'red', paddingLeft:15}}>Use UseEffect Hooks_{count}</Text>
        <Button title='Update_Count' onPress={()=>setCount(count+1)}/>
    </View>
  )
}

export default Oooks
