import "../global.css";
import { useLoadFonts } from "./hooks/app_fontes";
import * as Font from "expo-font";
import StackRouter from "./stack.routes";
import "react-native-gesture-handler";
import "./gesture-handler";
export default function App() {
  const isFontsLoaded = useLoadFonts();
  if (!isFontsLoaded) return null;
  return <StackRouter />;
}
