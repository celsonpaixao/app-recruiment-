import { useState } from "react";
import AppNavigation from "../hooks/app_navigation";
import { useAppNotification } from "../hooks/app_notification";
import useAppValidator from "../hooks/app_validator";

const usePasswordRecoveryService = () => {
  const navigator = AppNavigation();
  const notificator = useAppNotification();
  const validator = useAppValidator();
  const [email, setEmail] = useState("");

  const navigateToRelidationCode = () => {
    console.log("Botão pressionado, email:", email); // Debug

    if (email.trim() === "") {
      console.log("O campo e-mail não pode estar vazio.");
      return notificator.showNotification(
        "Atenção!",
        "O campo e-mail não pode estar vazio.",
        "alert"
      );
    }

    if (!validator.validate("email", email)) {
      console.log("Por favor, insira um e-mail válido.");
      return notificator.showNotification(
        "Erro!",
        "Por favor, insira um e-mail válido.",
        "error"
      );
    }

    console.log("Navegando para código de validação...");
    navigator.goValidationCode(email);
  };

  return { email, setEmail, navigateToRelidationCode };
};

export default usePasswordRecoveryService;
