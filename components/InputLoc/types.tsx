import { KeyboardTypeOptions } from "react-native";

export default interface InputSearchProps{
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: KeyboardTypeOptions;
}