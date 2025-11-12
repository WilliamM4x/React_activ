import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
        color:'white',
        height: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007bff',
    },

    buttonTitle:{
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
    },
    PRIMARY:{
        backgroundColor: '#00ff2aff',
    },
    SECONDARY:{
        backgroundColor: '#ff5733',
    },
    DEFAULT:{
        backgroundColor: '#007bff',
    }
});