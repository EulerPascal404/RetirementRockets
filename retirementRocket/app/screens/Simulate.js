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
const userjson = require('../../user.json');

export default function Simulate({ navigation }) {
  const userjson = require('../../user.json');
  //console.log(userjson);
 // console.log("STOP\nAGE:");
  //console.log(userjson['age'])
  //const userData = Object.values(userjson);
  //console.log(userData);
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
          <PieChart
            data={pie_final_data}
            width={300}
            height={220}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            center={[10, 50]}
            absolute
          />
          </View>
          <View style={{height:190}}>
          <PieChart
            data={pie_final__discounted_data}
            width={300}
            height={220}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            center={[10, 50]}
            absolute
          />
          </View>
        <Text style={[{fontSize: 15, fontWeight: 'bold'}, {paddingLeft: 210}]}> Charts </Text>
        <View style={[styles.circle, {marginBottom:10}, {alignSelf: "flex-end"}]} ></View>
              
        <View style={{ backgroundColor: 'white' }}>
        <LineChart
              data={asset_graph_data}
              width={300}
              height={190}
              chartConfig={chartConfig}
              withHorizontalLabels={true}
              withInnerLines={false}
              style={{
                alignSelf: "center"
              }}  
            />
            <LineChart
              data={four_graph_data}
              width={300}
              height={190}
              chartConfig={chartConfig}
              withHorizontalLabels={true}
              withInnerLines={false}
              style={{
                alignSelf: "center"
              }}  
            />
            <LineChart
              data={ira_graph_data}
              width={300}
              height={190}
              chartConfig={chartConfig}
              withHorizontalLabels={true}
              withInnerLines={false}
              style={{
                alignSelf: "center"
              }}  
            />
            <LineChart
              data={total_graph_data}
              width={300}
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
  //console.log(userjson['asset_list'].length)
  //console.log(userjson['asset_list'][0].length)
  //...Array(20).keys()
  const pie_final_data = [
    {
      name: "401K",
      population: parseFloat(userjson['401k_end'].toFixed(2)),
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "IRA",
      population: parseFloat(userjson['IRA_end'].toFixed(2)),
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "Assets",
      population: parseFloat(userjson['asset_end'].toFixed(2)),
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
  ];
  const pie_final__discounted_data = [
    {
      name: "401K",
      population: parseFloat(userjson['401k_d_end'].toFixed(2)),
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "IRA",
      population: parseFloat(userjson['Ira_d_end'].toFixed(2)),
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "Assets",
      population: parseFloat(userjson['asset_d_end'].toFixed(2)),
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
  ];
  const total_graph_data = {
    labels: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    datasets: totalObject,
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
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(99, 52, 227, ${opacity})`,
    strokeWidth: 3, 
    barPercentage: 1,
    borderRadius:100,
    
    
  };
