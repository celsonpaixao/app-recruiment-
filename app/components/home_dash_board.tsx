import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Typography from "../components/typography";
import GlobalIcons from "../components/global_Icons";
import { COLORS } from "../styles/color_style";

type IconNames = "north" | "south" | "notifications";

interface DashboardItem {
  id: string;
  title: string;
  value: number;
  percent: number;
  icon: IconNames;
  color: string;
}

const DashboardCard = ({ item }: { item: DashboardItem }) => (
  <View style={styles.cardInfo}>
    <Typography
      variant="p-plusjakartasans-medium"
      style={{ width: "100%", color: COLORS.gray[900] }}
      numberOfLines={1}
      ellipsizeMode="tail"
    >
      {item.title}
    </Typography>

    <View style={styles.valueSection}>
      <Typography variant="h3-plusjakartasans-bold">{item.value}</Typography>

      <View style={styles.percentContainer}>
        <GlobalIcons name={item.icon} size={14} color={item.color} />
        <Typography
          variant="p-plusjakartasans-medium"
          style={{ color: item.color }}
        >
          {item.percent}%
        </Typography>
      </View>
    </View>
  </View>
);

const HomeGridDashBoard = () => {
  const data: DashboardItem[] = [
    {
      id: "1",
      title: "Vagas ativas",
      value: 4,
      percent: 5.14,
      icon: "north",
      color: COLORS.success,
    },
    {
      id: "2",
      title: "Vagas Encerradas",
      value: 134,
      percent: 12.2,
      icon: "south",
      color: COLORS.error,
    },
    {
      id: "3",
      title: "Candidatos Aprovados",
      value: 123,
      percent: 5.14,
      icon: "north",
      color: COLORS.success,
    },
    {
      id: "4",
      title: "Vagas mais concorridas",
      value: 123,
      percent: 5.14,
      icon: "north",
      color: COLORS.success,
    },
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <DashboardCard item={item} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.dashboardGrid}
    />
  );
};

const styles = StyleSheet.create({
  dashboardGrid: {

  },
  cardInfo: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
    margin: 6,
    padding: 16,
    borderRadius: 12,
    width: 200,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  valueSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  percentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default HomeGridDashBoard;
