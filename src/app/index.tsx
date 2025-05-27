import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Alert, StyleSheet, Text, View } from "react-native"
type Props = {
    title: string
}

export default function Index(){
    function handleMessage() {
        const name = "Rodrigo"
        Alert.alert('Ola, ${name}')
    }
    return (
        <View style={styles.container}>
            <Input onChangeText={(text) => console.log(text)}/>
            <Text style={styles.title}>
                Hello  World
            </Text>
            <Button title = "entrar"/>
            <Button title = "sair"/>
            <Button title = {""}/>
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