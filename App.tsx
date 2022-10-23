import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IndexScreen } from "./src/screens/IndexScreen";
import { BlogProvider } from "./src/context/BlogContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={IndexScreen}
            options={{ title: "Home" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}
