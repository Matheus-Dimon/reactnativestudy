import { Button } from "@/components/button"
import { Alert, StyleSheet, Text, View } from "react-native"



export default function Index(){
    function handleMessage() {
        const name = "Rodrigo"
        Alert.alert('Ola, ${name}')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello  World</Text>
            <Button/>
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