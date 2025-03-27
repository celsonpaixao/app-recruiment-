import React, { forwardRef, useState } from "react";
import { TextInput, View, Text, TextInputProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Typography from "./typography";

interface GlobalInputProps extends TextInputProps {
  label?: string;
  iconLeft?: keyof typeof MaterialIcons.glyphMap;
  iconRight?: keyof typeof MaterialIcons.glyphMap;
  error?: string;
  containerWidth?: string | number; // Permite definir a largura do container
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
      containerWidth = "w-full",
      className,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <View className={`${containerWidth}`}>
        {label && (
          <Typography
            variant="h3-jakarta-medium"
            className="text-gray-800 text-base mb-1"
          >
            {label}
          </Typography>
        )}

        <View
          className={`
            flex-row items-center rounded-[14px] bg-white px-3 py-2 
            ${
              error
                ? "border border-red-500"
                : isFocused
                ? "border border-blue-500"
                : "border border-gray-300"
            }
            ${className}
          `}
        >
          {iconLeft && (
            <MaterialIcons name={iconLeft} size={24} color="#9CA4AB" />
          )}

          <TextInput
            ref={ref}
            className="flex-1 ml-2 text-gray-800 text-[16px] font-jakarta-medium "
            placeholder={placeholder}
            placeholderTextColor="#9CA4AB"
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            maxLength={maxLength}
            textAlign={textAlign}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />

          {iconRight && (
            <MaterialIcons name={iconRight} size={24} color="#9CA4AB" />
          )}
        </View>

        {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
      </View>
    );
  }
);

export default GlobalInput;
