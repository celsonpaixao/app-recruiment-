import { useState } from "react";
import useAppValidator from "../hooks/app_validator";
import useAppNavigation from "../hooks/app_navigation";
import { useModalStore } from "../stores/modalStore";
import { useSnackbarStore } from "../stores/snackbarStore";

const usePasswordRecoveryService = () => {
  const { showSnackbar } = useSnackbarStore();
  const { goValidationCode } = useAppNavigation();
  const { validate } = useAppValidator();
  const [email, setEmail] = useState("");

  const navigateToRelidationCode = () => {
    console.log("Botão pressionado, email:", email);

    if (email.trim() === "") {
      console.log("O campo e-mail não pode estar vazio.");
      return showSnackbar("O campo e-mail não pode estar vazio.", "alert");
    }

    if (!validate("email", email)) {
      console.log("Por favor, insira um e-mail válido.");
      return showSnackbar("Por favor, insira um e-mail válido.", "error");
    }

    goValidationCode(email);
    console.log("Navegando para código de validação...");
  };

  return { email, setEmail, navigateToRelidationCode };
};

export default usePasswordRecoveryService;
