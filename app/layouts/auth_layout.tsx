import React, { useRef, useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import PagerView from "react-native-pager-view";
import LoginPage from "../pages/login_page";
import RegisterPage from "../pages/register_page";
import Typography from "../components/typography";

const AuthLayoutTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const pagerRef = useRef<PagerView>(null);

  const handleTabPress = (index: number) => {
    setActiveTab(index);
    pagerRef.current?.setPage(index);
  };

  return (
    <View className="flex-1 bg-primary">
      <View
        className={`flex-row justify-between h-[60px] transition-all duration-300`}
      >
        {["Iniciar sessão", "Criar conta"].map((label, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleTabPress(index)}
            className={`w-[50%] flex items-center justify-center transition-all duration-300 ${
              activeTab === index
                ? "bg-white rounded-t-[30px] rounded-b-[0]"
                : "bg-primary text-white rounded-t-[0] rounded-b-[30px]"
            }`}
          >
            <Typography
              variant="h3-jakarta-medium"
              className={`font-bold transition-all duration-300 ${
                activeTab === index ? "text-primary" : "text-white"
              }`}
            >
              {label}
            </Typography>
          </TouchableOpacity>
        ))}
      </View>

      <PagerView
        ref={pagerRef}
        style={styles.pagerView}
        initialPage={0}
        scrollEnabled={false}
        onPageSelected={(e) => setActiveTab(e.nativeEvent.position)}
      >
        <View key="1">
          <LoginPage />
        </View>
        <View key="2">
          <RegisterPage />
        </View>
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});

export default AuthLayoutTab;
