import React from 'react'
import { StyleSheet, Text, View, FlatList, Button, TextInput, ScrollView } from 'react-native';

const LmapF = () => {

    const users=[
        {
            id:1,
            name:'AQ'
        },
        {
            id:2,
            name:'Danish'
        },
        {
            id:3,
            name:'Hub'
        },
        {
            id:4,
            name:'Adnan'
        },
        {
            id:5,
            name:'lachhman'
        },
        {
            id:6,
            name:'Hassnain'
        },
        {
            id:7,
            name:'fida'
        },
        {
            id:8,
            name:'junaid'
        },
        {
            id:9,
            name:'Sami'
        },
        {
            id:10,
            name:'Haju'
        },
        {
            id:11,
            name:'Ali'
        },
        {
            id:12,
            name:'Khan'
        },
        {
            id:13,
            name:'Buriro'
        },
        {
            id:14,
            name:'AQ_khan'
        }
    ]

  return (
   <View>
    <Text style={{fontSize:15}}>List With Map Function</Text>
    <ScrollView style={{marginBottom:40}}>
    {
        users.map((item)=><Text style={styles.item}>{item.name}</Text>)
    }
    </ScrollView>
   </View>
  )
}
const styles=StyleSheet.create({
    item:{
        fontSize:18,
        padding:10,
        color:"white",
        backgroundColor:'brown',
        borderWidth:4,
        borderColor:'black',
        margin:7,
        borderRadius:15
    }
})

export default LmapF
