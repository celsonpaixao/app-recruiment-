import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { COLORS } from "../styles/color_style";

interface GlobalButtonProps {
  title?: string;
  onPress?: () => void;
  variant?: "primary" | "secondary" | "outline" | "transparent";
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const GlobalButton = ({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  icon,
  className,
  children,
  style,
  textStyle,
}: GlobalButtonProps) => {
  const buttonStyle: ViewStyle[] = [
    styles.baseButton,
    variant === "primary" ? styles.primaryButton : null,
    variant === "secondary" ? styles.secondaryButton : null,
    variant === "outline" ? styles.outlineButton : null,
    variant === "transparent" ? styles.transparent : null,
    disabled ? styles.disabledButton : null,
    icon && (title || children) ? styles.withIcon : null,
    style,
  ].filter(Boolean) as ViewStyle[];

  const textStyles: TextStyle[] = [
    styles.baseText,
    variant === "outline" ? styles.outlineText : styles.defaultText,
    textStyle,
  ].filter(Boolean) as TextStyle[];

  return (
    <Pressable
      style={buttonStyle}
      onPress={!disabled ? onPress : undefined}
      disabled={disabled}
    >
      {icon}
      {children ? children : title && <Text style={textStyles}>{title}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    paddingHorizontal: 24,
    paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    gap: 6,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
  },
  transparent: {
    backgroundColor: "transparent",
  },
  secondaryButton: {
    backgroundColor: COLORS.gray[400],
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: COLORS.gray[300],
    backgroundColor: "transparent",
  },
  disabledButton: {
    opacity: 0.5,
  },
  withIcon: {
    gap: 8,
  },
  baseText: {
    fontSize: 18,
    fontFamily: "JakartaBold",
  },
  defaultText: {
    color: COLORS.backgroundLight,
  },
  outlineText: {
    color: COLORS.primary,
  },
});

export default GlobalButton;
