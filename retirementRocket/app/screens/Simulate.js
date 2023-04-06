import React from "react";
import { Text, TextInput, StyleSheet, Button, View } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


export default function Simulate({ navigation }) {
    return (
          <View style={styles.container}>

        <Text style={[{fontSize: 15, fontWeight: 'bold'},{marginTop:0}]}> Overview 
        </Text>

            <View style={[styles.circle,{marginTop: 0}]} ></View>

            <Text style={[{fontSize: 15, fontWeight: 'bold'},{marginTop: 180}]}> Charts 
        </Text>

        




            <View style={[styles.circle]} ></View>
            <LineChart
  data={data}
  width={400}
  height={220}
  chartConfig={chartConfig}
/>
            <Text style={[{fontSize: 15, fontWeight: 'bold'},{marginTop: 0}]}> News 
        </Text>

            <View style={[styles.circle1]} ></View>
          </View>
         
      );
          
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
      alignItems: 'flex-end', 
      justifyContent: 'center', 
      flexDirection: 'column',
      //rowGap: 180,
      padding: 20,
      
    },
    
    square: {
      width: 170,
      height: 7,
      backgroundColor: 'black'
      
    },

    circle1: {
      width: 130,
      height: 7,
      borderRadius: 100 / 7,
      backgroundColor: 'black'
    },
    circle: {
      height: 7,
      width: 170,
      borderRadius: 100 / 7,
      backgroundColor: 'black'
    }
  });

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      }
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: false // optional
  };