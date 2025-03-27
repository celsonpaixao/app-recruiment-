import { create } from "zustand";
import useAppValidator from "../hooks/app_validator";
import useAppNavigation from "../hooks/app_navigation";

type ValidationCodeState = {
  code: string[];
  handleChange: (
    value: string,
    index: number,
    focusNext: () => void,
    focusPrev: () => void
  ) => void;
  validateCode: () => boolean;
  navigateToResetPass: () => void;
};

export const useValidationCodeService = create<ValidationCodeState>(
  (set, get) => {
    const { validate } = useAppValidator();
    const { goResetPassword } = useAppNavigation();
    return {
      code: ["", "", "", ""],

      handleChange: (value, index, focusNext, focusPrev) => {
        set((state) => {
          const newCode = [...state.code];

          if (value === "") {
            newCode[index] = "";
            if (index > 0) {
              focusPrev();
            }
          } else if (validate("onlyNumbers", value)) {
            newCode[index] = value;

         
            if (index < 3) {
              focusNext();
            }
          }

          return { code: newCode };
        });
      },

      validateCode: () => get().code.join("").length === 4,

      navigateToResetPass: () => {},
    };
  }
);
