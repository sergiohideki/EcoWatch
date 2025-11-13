// front-end/src/styles/globalStyles.ts
import { StyleSheet } from "react-native";

export const theme = {
    colors: {
        background: "#e6f0ff",
        primary: "#007AFF",
        text: "#000",
        white: "#fff",
        error: "red",
    },
    spacing: {
        sm: 8,
        md: 15,
        lg: 20,
    },
    fontSize: {
        sm: 14,
        md: 18,
        lg: 24,
    },
};

export const globalStyles = StyleSheet.create({

    container: {
        flex: 1,
        padding: theme.spacing.lg,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background,
    },
    title: {
        fontSize: theme.fontSize.lg,
        fontWeight: "bold",
        marginBottom: theme.spacing.lg,
    },
    input: {
        width: "80%",
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: theme.colors.white,
        marginBottom: theme.spacing.md,
    },
    button: {
        backgroundColor: theme.colors.primary,
        padding: 12,
        borderRadius: 8,
        width: "80%",
        alignItems: "center",
    },
    buttonText: {
        color: theme.colors.white,
        fontWeight: "bold",
    },
    errorText: {
        color: theme.colors.error,
        marginTop: theme.spacing.lg,
    },
    weatherContainer: {
        marginTop: 30,
        alignItems: "center",
    },
    weatherText: {
        fontSize: theme.fontSize.md,
        marginTop: 8,
    },
    weatherTitle: {
        fontSize: 22,
        fontWeight: "700",
        color: "#222",
        marginBottom: 8,
        textAlign: "center",
    },

});
