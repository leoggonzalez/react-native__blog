import React from 'react';
import { Button } from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { HomeScreen } from './HomeScreen';
import { ShowScreen } from './ShowScreen';
import { CreateScreen } from './CreateScreen';

export type RootStackParamList = {
  blogs: undefined;
  create: undefined;
  show: { itemId?: string };
};

const Stack = createNativeStackNavigator();

export function IndexScreen(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="blogs"
        component={HomeScreen}
        options={{
          headerRight: () => {
            return (
              <Button
                title="Create"
                onPress={() => navigation.navigate('create')}
              />
            );
          },
        }}
      />
      <Stack.Screen name="show" component={ShowScreen} />
      <Stack.Screen name="create" component={CreateScreen} />
    </Stack.Navigator>
  );
}
