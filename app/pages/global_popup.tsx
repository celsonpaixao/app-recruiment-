import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const typeStyles = {
  alert: {
    icon: "warning" as const,
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800",
    borderColor: "border-yellow-500",
  },
  success: {
    icon: "done" as const,
    bgColor: "bg-green-100",
    textColor: "text-green-800",
    borderColor: "border-green-500",
  },
  error: {
    icon: "error" as const,
    bgColor: "bg-red-100",
    textColor: "text-red-800",
    borderColor: "border-red-500",
  },
};

const GlobalPopup = ({
  visible,
  onClose,
  title,
  description,
  type = "alert",
}: {
  visible: boolean;
  onClose: () => void;
  title: string;
  description: string;
  type?: "alert" | "success" | "error";
}) => {
  const styles = typeStyles[type];

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View className="flex-1 justify-center items-center bg-black/50">
        <View
          className={`w-80 p-6 rounded-lg shadow-lg border ${styles.bgColor} ${styles.borderColor}`}
        >
          <View className="flex flex-row items-center gap-3 mb-3">
            <MaterialIcons
              name={styles.icon}
              size={30}
              className={styles.textColor}
            />
            <Text className={`text-lg font-bold ${styles.textColor}`}>
              {title}
            </Text>
          </View>
          <Text className="text-gray-700 mb-4">{description}</Text>

          <TouchableOpacity
            onPress={onClose}
            className="px-4 py-2 bg-primary rounded-lg mt-3"
          >
            <Text className="text-white font-semibold text-center">Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GlobalPopup;
