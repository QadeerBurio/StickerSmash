import React from 'react'
import { View, Text, StyleSheet, SectionList } from 'react-native'

const Seclists = () => {

        const users=[
          {
              id:1,
              name:'AQ',
              data:['React','JS','Reactnative']
          },
          {
              id:2,
              name:'Danish',
              data:['Web','DS','Content']
          },
          {
              id:3,
              name:'Hasnain',
              data:['App','JS','Reactnative']
          },
          {
              id:4,
              name:'Hub',
              data:['Java','JS','Python']
          }
        
        ]
  return (
    <View>
    <Text style={{fontSize:20}}>Make section_data with array</Text>
    <SectionList
    sections={users}
    renderItem={({item})=><Text style={{fontSize:15, marginLeft:10}}>{item}</Text>}
    renderSectionHeader={({section:{name}})=>(
        <Text style={{fontSize:20, color:'yellow'}}>{name}</Text>
    )}

    />
     
</View>
   
  )
}

export default Seclists

     
  