import { useState } from "react";
import { useAppNotification } from "../hooks/app_notification";
import useAppValidator from "../hooks/app_validator";
import useAppNavigation from "../hooks/app_navigation";

const usePasswordRecoveryService = () => {
  const { showNotification } = useAppNotification();
  const { goValidationCode } = useAppNavigation();
  const { validate } = useAppValidator();
  const [email, setEmail] = useState("");

  const navigateToRelidationCode = () => {
    console.log("Botão pressionado, email:", email); // Debug

    if (email.trim() === "") {
      console.log("O campo e-mail não pode estar vazio.");
      return showNotification(
        "Atenção!",
        "O campo e-mail não pode estar vazio.",
        "alert"
      );
    }

    if (!validate("email", email)) {
      console.log("Por favor, insira um e-mail válido.");
      return showNotification(
        "Erro!",
        "Por favor, insira um e-mail válido.",
        "error"
      );
    }

    goValidationCode(email);
    console.log("Navegando para código de validação...");
  };

  return { email, setEmail, navigateToRelidationCode };
};

export default usePasswordRecoveryService;
