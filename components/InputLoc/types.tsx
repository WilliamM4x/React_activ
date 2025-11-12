export default interface InputSearchProps{
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    onClickClear: () => void;
}