import { Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"

type Props = {
    title: string
}

export function Button({title, ...rest}: Props) {
    return (
        <TouchableOpacity 
            {...rest} 
            activeOpacity={0.8} 
            style={styles.button}>
                
        <Text style={styles.title}> {title} </Text>
        
        </TouchableOpacity>
    )
}