import React from 'react'
import { View, Text, StyleSheet, Button, Pressable } from 'react-native'

const PreSabble = () => {
  return (
    <View style={styles.main}>
        <Pressable
        //  onPress={()=>console.warn('Normal Press')}
        //  onLongPress={()=>console.warn('On Long Press')}
         onPressIn={()=>console.warn('on Press In')}
         onPressOut={()=>console.warn('on Press Out')}

        >
            <Text style={styles.pressableBtn}>Pressable</Text>
        </Pressable>
    </View>
  )
}
const styles=StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
    },
    pressableBtn:{
        backgroundColor:'green',
        color:'yellow',
        fontSize:30,
        shadowColor:"red",
        elevation:10,
        padding:10,
        margin:10,
        textAlign:'center',
        borderRadius:10
    }
})

export default PreSabble
