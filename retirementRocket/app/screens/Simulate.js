import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View, SafeAreaView, ScrollView, StyleSheetProperties } from 'react-native';
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

const userjson = require('../../user.json');

export default function Simulate({ navigation }) {
  const news = require('../../news.json');
  const newsArray = Object.values(news);
  
  const randomIndex = Math.floor(Math.random() * newsArray.length);
  const randomNewsItem = newsArray[randomIndex];
  const randomIndex2 = Math.floor(Math.random() * newsArray.length);
  const randomNewsItem2 = newsArray[randomIndex2];

    return (
      <View style={styles.container}>
        <ScrollView persistentScrollbar={true}>

        <Text style={[{fontSize: 15, fontWeight: 'bold'}, {paddingLeft: 185}]}> Overview </Text>
          <View style={[styles.circle, {marginBottom: 15}, {alignSelf: "flex-end"}]}></View>

          <View style={{height:200}}>
            <Text style={styles.chartTitle}>Estimated Total Portfolio Breakdown</Text>
            <PieChart
              data={pie_final_data}
              width={350}
              height={230}
              chartConfig={chartConfig}
              accessor={"population"}
              backgroundColor={"transparent"}
              paddingLeft={"15"}
              center={[10, 10]}
              absolute
              style={{
                alignSelf: "center"
              }}
            />
          </View>

          <View style={[{height:200}, {marginTop: 70}]}>
            <Text style={styles.chartTitle}>Estimated Total Portfolio Breakdown(Discounted for Inflation)</Text>
            <PieChart
              data={pie_final__discounted_data}
              width={350}
              height={230}
              chartConfig={chartConfig}
              accessor={"population"}
              backgroundColor={"transparent"}
              paddingLeft={"15"}
              center={[10, 10]}
              absolute
              style={{
                alignSelf: "center"
              }}
            />
          </View>

        <Text style={[{fontSize: 15, fontWeight: 'bold'}, {paddingLeft: 185},{marginTop: 60}]}> Charts </Text>
        <View style={[styles.circle, {marginBottom: 20}, {alignSelf: "flex-end"}]} ></View>
              
        <View style={ {width:400, alignSelf: "flex-end"}}>
            <Text style={[styles.chartTitle, {paddingLeft: 52}]}>Projected Assets Simulation</Text>
            <LineChart
              data={asset_graph_data}
              width={340}
              height={240}
              chartConfig={chartConfig}
              withHorizontalLabels={true}
              withInnerLines={false}
              style={{
                alignSelf: "flex-end"
              }}  
              withShadow = {false}
              withDots = {false}
            />

            <Text style={[styles.chartTitle, {paddingLeft: 52}]}>Projected 401K Simulation</Text>
            <LineChart
              data={four_graph_data}
              width={340}
              height={240}
              chartConfig={chartConfig}
              withHorizontalLabels={true}
              withInnerLines={false}
              style={{
                alignSelf: "flex-end"
              }}
              withShadow = {false}     
              withDots = {false}
        
              />

            <Text style={[styles.chartTitle, {paddingLeft: 52}]}>Projected IRA Simulation</Text>
            <LineChart
              data={ira_graph_data}
              width={340}
              height={250}
              chartConfig={chartConfig}
              withHorizontalLabels={true}
              withInnerLines={false}
              style={{
                alignSelf: "flex-end"
              }}  
              withShadow = {false}
              withDots = {false}

            />

            <Text style={[styles.chartTitle, {paddingLeft: 52}]}>Projected Total Portfolio Simulation</Text>
            <LineChart
              data={total_graph_data}
              width={340}
              height={250}
              chartConfig={chartConfig}
              withHorizontalLabels={true}
              withInnerLines={false}
              style={{
                alignSelf: "flex-end"
              }}  
              withShadow = {false}
              withDots = {false}

            />
      
        </View>

        <Text style={[{fontSize: 15, fontWeight: 'bold'}, {paddingLeft: 225}]}> News </Text>
        <View style={[styles.circle1, {alignSelf: "flex-end"}, {marginBottom: 20}]} ></View>

        <View style={styles.newsContainer}>
          <NewsCard
            key={randomNewsItem.title}
            title={randomNewsItem.title}
            author={randomNewsItem.author}
            url={randomNewsItem.url}
            imageUrl={randomNewsItem.urlToImage}
          />
          <NewsCard
            key={randomNewsItem2.title}
            title={randomNewsItem2.title}
            author={randomNewsItem2.author}
            url={randomNewsItem2.url}
            imageUrl={randomNewsItem2.urlToImage}
          />
        </View>

      </ScrollView>

     </View>
         
      );
            
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      //justifyContent: 'flex-start', 
      flexDirection: 'column',
      //rowGap: 180,
      padding: 20,
      marginTop: -5
    },

    chartTitle: {
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: 10,
    },

    newsContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
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


  var sumArray = [];
  for (var i = 0; i < userjson['401_list'].length; i++) {
    var row = [];
    for (var j = 0; j < userjson['401_list'][i].length; j++) {
      var sum = userjson['401_list'][i][j] + userjson['IRA_list'][i][j] + userjson['asset_list'][i][j];
      row.push(sum);
    }
    sumArray.push(row);
  }
  let totalObject = []
  for (var i = 0; i < 15; i++) {
    
    totalObject.push({ data: sumArray[i]});
  }
  let assetObject = []
  for (var i = 0; i < 15; i++) {
    
    assetObject.push({ data: userjson['asset_list'][i]});
  }
  let fourObject = []
  for (var i = 0; i < 15; i++) {
    
    fourObject.push({ data: userjson['401_list'][i]});
  }
  let iraObject = []
  for (var i = 0; i < 15; i++) {
    
    iraObject.push({ data: userjson['IRA_list'][i]});
  }
  iraObject.forEach(function(obj) {
    obj.data.color = getRandomColor();
  });
  
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const pie_final_data = [
    {
      name: "401K",
      population: parseFloat(userjson['401k_end'].toFixed(2)),
      color: "rgba(147, 112, 219, 0.5)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "IRA",
      population: parseFloat(userjson['IRA_end'].toFixed(2)),
      color: "rgba(186, 85, 211, 0.5)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "Assets",
      population: parseFloat(userjson['asset_end'].toFixed(2)),
      color: "rgba(138, 43, 226, 0.5)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
  ];
  
  const pie_final__discounted_data = [
    {
      name: "401K",
      population: parseFloat(userjson['401k_d_end'].toFixed(2)),
      color: "rgba(147, 112, 219, 0.5)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "IRA",
      population: parseFloat(userjson['Ira_d_end'].toFixed(2)),
      color: "rgba(186, 85, 211, 0.5)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "Assets",
      population: parseFloat(userjson['asset_d_end'].toFixed(2)),
      color: "rgba(138, 43, 226, 0.5)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
  ];

  const total_graph_data = {
    labels: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    datasets: totalObject,
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,

  };
  const asset_graph_data = {
    labels: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    datasets: assetObject,
  };
  const four_graph_data = {
    labels: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    datasets: fourObject,
  };
  const ira_graph_data = {
    labels: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    datasets: iraObject,
  };

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0,
    //color: (opacity = 1) => `rgba(99, 52, 227, ${opacity})`,
    color: () => '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'),
    strokeWidth: 0,
    barPercentage: 1,
    borderRadius: 50,
    propsForLabels: {
      fill: "#6A5ACD",
      fontSize: 10,
    },
    propsForDots: {
      r: "3",
      strokeWidth: "2",
      stroke: "#6A5ACD",
    },
};
