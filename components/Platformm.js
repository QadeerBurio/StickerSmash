import React from 'react'
import { Button, View ,Text,StyleSheet, Platform } from 'react-native'

const Platformm = () => {
  return (
    <View>
    <Text style={{fontSize:25}}>Platform : {Platform.OS}</Text>
    {
      Platform.OS=='ios' ? <View style={{backgroundColor:'red', height:100, width:100}}></View>
      : <View style={{backgroundColor:'green', height:100, width:100}}></View>
    }
    <Text style={styles.text}>Wellcome</Text>
    <Text>{JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>
    </View>
  )
}
const styles=StyleSheet.create({
  text:{
    color:Platform.OS=='ios' ? 'orange':'blue',
    fontSize:20
  }
})

export default Platformm
