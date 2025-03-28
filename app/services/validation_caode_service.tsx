import { create } from "zustand";
import useAppValidator from "../hooks/app_validator";

type ValidationCodeState = {
  code: string[];
  handleChange: (
    value: string,
    index: number,
    focusNext: () => void,
    focusPrev: () => void
  ) => void;
  validateCode: () => boolean;
};

export const useValidationCodeService = create<ValidationCodeState>(
  (set, get) => {
    const { validate } = useAppValidator();

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
    };
  }
);
