import { User } from "firebase/auth";
import AuthRepository from "../repository/auth_repository";

const HomeService = () => {
  const { logoutUser, checkUserSession } = AuthRepository();

  const userSessionListener = (callback: (user: User | null) => void) => {
    return checkUserSession(callback);
  };

  const userLogout = async () => {
    try {
      await logoutUser();
      console.log("Usuário deslogado com sucesso");
    } catch (error: any) {
      console.error("Erro ao deslogar", error);
    }
  };

  return {
    userSessionListener,
    userLogout,
  };
};

export default HomeService;
