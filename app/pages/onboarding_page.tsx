import React, { useRef, useState } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { AppAssetsImages } from "../resources/app_assets_images";
import GlobalButton from "../components/global_button";
import { AntDesign } from "@expo/vector-icons";
import OnboardingContainer from "../components/onboardig_container";
import { AppRoutes } from "../resources/app_routes";
import Typography from "../components/typography";
import useAppNavigation from "../hooks/app_navigation";

const onboardingData = [
  {
    title1: "Otimizar Processos",
    title2: "de Recrutamento",
    description:
      "Gerenciar vagas, avaliar candidatos e preencher cargos com agilidade.",
    image: AppAssetsImages.Onboarding_image1,
  },
  {
    title1: "Alcance os melhores ",
    title2: "Profisionais",
    description:
      "Atraia candidatos selecionados com perfis alinhados às suas necessidades.",
    image: AppAssetsImages.Onboarding_image2,
  },
];

const OnboardingPage = ({ navigation }: any) => {
  const swiperRef = useRef<Swiper>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { goToAuth } = useAppNavigation();

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      swiperRef.current?.scrollBy(1);
    } else {
      goToAuth();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Swiper
        ref={swiperRef}
        loop={false}
        dotColor="#ccc"
        activeDotColor="#000"
        scrollEnabled={false}
        showsPagination={false}
        paginationStyle={styles.pagination}
      >
        {onboardingData.map((item, index) => (
          <OnboardingContainer
            length={onboardingData.length}
            currentIndex={index}
            key={index}
            title1={item.title1}
            title2={item.title2}
            description={item.description}
            image={item.image}
          />
        ))}
      </Swiper>

      <GlobalButton
        variant="primary"
        onPress={handleNext}
        style={styles.button}
      >
        <Typography
          variant="h3-plusjakartasans-medium"
          color="#ffffff"
          style={{ lineHeight: 20 }}
        >
          Continuar
        </Typography>
        <AntDesign
          name="arrowright"
          size={20}
          color="#ffffff"
          style={{ margin: 0, padding: 0 }}
        />
      </GlobalButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    position: "relative",
  },
  pagination: {
    bottom: 50,
  },
  button: {
    position: "absolute",
    bottom: 40,
    left: "25%",
    right: "25%",
    borderRadius: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});

export default OnboardingPage;
