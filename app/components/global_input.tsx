import React, { forwardRef, useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Typography from "./typography";
import { FONT_FAMILY } from "../resources/app_fonts";
import { COLORS } from "../styles/color_style";

type WidthProp = number | `${number}%` | "auto";
type IconName = keyof typeof MaterialIcons.glyphMap;

interface GlobalInputProps extends TextInputProps {
  label?: string;
  iconLeft?: IconName;
  iconRight?: IconName;
  error?: string;
  containerWidth?: WidthProp;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  showCharacterCount?: boolean;
}

const GlobalInput = forwardRef<TextInput, GlobalInputProps>(
  (
    {
      label,
      placeholder,
      value,
      onChangeText,
      iconLeft,
      iconRight,
      secureTextEntry = false,
      error,
      keyboardType = "default",
      maxLength,
      textAlign = "left",
      containerWidth = "100%",
      containerStyle,
      inputStyle,
      showCharacterCount = false,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isSecureText, setIsSecureText] = useState(secureTextEntry);

    const toggleSecureText = () => setIsSecureText(!isSecureText);

    const containerStyles = [
      styles.container,
      { width: containerWidth },
      containerStyle,
    ];

    const inputContainerStyles = [
      styles.inputContainer,
      error
        ? styles.errorBorder
        : isFocused
        ? styles.focusedBorder
        : styles.defaultBorder,
    ];

    const characterCount =
      maxLength && value ? `${value.length}/${maxLength}` : null;

    return (
      <View style={containerStyles}>
        {label && (
          <Typography variant="p-plusjakartasans-regular" style={styles.label}>
            {label}
          </Typography>
        )}

        <View style={inputContainerStyles}>
          {iconLeft && (
            <MaterialIcons
              name={iconLeft}
              size={24}
              color={isFocused ? COLORS.primary : COLORS.gray[500]}
              style={styles.icon}
            />
          )}

          <TextInput
            ref={ref}
            style={[
              styles.textInput,
              inputStyle,
              { textAlign },
              !iconLeft && { marginLeft: 0 },
              !iconRight && { marginRight: 0 },
            ]}
            placeholder={placeholder}
            placeholderTextColor={COLORS.gray[600]}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={isSecureText}
            keyboardType={keyboardType}
            maxLength={maxLength}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            selectionColor={COLORS.primary}
            {...props}
          />

          {secureTextEntry ? (
            <MaterialIcons
              name={isSecureText ? "visibility-off" : "visibility"}
              size={20}
              color={COLORS.gray[400]}
              onPress={toggleSecureText}
              style={styles.icon}
            />
          ) : iconRight ? (
            <MaterialIcons
              name={iconRight}
              size={24}
              color={isFocused ? COLORS.primary : COLORS.gray[500]}
              style={styles.icon}
            />
          ) : null}
        </View>

        <View style={styles.footer}>
          {error && (
            <Typography
              variant="caption-plusjakartasans-light"
              style={styles.errorText}
            >
              {error}
            </Typography>
          )}
          {showCharacterCount && characterCount && (
            <Typography
              variant="caption-plusjakartasans-light"
              style={styles.characterCount}
            >
              {characterCount}
            </Typography>
          )}
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {},
  label: {
    color: COLORS.gray[900],
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: COLORS.backgroundLight,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    height: 65,
  },

  defaultBorder: {
    borderColor: COLORS.gray[300],
  },
  focusedBorder: {
    borderColor: COLORS.primary,
  },
  errorBorder: {
    borderColor: COLORS.error,
  },
  textInput: {
    flex: 1,
    marginHorizontal: 12,
    color: COLORS.gray[900],
    fontSize: 16,
    fontFamily: "PlusJakartaSans-Regular",
  
  },
  icon: {
    marginHorizontal: 4,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  errorText: {
    color: COLORS.error,
    flex: 1,
  },
  characterCount: {
    color: COLORS.gray[500],
    textAlign: "right",
  },
});

export default GlobalInput;
