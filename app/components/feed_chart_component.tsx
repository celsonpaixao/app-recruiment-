import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Picker } from "@react-native-picker/picker";
import { COLORS } from "../styles/color_style";
import Typography from "./typography";

const screenWidth = Dimensions.get("window").width;

const FeedChartComponent = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2023");

  const chartData = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        data: [10, 75, 25, 80, 90, 50],
        color: (opacity = 1) => `rgba(11, 137, 206, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#0B89CE",
    },
    propsForBackgroundLines: {
      strokeDasharray: "",
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography
          variant="h3-plusjakartasans-medium"
          style={{ color: COLORS.gray[950] }}
        >
          Candidaturas por dia
        </Typography>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedYear}
            style={styles.picker}
            onValueChange={(itemValue: string) => setSelectedYear(itemValue)}
          >
            <Picker.Item label="2023" value="2023" />
            <Picker.Item label="2022" value="2022" />
            <Picker.Item label="2021" value="2021" />
          </Picker>
        </View>
      </View>
      <LineChart
        data={chartData}
        width={screenWidth - 40}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
        withDots={true}
        withShadow={false}
        withInnerLines={true}
        withOuterLines={true}
        decorator={() => {
          return (
            <View style={styles.tooltip}>
              <Text style={styles.tooltipText}>06.06.2023</Text>
              <Text style={styles.tooltipText}>Candidatura: 27</Text>
            </View>
          );
        }}
        getDotColor={(dataPoint, index) => {
          return index === 2 ? "#0B89CE" : "transparent";
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F7FA",
    borderRadius: 16,
    padding: 20,
    minHeight: 300,
    marginHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.gray[900],
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: COLORS.gray[300],
    borderRadius: 8,
  },
  picker: {
    height: 40,
    width: 120,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  tooltip: {
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    left: 120,
    top: 80,
  },
  tooltipText: {
    fontSize: 12,
    color: COLORS.gray[700],
  },
});

export default FeedChartComponent;
