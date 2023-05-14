import React from "react";
import { Text, TextInput, StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { AppRegistry } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import NewsCard from '../components/NewsCard';

export default function Simulate({ navigation }) {
  const userjson = require('../../user.json');
  const userData = Object.values(userjson);
  // const data = require('../../news.json');
  // const dataArray = Object.values(data);

  // const newsCards = dataArray.map((newsItem) => (
  //   <NewsCard
  //     key={newsItem.title}
  //     title={newsItem.title}
  //     author={newsItem.author}
  //     url={newsItem.url}
  //     imageUrl={newsItem.urlToImage}
  //   />
  // ));

    return (
      <View style={styles.container}>
        <ScrollView persistentScrollbar={true}>

        <Text style={[{fontSize: 15, fontWeight: 'bold'}, {paddingLeft: 210}]}> Overview </Text>
          <View style={[styles.circle, {marginBottom: 5}, {alignSelf: "flex-end"}]}></View>
          <View style={{height:190}}>
            <ProgressChart data={[0.4, 0.6, 0.8]}
              width= {380}
              height={190}
              chartConfig={chartConfig}
            />
          </View>
        <Text style={[{fontSize: 15, fontWeight: 'bold'}, {paddingLeft: 210}]}> Charts </Text>
        <View style={[styles.circle, {marginBottom:10}, {alignSelf: "flex-end"}]} ></View>
              
        <View style={{ backgroundColor: 'white' }}>
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
            <LineChart
              data={total}
              width={380}
              height={190}
              chartConfig={chartConfig}
              withHorizontalLabels={true}
              withInnerLines={false}
              style={{
                alignSelf: "center"
              }}  
            />
        </View>

        <Text style={[{fontSize: 15, fontWeight: 'bold'}, {paddingLeft: 250}]}> News </Text>
        <View style={[styles.circle1, {alignSelf: "flex-end"}]} ></View>

      </ScrollView>

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
      height:'100%',
      alignContent: 'center',
      marginLeft: 20,
      persistentScrollbar:true,
      backgroundColor: 'red'

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

  const total = {
    labels: [...Array(40).keys()],
    datasets: [
      {
        data: userData['IRA_list'][0],
      },
      {
        data: userData['IRA_list'][1],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(99, 52, 227, ${opacity})`,
    strokeWidth: 3, 
    barPercentage: 1,
    borderRadius:100,
    
    
  };