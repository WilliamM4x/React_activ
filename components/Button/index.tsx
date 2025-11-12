import {Button, TouchableOpacity, View, Text} from "react-native";
import {ButtonCustomProps} from "./types";
import {styles} from "./styles";

export default function ButtonNative() {
    return (
        <Button title="Clique aqui" />
    )
}

export function ButtonCustom({
    title,
    variant = "PRIMARY",
    onPress

}: ButtonCustomProps) {
    return(
        <TouchableOpacity 
        style={[styles.button, styles[variant]]}
        onPress={onPress}
        >
            
            <Text style={styles.buttonTitle}>{title}</Text>
        </TouchableOpacity>
    )
}