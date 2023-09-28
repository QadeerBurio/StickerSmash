import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, Button } from 'react-native'

const UseEComDmount = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(100);

    // useEffect(()=>{
    //     console.warn(" Call Some Animation")
    // }, [count])
    // useEffect(()=>{
    //     console.warn(" call some api")
    // }, [data])

    return (
        <View>
            <Text style={{ fontSize: 15, color: 'red', paddingLeft: 15 }}>{data}_UseEffect As Component DidMount_{count}</Text>
            <Button title='Update_Count' onPress={() => setCount(count + 1)} />
            <Button title='Update_Data' onPress={() => setData(data + 1)} />
            <User info={{ data, count }} />
        </View>
    )
}

const User = (props) => {
    useEffect(() => {
        console.warn("run this code when data is pass through props")
    }, [props.info.data])
    useEffect(() => {
        console.warn("run this code when count is pass through props")
    }, [props.info.count])
    return (
        <View>
            <Text style={{ fontSize: 15, color: 'red', paddingLeft: 15 }}>Data:{props.info.data}</Text>
            <Text style={{ fontSize: 15, color: 'red', paddingLeft: 15 }}>Count:{props.info.count}</Text>


        </View>
    )
}

export default UseEComDmount
