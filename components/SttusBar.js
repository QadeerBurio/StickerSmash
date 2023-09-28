import React, { useState } from 'react'
import { Button, StatusBar, View } from 'react-native'

const SttusBar = () => {
    const [hide, setHide]=useState(false)
    const [barStyle,setBarStyle]=useState("default")
  return (
    <View>
        <StatusBar 
            backgroundColor='red'
            barStyle={barStyle}
            hidden={hide}
        />
        <Button title='Toggle status bar' onPress={()=>setHide(!hide)} />
        <Button title='update Status Bar' onPress={()=>setBarStyle('dark-content')}/>
    </View>
  )
}

export default SttusBar
