import { TextInput, View } from "react-native";
import { styles } from "./styles";
import InputLocProps from "./types";

export default function InputLoc({
    placeholder,
    value,
    onChangeText,
}: InputLocProps){
    
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText} 
            />

        </View>    
    )};