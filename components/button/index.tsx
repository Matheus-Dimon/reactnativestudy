import { Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"

export function Button() {
    return (
        <TouchableOpacity style={styles.Button}>
            <Text style={styles.title}> Clique aqui </Text>
        </TouchableOpacity>
    )
}