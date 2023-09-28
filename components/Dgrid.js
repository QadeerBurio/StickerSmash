import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

const Dgrid = () => {
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
        },
        {
            id:14,
            name:'AQ_khan'
        },
        {
            id:14,
            name:'AQ_khan'
        },
        {
            id:14,
            name:'AQ_khan'
        },
        {
            id:14,
            name:'AQ_khan'
        },
        {
            id:14,
            name:'AQ_khan'
        },
        {
            id:14,
            name:'AQ_khan'
        },
        {
            id:14,
            name:'AQ_khan'
        },
        {
            id:14,
            name:'AQ_khan'
        },
        {
            id:14,
            name:'AQ_khan'
        }
    ]
  return (
    <View>
        <Text style={{fontSize:20}}> Here We Create Grid Layout</Text>
        <ScrollView style={{marginBottom:40}}>
        <View style={{flex:1, flexDirection:'row', flexWrap:'wrap'}}>
        {
            users.map((item)=><Text style={styles.item}>{item.name}</Text>)
        }
        
            {/*  This is For Static
            <Text style={styles.item}>Dani</Text>
            <Text style={styles.item}>Adnan</Text>
            <Text style={styles.item}>Qadeer</Text>
            <Text style={styles.item}>Hub</Text>
            <Text style={styles.item}>Hasnain</Text>
            <Text style={styles.item}>Lachhman</Text>
            <Text style={styles.item}>junaid</Text>
            <Text style={styles.item}>Umar</Text>
            <Text style={styles.item}>fida</Text>
            <Text style={styles.item}>Muzi</Text>
            <Text style={styles.item}>ALi</Text>
            <Text style={styles.item}>Ahmed</Text>
            <Text style={styles.item}>Buriro</Text>
            <Text style={styles.item}>Hussain</Text>
            <Text style={styles.item}>Ali</Text>
            <Text style={styles.item}>Vighio</Text>
            <Text style={styles.item}>Abro</Text>
            <Text style={styles.item}>Dayo</Text> */}
        

        </View>
        </ScrollView>
    </View>
    
  )
}
const styles=StyleSheet.create({
    item:{
        padding:5,
        margin:5,
        color:'white',
        backgroundColor:'blue',
        fontSize:20,
        width:100,
        height:100,
        textAlign:'center',
        textAlignVertical:'center'
    }
})

export default Dgrid
