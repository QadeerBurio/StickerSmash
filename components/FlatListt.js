import React from 'react'
import { StyleSheet, Text, View, FlatList, Button, TextInput } from 'react-native';

const FlatListt = () => {
    
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
        }
    ]
  return (
    <View>
        <Text style={{fontSize:20, paddingLeft:15, color:'black',borderWidth:5, borderColor:'black', borderRadius:8}}>Here We Use FlatList Components</Text>
        <FlatList 
            data={users}
            renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
            keyExtractor={item=>item.id}
        />
    </View>
  )
}
const styles=StyleSheet.create({
    item:{
        fontSize:18,
        padding:10,
        color:"white",
        backgroundColor:'grey',
        borderWidth:4,
        borderColor:'black',
        margin:7,
        borderRadius:15
    }
})

export default FlatListt
