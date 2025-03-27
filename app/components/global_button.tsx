import clsx from "clsx";
import React from "react";
import { Pressable, Text,  } from "react-native";

const GlobalButton = ({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  icon,
  className,
  children,
}: {
  title?: string;
  onPress?: () => void;
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}) => {
  const buttonClasses = clsx(
    "px-6 py-5  flex-row items-center justify-center",
    {
      "bg-primary": variant === "primary",
      "bg-gray-700": variant === "secondary",
      "border border-gray-300 bg-transparent": variant === "outline",
      "opacity-50": disabled,
      "gap-2": icon && (title || children), 
    },
    className
  );

  const textClasses = clsx(
    "text-lg font-jakarta-bold",
    variant === "outline" ? "text-primary" : "text-white"
  );

  return (
    <Pressable
      className={buttonClasses}
      onPress={!disabled ? onPress : undefined}
      disabled={disabled}
    >
      {icon}
      {children
        ? children
        : title && <Text className={textClasses}>{title}</Text>}
    </Pressable>
  );
};

export default GlobalButton;
