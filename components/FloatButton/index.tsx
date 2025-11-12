import { Pressable } from "react-native";
import {FloatButtonProps} from "./types";
import { MaterialIcons } from "@expo/vector-icons";
import { styles as styled } from "./styles";

const FloatButton = ({
    onPress,
} : FloatButtonProps) => {
    return (
        <Pressable style={styled.conteiner} onPress={onPress}>
            <MaterialIcons name="add" size={24} color={"white"} />
        </Pressable>
    )

}

export default FloatButton;