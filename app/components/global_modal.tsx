import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Modal, Portal, Text, Button } from "react-native-paper";
import { useModalStore } from "../stores/modalStore";
import { COLORS } from "../styles/color_style";

const GlobalModal = () => {
  const { visible, message, type, hideModal } = useModalStore();

  const backgroundColors = {
    success: COLORS.success,
    error: COLORS.error,
    alert: COLORS.warning,
    info: COLORS.primary,
  };

  const textColors = {
    success: "#FFFFFF",
    error: "#FFFFFF",
    alert: "#FFFFFF",
    info: "#FFFFFF",
  };

  useEffect(() => {
    // Close the modal automatically after 3.5 seconds
    if (visible) {
      setTimeout(() => {
        hideModal();
      }, 3500);
    }
  }, [visible]);

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modalContainer}
      >
        <View
          style={[
            styles.modalContent,
            { backgroundColor: backgroundColors[type] },
          ]}
        >
          <Text style={{ color: textColors[type], fontSize: 18 }}>
            {message}
          </Text>
          <Button mode="contained" onPress={hideModal}>
            Fechar
          </Button>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  modalContent: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
});

export default GlobalModal;
