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

// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Image, Text, View, Button, TextInput, CommonActions, NavigationContainer, ToastAndroid, Alert } from 'react-native';

// import MyButton from '../components/MyButton';
// import colors from '../config/colors';
// import Separator from '../components/Separator';
// import MyTextButton from '../components/MyTextButton';
// import '../config/firebase';
// import {auth} from '../config/firebase'
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// //const auth = getAuth();

// export default function LogIn({ navigation }) {

//   num = () => 1;

//   showAlert = () => {
//     Alert.alert(
//       "Popup Title",
//       "This is a pop-up message!",
//       [
//         { text: "OK", onPress: () => console.log("OK Pressed") }
//       ],
//       { cancelable: false }
//     );
//   };





//   const [value, setValue] = React.useState({
//     email: '',
//     password: '',
//     error: ''

    
//   })
//   async function signIn() {
   
//     if (value.email === '' || value.password === '') {
//       setValue({
//         ...value,
//         error: 'Email and password are mandatory.'
//       })
//       Alert.alert(
//         "No Email/Password Entered!",
//         "Please enter your log-in information or click 'sign-up' to get started!",
//         [
//           { text: "OK", onPress: () => console.log("OK Pressed") }
//         ],
//         { cancelable: false }
//       );
//       return;
//     }

//     try {
//       await signInWithEmailAndPassword(auth, value.email, value.password);
//       navigation.push("HomeDrawer");
    
      
//     } catch (error) {
//       num = () => 2;
      
//       setValue({
//         ...value,
//         error: error.message,
        
//       })

//       if(num = () => 2){
      
//         Alert.alert(
//           "Wrong Information Entered!",
//           "Please enter your log-in information or click 'sign-up' to get started!",
//           [
//             { text: "OK", onPress: () => console.log("OK Pressed") }
//           ],
//           { cancelable: false }
//         );
        
//       }else{
//         num = () => 1;
//       }
      
      



//     }
    

//   }

//   let getEmployees = () => {
//     console.log("point 1")
//     fetch("http://10.20.16.65:5000/employees")
//     .then(res => {
//       console.log(res.status);
//       console.log(res.headers);
//       return res.json();
//     })
//     .then(
//       (result) => {
//         console.log(result);
//       },
//       (error) => {
//         showAlert;
//         console.log(error);
        
//       }
//     )
//   };

  
//   return (
//     <View style={styles.container}>
//        <View style={styles.centerContainer}> 
//         <Image
//           style={[styles.imageStyles, {height: 150}, {width: 250}, {marginTop: 60}]}
//           source={require('../assets/logo.png')}
//         />
//         </View>
//       <Text style={[styles.bold, {marginTop: 30}, {paddingLeft: 40}]}> Sign In </Text>
//       <Text style={[styles.gray, {paddingLeft: 42}, {paddingTop: 10}]}> Hi there! Nice to see you again. </Text>

//       <View style={styles.leftContainer}>
//         <Text style={[styles.purple, {marginTop: 10}, {paddingRight: 295}]}> Email </Text>
//         <TextInput
//           style={{height: 40}}
//           placeholder="example@gmail.com"
//           onChangeText={(text) => setValue({ ...value, email: text })}
//           />
//         <Separator/>

//         <Text style={[styles.purple, {paddingRight: 270}]}> Password </Text>

//         <TextInput
//           style={{height: 40}}
//           onChangeText={(text) => setValue({ ...value, password: text })}
//           secureTextEntry= {true}
//         />
//         <Separator/>
//       </View>

//       <View style={styles.centerContainer}> 
//         <MyButton 
//           title='Sign In'
//           onPress={signIn}
//           backColor={colors.purple}
//         />

//         <View style={[styles.textbuttons]}>
//           <Text style={[styles.gray, {fontSize: 14}, {paddingRight: 100}]}> Forgot Password? </Text>

//           <MyTextButton 
//               text = 'Sign Up'  
//               //onPress={() => ToastAndroid.show("TestTestTest")}
//                 onPress={showAlert}
//           /> 
//         </View>
//       </View>
      
      
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     height: "100%",
//     backgroundColor: "white"
//   },

//   leftContainer: {
//     paddingLeft: 60,
//     width: "100%",
//   },

//   centerContainer: {
//       width: "100%",
//       alignItems: 'center'
//   },

//     purple:{
//       color: '#6334e3',
//       fontSize: 14,
//   },

//     bold:{
//       fontWeight: 'bold',
//       fontSize: 20,
//   },
//     gray: {
//       color: '#808080',
//       fontSize: 16,
//   },

//     textbuttons: {
//       flexDirection: 'row' ,
//       alignItems: 'center'
//     }
      
// });