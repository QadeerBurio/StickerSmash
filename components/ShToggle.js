import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet, Button } from 'react-native'

const ShToggle = () => {
    const [show, setShow]=useState(true)

  return (
    <View>
        <Text style={{fontSize:20}}>Show/Hide Components</Text>
        <Button title='Toggle Component' onPress={()=>setShow(!show)} />
        {
            show==true ?  <User/> :null
        }
       
    </View>
  )
}
  const User=()=>{
    return(
        <View>
        <Text style={{fontSize:20, color:'green'}}>Show/Hide Components</Text>
        </View>
    )
  }


export default ShToggle
