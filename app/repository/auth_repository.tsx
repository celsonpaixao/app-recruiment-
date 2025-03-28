import { firebaseAuth } from "../firebase.config";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import useAppNavigation from "../hooks/app_navigation";

const AuthRepository = () => {
  const { goToHome, goToAuth } = useAppNavigation();

  return {
    loginUser: async (email: string, password: string) => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          firebaseAuth,
          email,
          password
        );

        console.log("Usuário autenticado com sucesso:", userCredential.user);
        goToHome();

        return userCredential.user;
      } catch (error: any) {
        throw error;
      }
    },
    logoutUser: async () => {
      try {
        await signOut(firebaseAuth);
        console.log("Usuário deslogado com sucesso.");
        goToAuth();
      } catch (error: any) {
        console.error("Erro ao deslogar:", error);
        throw error;
      }
    },
    checkUserSession: (callback: (user: User | null) => void) => {
      return onAuthStateChanged(firebaseAuth, callback);
    },
  };
};

export default AuthRepository;
