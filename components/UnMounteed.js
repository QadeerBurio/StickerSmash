import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, Button } from 'react-native'

const UnMounteed = () => {
    const [show, setShow]=useState(true)

  return (
    <View>
        <Text style={{fontSize:20}}>UseEffect For Un_Mounted </Text>
        <Button title='Toggle ' onPress={()=>setShow(!show)} />
        {
            show==true ?  <Student/> :null
        }
       
    </View>
  )
}
  const Student=()=>{
    let timer=setInterval(()=>{
      console.warn("Timer Called");
    }, 2000)
    useEffect(()=>{
      return()=>clearInterval(timer)
    })
    return(
        <View>
        <Text style={{fontSize:20, color:'green'}}>Student</Text>
        </View>
    )
  }


export default UnMounteed
