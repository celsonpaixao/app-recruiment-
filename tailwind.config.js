/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#0B89CE",
        gray_description: "#353B3F",
      },
      fontFamily: {
        // Inter
        "inter-black": ["Inter-Black"],
        "inter-black-italic": ["Inter-BlackItalic"],
        "inter-bold": ["Inter-Bold"],
        "inter-bold-italic": ["Inter-BoldItalic"],
        "inter-extra-bold": ["Inter-ExtraBold"],
        "inter-extra-bold-italic": ["Inter-ExtraBoldItalic"],
        "inter-extra-light": ["Inter-ExtraLight"],
        "inter-extra-light-italic": ["Inter-ExtraLightItalic"],
        "inter-italic": ["Inter-Italic"],
        "inter-light": ["Inter-Light"],
        "inter-light-italic": ["Inter-LightItalic"],
        "inter-medium": ["Inter-Medium"],
        "inter-medium-italic": ["Inter-MediumItalic"],
        "inter-regular": ["Inter-Regular"],
        "inter-semi-bold": ["Inter-SemiBold"],
        "inter-semi-bold-italic": ["Inter-SemiBoldItalic"],
        "inter-thin": ["Inter-Thin"],
        "inter-thin-italic": ["Inter-ThinItalic"],

        // Plus Jakarta Sans
        "jakarta-regular": ["PlusJakartaSans-Regular"],
        "jakarta-bold": ["PlusJakartaSans-Bold"],
        "jakarta-bold-italic": ["PlusJakartaSans-BoldItalic"],
        "jakarta-extra-bold": ["PlusJakartaSans-ExtraBold"],
        "jakarta-extra-bold-italic": ["PlusJakartaSans-ExtraBoldItalic"],
        "jakarta-extra-light": ["PlusJakartaSans-ExtraLight"],
        "jakarta-extra-light-italic": ["PlusJakartaSans-ExtraLightItalic"],
        "jakarta-italic": ["PlusJakartaSans-Italic"],
        "jakarta-light": ["PlusJakartaSans-Light"],
        "jakarta-light-italic": ["PlusJakartaSans-LightItalic"],
        "jakarta-medium": ["PlusJakartaSans-Medium"],
        "jakarta-medium-italic": ["PlusJakartaSans-MediumItalic"],
        "jakarta-semi-bold": ["PlusJakartaSans-SemiBold"],
        "jakarta-semi-bold-italic": ["PlusJakartaSans-SemiBoldItalic"],
      },
    },
  },
  plugins: [],
};
