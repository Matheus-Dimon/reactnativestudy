import { Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"

type Props = {
    title: string
    onPress: () => void
}

export function Button({title, ...rest}: Props) {
    return (
        <TouchableOpacity 
            onPress={onPress} 
            activeOpacity={0.8} 
            style={styles.button}>

        <Text style={styles.title}> {title} </Text>
        
        </TouchableOpacity>
    )
}