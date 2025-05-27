import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { router } from "expo-router"
import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
type Props = {
    title: string
}

export default function Index() {
    const [name, setName] = useState ("")
    function onChangeText(text: string){
        console.log(text)
        setName(text)
    }

    function handleNext() {
        router.navigate("/dashboard")
    }

    return (
        <View style={styles.container}>
            <Input onChangeText={setName}/>
            <Text style={styles.title}>
                Bem vindo
            </Text>
            <Button title = "continuar" 
                    onPress={handleNext}
                    activeOpacity={0.3}/>
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