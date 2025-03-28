import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

interface GlobalIconsProps {
  name: keyof typeof MaterialIcons.glyphMap;
  size?: number;
  color?: string;
}

const GlobalIcons: React.FC<GlobalIconsProps> = ({
  name,
  size = 24,
  color = "black",
}) => {
  return <MaterialIcons name={name} size={size} color={color} />;
};

export default GlobalIcons;
