import { TextStyle } from "react-native";

export type FontFamily = "Inter" | "PlusJakartaSans";
export type FontWeight =
    | "thin"
    | "extraLight"
    | "light"
    | "regular"
    | "medium"
    | "semiBold"
    | "bold"
    | "extraBold"
    | "black";
export type TextSize =
    | "h1"
    | "h2"
    | "h3"
    | "p"
    | "button"
    | "caption"
    | "subtitle"
    | "overline";

export type TypographyVariant = `${TextSize}-${Lowercase<FontFamily>}-${FontWeight}`;

const FONT_CONFIG = {
    size: {
        h1: 32,
        h2: 20,
        h3: 18,
        p: 16,
        button: 14,
        caption: 12,
        subtitle: 18,
        overline: 10,
    },
    color: {
        h1: "#111827",
        h2: "#111827",
        h3: "#111827",
        p: "#111827",
        button: "#111827",
        caption: "#4b5563",
        subtitle: "#4b5563",
        overline: "#6b7280",
    },
};

const getFontFamily = (font: FontFamily, weight: FontWeight): string => {
    const fontMap: Record<FontFamily, Record<FontWeight, string>> = {
        Inter: {
            thin: "Inter-Thin",
            extraLight: "Inter-ExtraLight",
            light: "Inter-Light",
            regular: "Inter-Regular",
            medium: "Inter-Medium",
            semiBold: "Inter-SemiBold",
            bold: "Inter-Bold",
            extraBold: "Inter-ExtraBold",
            black: "Inter-Black",
        },
        PlusJakartaSans: {
            thin: "PlusJakartaSans-ExtraLight",
            extraLight: "PlusJakartaSans-ExtraLight",
            light: "PlusJakartaSans-Light",
            regular: "PlusJakartaSans-Regular",
            medium: "PlusJakartaSans-Medium",
            semiBold: "PlusJakartaSans-SemiBold",
            bold: "PlusJakartaSans-Bold",
            extraBold: "PlusJakartaSans-ExtraBold",
            black: "PlusJakartaSans-ExtraBold", // Jakarta não tem Black, então usa ExtraBold
        },
    };

    return fontMap[font][weight];
};

const generateVariantStyles = (): Record<TypographyVariant, TextStyle> => {
    const variants = {} as Record<TypographyVariant, TextStyle>;

    (["h1", "h2", "h3", "p", "button", "caption", "subtitle", "overline"] as const)
        .forEach((size) => {
            (["Inter", "PlusJakartaSans"] as const).forEach((font) => {
                ([
                    "thin",
                    "extraLight",
                    "light",
                    "regular",
                    "medium",
                    "semiBold",
                    "bold",
                    "extraBold",
                    "black",
                ] as const).forEach((weight) => {
                    const variant =
                        `${size}-${font.toLowerCase()}-${weight}` as TypographyVariant;

                    variants[variant] = {
                        fontSize: FONT_CONFIG.size[size],
                        fontFamily: getFontFamily(font, weight),
                        color: FONT_CONFIG.color[size],
                    };
                });
            });
        });

    return variants;
};

export const textStyles = generateVariantStyles();
