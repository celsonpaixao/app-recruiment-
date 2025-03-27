import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { FONT_FAMILY } from "../resources/app_fonts";

export function useLoadFonts() {
  const [fontsLoaded] = useFonts(FONT_FAMILY);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      setIsReady(true);
    }
  }, [fontsLoaded]);

  return isReady;
}
