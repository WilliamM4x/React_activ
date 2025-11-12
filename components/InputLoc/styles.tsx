import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 8,
        paddingHorizontal: 10,
        width: "100%",
    },
    input:{
        flex: 1,
        height: 40,
        paddingHorizontal: 8,
    },
    clearButton: {
        padding: 4, 
        justifyContent: "center",
        alignItems: "center",

    }
});