import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { IndexScreen } from './src/screens/IndexScreen';
import { Provider as BlogProvider } from './src/context/BlogContext';

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <IndexScreen />
      </NavigationContainer>
    </BlogProvider>
  );
}
