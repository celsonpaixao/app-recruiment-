import React, { useRef, useState } from "react";
import { View, StatusBar, Text } from "react-native";
import Swiper from "react-native-swiper";
import { AppAssetsImages } from "../resources/app_assets_images";
import GlobalButton from "../components/global_button";
import { AntDesign } from "@expo/vector-icons";
import OnboardingContainer from "../components/onboardig_container";
import { AppRoutes } from "../resources/app_routes";
import Typography from "../components/typography";

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

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      swiperRef.current?.scrollBy(1);
    } else {
      navigation.replace(AppRoutes.AUTH);
    }
  };

  return (
    <View className="w-full h-screen flex-1">
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
        paginationStyle={{ bottom: 50 }}
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
        className="absolute bottom-10 left-[25vw] right-[25vw] gap-2 rounded-[30px]"
      >
        <Typography
          variant="h3-jakarta-medium"
          className="leading-none text-white  text-[18px]"
        >
          {" "}
          Continuar
        </Typography>

        <AntDesign name="arrowright" size={20} color="white" />
      </GlobalButton>
    </View>
  );
};

export default OnboardingPage;
