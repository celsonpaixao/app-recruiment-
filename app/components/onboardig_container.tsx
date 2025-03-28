import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
  ImageBackground,
} from "react-native";
import Typography from "./typography";
import { AppAssetsImages } from "../resources/app_assets_images";

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
    <View style={styles.container}>
      <Typography variant="h1-plusjakartasans-medium" color="#000000">
        {title1}
      </Typography>
      <ImageBackground
        source={AppAssetsImages.Shapa_text1}
        resizeMode="stretch"
        style={styles.imageBackground}
      >
        <Typography
          variant="h1-plusjakartasans-semiBold"
          color="#000000"
          style={{ fontWeight: "bold", fontFamily: "Jakarta" }}
        >
          {title2}
        </Typography>
      </ImageBackground>

      <Typography variant="p-plusjakartasans-regular" color="#6b7280">
        {description}
      </Typography>

      <View style={styles.dotContainer}>
        {Array.from({ length }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentIndex ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>

      <View style={styles.backgroundShape} />
      <Image source={image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    paddingHorizontal: 30,
    marginTop: "20%",
    gap: 8,
    position: "relative",
  },
  imageBackground: {},
  dotContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 10,

    width: 60,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#0B89CE",
  },
  activeDot: {
    width: 30,
    opacity: 1,
  },
  inactiveDot: {
    opacity: 0.4,
  },
  backgroundShape: {
    position: "absolute",
    width: 420,
    height: 420,
    backgroundColor: "#0B89CE",
    borderRadius: 60,
    transform: [{ rotate: "-8deg" }],
    bottom: 90,
    left: 20,
  },
  image: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    transform: [{ translateX: 35 }, { scale: 1.2 }],
  },
});

export default OnboardingContainer;
