import HomeScreen from "./app/screens/HomeScreen.js";
import SecondScreen from "./app/screens/SecondScreen.js";
import ThirdScreen from "./app/screens/ThirdScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{title: "Welcome"}}
        />
        <Stack.Screen 
          name="Second"
          component={SecondScreen}
        />
        <Stack.Screen 
          name="Third"
          component={ThirdScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}