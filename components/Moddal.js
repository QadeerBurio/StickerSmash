import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Modal } from 'react-native'

const Moddal = () => {
    const [showModal, setShowModal]=useState(false)
  return (
    <View style={styles.main}>
    <Modal transparent={true} visible={showModal} animationType='slide'>
        <View style={styles.wraperView}>
            <View style={styles.ModalView}>
                <Text style={styles.modaltext}>Here Use Modal</Text>
                <Button color='red' title='Close Modal' animationType='slide' onPress={()=>setShowModal(false)}/>
            </View>
        </View>
    </Modal>
    <View style={styles.button}>
    <Button title='open Modal' onPress={()=>setShowModal(true)}/>
    </View>
    </View>
  )
}
const styles=StyleSheet.create({
    main:{
        flex:1
    },
    button:{
        flex:1,
        justifyContent:'flex-end',
        margin:10
    },
    wraperView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    ModalView:{
        backgroundColor:'yellow',
        padding:35,
        borderRadius:10,
        elevation:10,
        shadowColor:'red'

    },
    modaltext:{
        fontSize:25
    }
})

export default Moddal
