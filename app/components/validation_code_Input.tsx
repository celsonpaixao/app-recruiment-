import React, { forwardRef, useState } from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { COLORS } from "../styles/color_style";

interface ValidationCodeInputProps extends TextInputProps {
  onFilled?: () => void;
  onBackspace?: () => void;
}

const ValidationCodeInput = forwardRef<TextInput, ValidationCodeInputProps>(
  ({ onFilled, onBackspace, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <TextInput
        ref={ref}
        style={[
          styles.input,
          { borderColor: isFocused ? COLORS.primary : COLORS.gray[300] },
        ]}
        keyboardType="numeric"
        maxLength={1}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={(value) => {
          props.onChangeText?.(value);
          if (value && onFilled) onFilled();
        }}
        onKeyPress={({ nativeEvent }) => {
          if (nativeEvent.key === "Backspace" && onBackspace) onBackspace();
        }}
        {...props}
      />
    );
  }
);

const styles = StyleSheet.create({
  input: {
    width: 60,
    height: 60,
    textAlign: "center",
    fontFamily: "PlusJakartaSans-Medium",
    fontSize: 24,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.primary,
    color: COLORS.textPrimary,
  },
});

export default ValidationCodeInput;
