import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24,
    },
    title: {
        fontSize: 30,
        marginTop: 36,
    },
    subtitle: {
        fontSize: 14,
        marginTop: 12,
        color: "#666"
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "lightgreen",
        marginTop: 16,

    },
    buttonContainer: {
        backgroundColor: "lightgreen",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        alignSelf: "flex-end",
        marginTop: 8,
    },
    buttonText: {
        fontSize: 18,
    },
    divider: {
        height: 1,
        marginVertical: 16,
    },
    taskContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBlockColor: "lightgray",
        paddingVertical: 12,
    },
    taskText: {
        fontSize: 18,
    },
    taskDelete: {
        width: 23,
        height: 23,
        backgroundColor: 'red',
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    taskDeleteText: {
        color: 'white',
        fontSize: 16,

    },

});