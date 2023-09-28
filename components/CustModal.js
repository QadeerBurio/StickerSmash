import React, {useState} from 'react'
import { View, Text, StyleSheet, Button, } from 'react-native'

const CustModal = () => {
    const [show, setShow]=useState(false)

  return (
    <View style={styles.container}>
    {
        show ?
   
    <View style={styles.modal}>

    <View style={styles.body}>
    <Text>Here We Close Modal </Text>
    <Button title='Close Modal' onPress={()=>setShow(false)} />
    </View>
    
    </View>
    :null
    }
    <Button title='open dialog'  onPress={()=>setShow(true)}/>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:10

    },
    modal:{
        flex:1,
        backgroundColor:'rgba(50,50,50,0.5)',
        justifyContent:'center',
        alignItems:'center'
    },
    body:{
        backgroundColor:'white',
        width:300,
        height:300,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:18

    }
})

export default CustModal
