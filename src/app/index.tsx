import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { useState } from "react"
import { Alert, StyleSheet, Text, View } from "react-native"
type Props = {
    title: string
}

export default function Index() {
    const [name, setName] = useState<string> ()

    function onChangeText(text: string){
        console.log(text)
        setName(text)
    }

    function handleMessage() {
        const name = "Rodrigo"
        Alert.alert('Ola, ${name}')
    }
    return (
        <View style={styles.container}>
            <Input onChangeText={setName}/>
            <Text style={styles.title}>
                Bem vindo
            </Text>
            <Button title = "continuar"/>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex:  1,
        padding: 32,
        justifyContent: "center" ,
    },
    title:{
        color: "red" ,  
        fontSize: 24 ,
        fontWeight: "bold" ,

    },

})