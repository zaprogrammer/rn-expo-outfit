import {createBox, createText, createTheme, useTheme as useReTheme} from '@shopify/restyle'
import {ImageStyle, TextStyle, ViewStyle} from "react-native";

const palette = {
    primaryCyan: "#2CB9B0",
    primaryLight: "#E7F9F7",
    secondaryBlue: "#0C0D34",
    textBody: "rgba(12, 13, 52, 0.5)",
    textHero: "rgba(255, 255, 255, 1)",
    lightGrey: "#F4F0EF",
    grey: "#F4F0EF",
    white: "white",
    red: "#FF0000",
    danger: "#FF0058",

};


export const theme = createTheme({
    colors: {
        primary: palette.primaryCyan,
        primaryLight: palette.primaryLight,
        secondary: palette.secondaryBlue,
        body: palette.textBody,
        hero: palette.textHero,
        grey: palette.grey,
        slideBg: palette.lightGrey,
        white: palette.white,
        danger: palette.danger,
        red: palette.red,

    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    borderRadii: {
        zero: 0,
        s: 4,
        m: 10,
        l: 25,
        xl: 75,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
    textVariants: {
        hero: {
            fontSize: 80,
            fontFamily: "SFProDisplay-Bold",
            color: 'hero',
            textAlign: "center",
            lineHeight: 80,
        },
        title1: {
            fontSize: 28,
            fontFamily: "SFProDisplay-Semibold",
            color: 'secondary',
            fontWeight: "bold",
        },
        title2: {
            fontSize: 24,
            fontFamily: "SFProDisplay-Semibold",
            color: 'secondary',
            lineHeight: 30,
        },
        body: {
            fontSize: 16,
            fontFamily: "SFProDisplay-Regular",
            lineHeight: 24,
            color: 'body',
            fontWeight: "normal",
        },
        button: {
            fontSize: 15,
            fontFamily: "SFProDisplay-Medium",
            textAlign: "center",
        },
    }
});

export type Theme = typeof theme;
export const useTheme = () => useReTheme<Theme>();
// export default theme;

export const Text = createText<Theme>();
export const Box = createBox<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
export const makeStyle = <T extends NamedStyles<T>>(
    styles: (theme: Theme) => T
) => () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
}


