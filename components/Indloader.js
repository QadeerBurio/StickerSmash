import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Button } from 'react-native'

const Indloader = () => {
    const [show, setShow]=useState(false)
    const displayLoader=()=>{
        setShow(true)
        setTimeout(()=>{
            setShow(false)
        }, 3000)
    }
  return (
    <View>
    <ActivityIndicator size={40} color='red' animating={show} />
    <Button title='show loader' onPress={displayLoader} />
    
        </View>
  )
}

export default Indloader
