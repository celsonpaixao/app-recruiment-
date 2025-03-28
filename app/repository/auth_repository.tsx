import { firebaseAuth } from "../firebase.config";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import useAppNavigation from "../hooks/app_navigation";

const AuthRepository = () => {
  const { goToHome } = useAppNavigation();

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
    checkUserSession: (callback: (user: User | null) => void) => {
      return onAuthStateChanged(firebaseAuth, callback);
    },
  };
};

export default AuthRepository;
