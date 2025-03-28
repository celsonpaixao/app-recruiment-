import React, { useRef, useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
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
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {["Iniciar sessão", "Criar conta"].map((label, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleTabPress(index)}
            style={[
              styles.tab,
              activeTab === index ? styles.activeTab : styles.inactiveTab,
            ]}
          >
            <Typography
              variant="h3-plusjakartasans-medium"
              color={activeTab === index ? "#0B89CE" : "#ffffff"}
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
  container: {
    flex: 1,
    backgroundColor: "#0B89CE",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
  },
  tab: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  inactiveTab: {
    backgroundColor: "#0B89CE",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  pagerView: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default AuthLayoutTab;
