import React from "react";
import { Text, Pressable, TextStyle } from "react-native";
import { textStyles, TypographyVariant } from "../styles/text_styles";

interface TypographyProps {
  variant: TypographyVariant;
  color?: string;
  children: React.ReactNode;
  onPress?: () => void;
  style?: TextStyle;
  numberOfLines?: number;
  ellipsizeMode?: "head" | "middle" | "tail" | "clip";
  testID?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  color,
  onPress,
  children,
  style,
  numberOfLines,
  ellipsizeMode,
  testID,
}) => {
  const textStyle = [textStyles[variant], color ? { color } : null, style];

  const textElement = (
    <Text
      style={textStyle}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      testID={testID}
    >
      {children}
    </Text>
  );

  if (!onPress) return textElement;

  return (
    <Pressable onPress={onPress}>
      {({ pressed }) =>
        React.cloneElement(textElement, {
          style: [...textStyle, pressed && { opacity: 0.7 }],
        })
      }
    </Pressable>
  );
};

export default Typography;
