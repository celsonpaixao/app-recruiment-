import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { AppAssetsImages } from "../resources/app_assets_images";
import GlobalLayoutPage from "../layouts/global_layout_page";
import { StatusBar } from "expo-status-bar";
import Typography from "../components/typography";
import GlobalButton from "../components/global_button";
import useAppNavigation from "../hooks/app_navigation";
import { COLORS } from "../styles/color_style";

const SucessRegisterAccoutPage = () => {
  const { goResetInterpriseData } = useAppNavigation();
  return (
    <GlobalLayoutPage>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image source={AppAssetsImages.sucess_register} style={styles.image} />
        <Typography variant="h2-plusjakartasans-semiBold" style={styles.title}>
          Conta criada com sucesso!
        </Typography>
        <Typography variant="p-plusjakartasans-regular" style={styles.subtitle}>
          Para concluir o processo, é necessário adicionar as informações da
          empresa.
        </Typography>

        <GlobalButton onPress={goResetInterpriseData} style={{ width: "100%" }}>
          <Typography
            variant="h3-plusjakartasans-medium"
            style={styles.buttonText}
          >
            Concluir o processo
          </Typography>
        </GlobalButton>
      </View>
    </GlobalLayoutPage>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  title: {
    color: COLORS.primary,
    textAlign: "center",
  },
  subtitle: {
    color: "#6b7280",
    textAlign: "center",
  },
  button: {
    width: "90%",
    borderRadius: 13,
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
});

export default SucessRegisterAccoutPage;
