import React, { useEffect, useState } from "react";
import { User } from "firebase/auth";
import useAppNavigation from "../hooks/app_navigation";
import AuthRepository from "../repository/auth_repository";

const SplashService = () => {
  const { goToOnboarding, goToHome } = useAppNavigation();
  const [user, setUser] = useState<User | null>(null);
  const { checkUserSession } = AuthRepository();

  useEffect(() => {
    const unsubscribe = checkUserSession((_user) => {
      setUser(_user);
      if (_user) {
        goToHome();
      } else {
        goToOnboarding();
      }
    });

    return () => unsubscribe();
  }, []);

  return null;
};

export default SplashService;
