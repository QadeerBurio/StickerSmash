import React, {useState} from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

const RDbutton = () => {
    const skills=[
        {
            id:1,
            name:'Java'
        },
        {
            id:2,
            name:'    JS'
        },
        {
            id:3,
            name:' CSS'
        },
        {
            id:4,
            name:'html'
        }
    ]
    const [selectradio, setSelectedradio]=useState(1);

  return (
    <View style={styles.main}>
            {
                skills.map((item,index)=><TouchableOpacity
                key={index}
                 onPress={()=>setSelectedradio(item.id)}>
                <View style={styles.radiowraper}>
                    <View style={styles.radio}>
                    {
                        selectradio===item.id ? <View style={styles.Bg}></View> :null
                    }
                    </View>
                    <Text style={styles.radio1}>{item.name}</Text>
                </View>
            </TouchableOpacity>
                )
            }
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
        margin: 10,
        
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

export default RDbutton
