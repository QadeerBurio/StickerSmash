import React from 'react'
import {StyleSheet, View , Text} from 'react-native'

const Styless = () => {
  return (
   <View>
   <Text style={{fontSize:20 , color:'red', backgroundColor:'yellow', marginBottom:10}}>Here Use Styling</Text>
   <Text style={styles.box}>Here Use Styling</Text>
   <Text style={styles.box}>Here Use Styling</Text>

   </View>
  )
}

const styles=StyleSheet.create({
    box:{
        color:'wheat',
        fontSize:20,
        backgroundColor:'grey',
        marginBottom:10,
        borderRadius:20,
        textAlignVertical:'center',
        textAlign:'center',
        borderWidth:2,
        borderColor:'yellow'
    }
})

export default Styless
