import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IndexScreen } from './src/screens/IndexScreen';
import { Provider as BlogProvider } from './src/context/BlogContext';
import { ShowScreen } from './src/screens/ShowScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="blogs" component={IndexScreen} />
          <Stack.Screen name="show" component={ShowScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}
