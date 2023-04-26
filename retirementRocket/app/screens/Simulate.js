import React from "react";
import { Text, TextInput, StyleSheet, Button, View, SafeAreaView, ScrollView } from 'react-native';
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

        

            <View style={[styles.circle,{marginBottom: 5}]} ></View>
            <View style={{height:190}}>
        <ScrollView>
        
        

        <ProgressChart data={[0.4, 0.6, 0.8]}
        width= {380}
        height={190}
        chartConfig={chartConfig}
        />
        
        
        </ScrollView>
        </View>

            <Text style={[{fontSize: 15, fontWeight: 'bold'},{marginTop: 0}]}> Charts 
        </Text>

        




            <View style={[styles.circle,{marginBottom:10}]} ></View>
              
            <View style={{height:100, width:380}}>
            
            <ScrollView persistentScrollbar={true}
            style={styles.scrollContainer}
            
            >
            <LineChart
            
            data={data}
            width={380}
            height={190}
            chartConfig={chartConfig}
            withHorizontalLabels={true}
            withInnerLines={false}
            persistentScrollbar={true}
            style={{
              alignSelf: "center"
            }}
          />
          <LineChart
            
            data={data}
            width={380}
            height={190}
            chartConfig={chartConfig}
            withHorizontalLabels={true}
            withInnerLines={false}
            style={{
              alignSelf: "center"
            }}
          />
          <LineChart
            
            data={data}
            width={380}
            height={190}
            chartConfig={chartConfig}
            withHorizontalLabels={true}
            withInnerLines={false}
            style={{
              alignSelf: "center"
            }}
          />

          </ScrollView>
          </View>
               
    
            

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
      //justifyContent: 'flex-start', 
      flexDirection: 'column',
      //rowGap: 180,
      padding: 20,
      marginTop: -5
    },
    
    square: {
      width: 170,
      height: 5,
      backgroundColor: 'black'
      
    },

    circle1: {
      width: 130,
      height: 3,
      borderRadius: 100 / 7,
      backgroundColor: 'black'
    },
    circle: {
      height: 3,
      width: 170,
      borderRadius: 100 / 7,
      backgroundColor: 'black'
    },
    scrollContainer:{
      width:'100%',
      height:220,
      marginLeft: 20,
      persistentScrollbar:true,
    }
  });

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
      {
        data: [10, 45, 30, 22, 55, 80],
      },
    ],
    
    
  };

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(99, 52, 227, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 1,
    borderRadius:100,
    
    
  };