import { StyleSheet, Text, View } from "react-native"


export default function Index(){

    return (
        <View>
             <Text style={ styles.title }>
                Hello  World
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({

    title:{
    color: "red" ,  
    fontSize: 24 ,
    fontWeight:"bold" ,

    },

})