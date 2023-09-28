import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const Lwflatlist = () => {
    const users=[
        {
            id:1,
            name:'Buriro',
            email:'abdul@gmail.com'
        },
        {
            id:1,
            name:'Qadeer',
            email:'abdul@gmail.com'
        },
        {
            id:1,
            name:'Abdul',
            email:'abdul@gmail.com'
        },

    ]
  return (
    <View>
        <Text style={{fontSize:20}}>Component in loop with FlatList</Text>
        <FlatList 
            data={users}
            renderItem={({item})=><UserData item={item} />}
        />
    </View>
  )
}
const UserData=(props)=>{
    const item=props.item
    return(
       
             <View style={styless.box}>
                <Text style={styles.item}>{item.name}</Text>
                <Text style={styles.item}>{item.email}</Text>
            </View>
       
    )
}


const styles=StyleSheet.create({
    item:{
        fontSize:18,
        flex:1,
        padding:2,
        
        color:"black",
        backgroundColor:'green',
        
       
        margin:2,
       
    }
})
const styless=StyleSheet.create({
    box:{
        flexDirection:'row',
        borderWidth:4,
        borderColor:'black',
        marginBottom:10
        
    }
})

export default Lwflatlist
