import React from "react";
import UserNavigation from "../hooks/app_navigation";
const SplashService = () => {
  const navigator = UserNavigation();
  return {
    fristNavigation: () => {
      setTimeout(() => {
        navigator.goToOnboarding();
      }, 2000);
    },
  };
};

export default SplashService;
