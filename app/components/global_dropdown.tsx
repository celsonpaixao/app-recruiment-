import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ViewStyle,
  DimensionValue,
} from "react-native";
import { COLORS } from "../styles/color_style";
import { AntDesign } from "@expo/vector-icons";
import Typography from "./typography";

interface GlobalDropdownProps {
  label?: string;
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
  error?: string;
  placeholder?: string;
  width?: DimensionValue;
  width_drop?: DimensionValue;
}

const GlobalDropdown: React.FC<GlobalDropdownProps> = ({
  label,
  options,
  selectedValue,
  onSelect,
  placeholder,
  width = "100%",
  width_drop,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={[styles.container, { width }]}>
      {label && (
        <Typography variant="p-plusjakartasans-medium" style={styles.label}>
          {label}
        </Typography>
      )}

      <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
        <Typography
          variant="p-plusjakartasans-regular"
          style={selectedValue ? styles.selectedText : styles.placeholder}
        >
          {selectedValue || placeholder}
        </Typography>

        <AntDesign
          name={isOpen ? "up" : "down"}
          size={16}
          color={COLORS.gray[500]}
        />
      </TouchableOpacity>

      {isOpen && (
        <View
          style={{
            position: "absolute",
            top: 60,
            backgroundColor: COLORS.backgroundLight,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: COLORS.gray[300],
            zIndex: 1000,
            maxHeight: 150,
            width: width_drop,
          }}
        >
          <FlatList
            data={options}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => {
                  onSelect(item);
                  setIsOpen(false);
                }}
              >
                <Typography
                  variant="button-plusjakartasans-regular"
                  style={styles.label}
                >
                  {item}
                </Typography>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    color: COLORS.gray[800],
    marginBottom: 6,
  },
  dropdown: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.gray[300],
    borderRadius: 12,
    backgroundColor: COLORS.backgroundLight,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  selectedText: {
    fontSize: 16,
    color: COLORS.gray[800],
  },
  placeholder: {
    fontWeight: "100",
    fontSize: 16,
    color: COLORS.gray[400],
  },

  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[200],
  },
  optionText: {
    fontSize: 16,
    color: COLORS.gray[600],
  },
});

export default GlobalDropdown;
