import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

const Radiobuttn = () => {
    const [selectradio, setSelectedradio]=useState(1);
    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={()=>setSelectedradio(1)}>
                <View style={styles.radiowraper}>
                    <View style={styles.radio}>
                    {
                        selectradio===1 ? <View style={styles.Bg}></View> :null
                    }
                    </View>
                    <Text style={styles.radio1}>Radio 1</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setSelectedradio(2)}>
                <View style={styles.radiowraper}>
                    <View style={styles.radio}>
                    {
                        selectradio===2 ? <View style={styles.Bg}></View> :null
                    }
                    </View>
                    <Text style={styles.radio1}>Radio 2</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    radio: {
        height: 40,
        width: 40,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        margin: 10
    },
    radiowraper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    radio1: {
        fontSize: 20
    },
    Bg:{
        backgroundColor:'blue',
        height:28,
        width:28,
        borderRadius:14,
        margin:4
    }
})

export default Radiobuttn
