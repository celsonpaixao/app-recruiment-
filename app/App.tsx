import "../global.css";
import { useLoadFonts } from "./hooks/app_fontes";
import StackRouter from "./stack.routes";
import "react-native-gesture-handler";

export default function App() {
  const isFontsLoaded = useLoadFonts();
  if (!isFontsLoaded) return null;
  return <StackRouter />;
}
