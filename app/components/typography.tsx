import { Text, TouchableOpacity, TextStyle, Pressable } from "react-native";
import React, { ReactNode } from "react";
import clsx from "clsx";

// Tipos de variantes disponíveis
const fontFamilies = {
  jakarta: "jakarta",
  inter: "inter",
};

const fontWeights = {
  light: "light",
  regular: "regular",
  medium: "medium",
  bold: "bold",
  extrabold: "extrabold",
};

type FontFamily = keyof typeof fontFamilies;
type FontWeight = keyof typeof fontWeights;

type TypographyProps = {
  variant:
    | "h1-jakarta-light"
    | "h1-jakarta-regular"
    | "h1-jakarta-medium"
    | "h1-jakarta-bold"
    | "h1-jakarta-extrabold"
    | "h1-inter-light"
    | "h1-inter-regular"
    | "h1-inter-medium"
    | "h1-inter-bold"
    | "h1-inter-extrabold"
    | "h2-jakarta-light"
    | "h2-jakarta-regular"
    | "h2-jakarta-medium"
    | "h2-jakarta-bold"
    | "h2-jakarta-extrabold"
    | "h2-inter-light"
    | "h2-inter-regular"
    | "h2-inter-medium"
    | "h2-inter-bold"
    | "h2-inter-extrabold"
    | "h3-jakarta-light"
    | "h3-jakarta-regular"
    | "h3-jakarta-medium"
    | "h3-jakarta-bold"
    | "h3-inter-light"
    | "h3-inter-regular"
    | "h3-inter-medium"
    | "h3-inter-bold"
    | "h3-inter-extrabold"
    | "p-jakarta-light"
    | "p-jakarta-regular"
    | "p-jakarta-medium"
    | "p-jakarta-bold"
    | "p-inter-light"
    | "p-inter-regular"
    | "p-inter-medium"
    | "p-inter-bold"
    | "p-inter-extrabold"
    | "button-jakarta-bold"
    | "caption-jakarta-light"
    | "subtitle-jakarta-regular"
    | "overline-inter-extrabold";

  color?: string;
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
};

const variantStyles: Record<TypographyProps["variant"], string> = {
  "h1-jakarta-light": "text-[32px] font-jakarta-light text-gray-900",
  "h1-jakarta-regular": "text-[32px] font-jakarta-regular text-gray-900",
  "h1-jakarta-medium": "text-[32px] font-jakarta-medium text-gray-900",
  "h1-jakarta-bold": "text-[32px] font-jakarta-bold text-gray-900",
  "h1-jakarta-extrabold": "text-[32px] font-jakarta-extrabold text-gray-900",
  "h1-inter-light": "text-[32px] font-inter-light text-gray-900",
  "h1-inter-regular": "text-[32px] font-inter-regular text-gray-900",
  "h1-inter-medium": "text-[32px] font-inter-medium text-gray-900",
  "h1-inter-bold": "text-[32px] font-inter-bold text-gray-900",
  "h1-inter-extrabold": "text-[32px] font-inter-extrabold text-gray-900",

  "h2-jakarta-light": "text-xl font-jakarta-light text-gray-900",
  "h2-jakarta-regular": "text-xl font-jakarta-regular text-gray-900",
  "h2-jakarta-medium": "text-xl font-jakarta-medium text-gray-900",
  "h2-jakarta-bold": "text-xl font-jakarta-bold text-gray-900",
  "h2-jakarta-extrabold": "text-xl font-jakarta-extrabold text-gray-900",
  "h2-inter-light": "text-xl font-inter-light text-gray-900",
  "h2-inter-regular": "text-xl font-inter-regular text-gray-900",
  "h2-inter-medium": "text-xl font-inter-medium text-gray-900",
  "h2-inter-bold": "text-xl font-inter-bold text-gray-900",
  "h2-inter-extrabold": "text-xl font-inter-extrabold text-gray-900",

  "h3-jakarta-light": "text-lg font-jakarta-light text-gray-900",
  "h3-jakarta-regular": "text-lg font-jakarta-regular text-gray-900",
  "h3-jakarta-medium": "text-lg font-jakarta-medium text-gray-900",
  "h3-jakarta-bold": "text-lg font-jakarta-bold text-gray-900",
  "h3-inter-light": "text-lg font-inter-light text-gray-900",
  "h3-inter-regular": "text-lg font-inter-regular text-gray-900",
  "h3-inter-medium": "text-lg font-inter-medium text-gray-900",
  "h3-inter-bold": "text-lg font-inter-bold text-gray-900",
  "h3-inter-extrabold": "text-lg font-inter-extrabold text-gray-900",

  "p-jakarta-light": "text-base font-jakarta-light text-gray-900",
  "p-jakarta-regular": "text-base font-jakarta-regular text-gray-900",
  "p-jakarta-medium": "text-base font-jakarta-medium text-gray-900",
  "p-jakarta-bold": "text-base font-jakarta-bold text-gray-900",
  "p-inter-light": "text-base font-inter-light text-gray-900",
  "p-inter-regular": "text-base font-inter-regular text-gray-900",
  "p-inter-medium": "text-base font-inter-medium text-gray-900",
  "p-inter-bold": "text-base font-inter-bold text-gray-900",
  "p-inter-extrabold": "text-base font-inter-extrabold text-gray-900",

  "button-jakarta-bold": "text-sm font-jakarta-bold text-gray-900",
  "caption-jakarta-light": "text-xs font-jakarta-light text-gray-700",
  "subtitle-jakarta-regular": "text-lg font-jakarta-regular text-gray-700",
  "overline-inter-extrabold":
    "text-[10px] uppercase font-inter-extrabold text-gray-500",
};

const Typography: React.FC<TypographyProps> = ({
  variant,
  color,
  onPress,
  children,
  className,
}) => {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <Text
          className={clsx(variantStyles[variant], className)}
          style={color ? ({ color } as TextStyle) : undefined}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
};
export default Typography;
