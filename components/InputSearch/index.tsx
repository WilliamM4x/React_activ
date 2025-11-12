import InputSearchProps from "@/components/InputSearch/types";
import { Feather } from "@expo/vector-icons";
import { Pressable, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function InputSearch({
    placeholder,
    value,
    onChangeText,
    onClickClear,
}: InputSearchProps){

    const isClearVisible = value && value.length > 0;

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText} 
            />

            {isClearVisible && (
                <Pressable 
                    onPress={onClickClear}
                    style={styles.clearButton}

                >
                    <Feather name="x-circle" size={20} color="gray" />
                </Pressable>
            )}

        </View>    
    )};