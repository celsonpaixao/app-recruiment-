import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { FONT_FAMILY } from "../resources/app_fonts";

export function useLoadFonts() {
  const [isFontsLoaded, setIsFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync(FONT_FAMILY);
        setIsFontsLoaded(true);
      } catch (error) {
        console.error("Erro ao carregar fontes:", error);
      }
    }

    loadFonts();
  }, []);

  return isFontsLoaded;
}
