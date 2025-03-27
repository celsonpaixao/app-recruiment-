import React from "react";
import { View, Text } from "react-native";
import Typography from "./typography";
import clsx from "clsx";


const GlobalDivider = ({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) => {
  return (
    <View className={clsx("flex-row items-center w-full", className)}>
      <View className="flex-1 h-[1px] bg-gray-300" />
      {text && (
        <Typography variant="h3-jakarta-medium" className="mx-2 text-gray-500">
          {text}
        </Typography>
      )}
      <View className="flex-1 h-[1px] bg-gray-300" />
    </View>
  );
};

export default GlobalDivider;
