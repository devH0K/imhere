import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 8
    },
    name: {
        flex: 1,
        fontSize: 16,
        color: '#FFF',
        marginLeft: 16
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#FFFBFA',
        backgroundColor: "#E23C44",
        alignItems: 'center',
        justifyContent: 'center'
    },
});