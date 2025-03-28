import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AuthLayoutPage from "../layouts/auth_layout_page";
import GlobalInput from "../components/global_input";
import Typography from "../components/typography";
import GlobalButton from "../components/global_button";
import GlobalDropdown from "../components/global_dropdown";
import { COLORS } from "../styles/color_style";

const InterpriseRegisterDataPage = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <AuthLayoutPage>
      <View style={styles.container}>
        <Typography variant="h2-plusjakartasans-bold" style={styles.title}>
          Informações da empresa
        </Typography>

        <GlobalInput label="CEO da empresa" placeholder="Inserir nome do CEO" />

        <GlobalInput
          label="Director de RH"
          placeholder="Inserir nome do director de RH"
        />
        <Typography
          variant="h3-plusjakartasans-regular"
          style={{
            color: COLORS.gray[900],
          }}
        >
          Informações da empresa
        </Typography>
        <View style={styles.rowContainer}>
          <GlobalDropdown
            options={options}
            width={"45%"}
            width_drop={180}
            selectedValue={selectedValue}
            onSelect={handleSelect}
            placeholder="Tipologia"
            error={selectedValue === "" ? "Tipologia" : undefined}
          />
          <GlobalDropdown
            options={options}
            width={"45%"}
            width_drop={180}
            selectedValue={selectedValue}
            placeholder="Setor"
            onSelect={handleSelect}
            error={selectedValue === "" ? "Setor" : undefined}
          />
        </View>
        <View style={styles.rowContainer}>
          <GlobalInput
            label="N° Funcionários"
            placeholder="12"
            keyboardType="numeric"
            containerWidth={"45%"}
          />

          <GlobalInput
            label="NIF da empresa"
            placeholder="005965679LA040"
            keyboardType="numeric"
            containerWidth={"50%"}
          />
        </View>

        <View style={styles.rowContainer}>
          <GlobalInput
            label="Contacto 1"
            placeholder="940912822"
            keyboardType="numeric"
            containerWidth={"45%"}
          />

          <GlobalInput
            label="Contacto 2"
            placeholder="9409128220"
            keyboardType="numeric"
            containerWidth={"45%"}
          />
        </View>

        <GlobalButton style={styles.button}>
          <Typography
            variant="h3-plusjakartasans-medium"
            style={styles.buttonText}
          >
            Informações da empresa
          </Typography>
        </GlobalButton>
      </View>
    </AuthLayoutPage>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    paddingTop: 32,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 16,
  },
  title: {
    color: COLORS.primary,
    textAlign: "center",
    width: "100%",
  },
  rowContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  button: {
    marginTop: 20,
    width: "100%",
  },
  buttonText: {
    color: COLORS.backgroundLight,
  },
});

export default InterpriseRegisterDataPage;
