import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
  ImageBackground,
} from "react-native";
import GlobalButton from "./global_button";
import { AppAssetsImages } from "../resources/app_assets_images";
import Typography from "./typography";

const OnboardingContainer = ({
  title1,
  title2,
  description,
  image,
  length,
  currentIndex,
}: {
  title1: string;
  title2: string;
  description: string;
  image: ImageSourcePropType;
  length: number;
  currentIndex: number; 
}) => {
  return (
    <View className="w-full h-screen flex-1 px-[30px] mt-[20vw] gap-2 relative">
      <Typography
        variant="h1-jakarta-regular"
        className="text-black leading-none"
      >
        {title1}
      </Typography>
      <ImageBackground
        source={AppAssetsImages.Shapa_text1}
        resizeMode="stretch"
      >
        <Typography
          variant="h1-jakarta-bold"
          className="text-black leading-none"
        >
          {title2}
        </Typography>
      </ImageBackground>

      <Typography
        variant="p-jakarta-regular"
        className="text-gray_description leading-1"
      >
        {description}
      </Typography>
      <View className="flex-row gap-2 mt-[10px]">
        {Array.from({ length }).map((_, index) => (
          <View
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-primary w-[30px]"
                : "bg-primary opacity-[50%]"
            }`}
          />
        ))}
      </View>
      <View className="absolute w-[30rem] h-[35rem] bg-primary rounded-[60px] -rotate-6 bottom-[100px] left-1/1 translate-x-[35px]"></View>
      <Image
        source={image}
        className="absolute bottom-[3.5rem] left-1/1 translate-x-[35px] scale-[1.2]"
      />
    </View>
  );
};

export default OnboardingContainer;
