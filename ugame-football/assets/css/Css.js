import { StyleSheet } from "react-native";

const headerSize = 50;

const css = StyleSheet.create({
    container: {
        backgroundColor: "#66BB6A",
        alignItems: 'center',
        padding: headerSize,
        paddingBottom: 30
    },
    logo: {
        width: 60,
        height: 60, 
    }
});

export {css};