import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [display, setDisplay] = useState('')

    const resetFormData=()=>{
        setDisplay('')
        setName('')
        setEmail('')
        setPassword('')
    }


    return (
        
        <View>
            <Text style={{ fontSize: 18, color: 'blue', backgroundColor: 'wheat', fontStyle: 'italic', alignItems:'center', textAlign:'center', marginBottom:10 }}>Admission Form</Text>
            <TextInput
                style={styles.box}
                placeholder='Enter Your Name'
                onChangeText={(text) => setName(text)}
                value={name} />

            <TextInput
                style={styles.box}
                placeholder='Enter Your Email'
                onChangeText={(text) => setEmail(text)}
                value={email} />

            <TextInput
                style={styles.box}
                placeholder='Enter Your Password'
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true} />

                

            <View style={{ marginBottom: 10 }}>

                <Button color={'green'} title='Print Details' onPress={()=>setDisplay(true)} />



            </View>
            <Button color={'green'} title='Clear Details' onPress={resetFormData} />
            <View>
                {
                    display ?
                    <View>
                    <Text style={{fontSize:15}}>The User Name is:{name} </Text>
                    <Text style={{fontSize:15}}>The User Email is:{email} </Text>
                    <Text style={{fontSize:15}}>The User Password is:{password} </Text>
                    
                    </View>:null
                }
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    box: {
        color: 'wheat',
        fontSize: 20,
        backgroundColor: 'grey',
        marginBottom: 10,
        borderRadius: 8,
        textAlignVertical: 'center',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'yellow',
        height: 50
    }
})



export default Form
