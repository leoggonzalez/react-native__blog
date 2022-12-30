import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { HomeScreen } from './HomeScreen';
import { ShowScreen } from './ShowScreen';
import { CreateScreen } from './CreateScreen';
import { Ionicons } from '@expo/vector-icons';

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
              <TouchableOpacity onPress={() => navigation.navigate('create')}>
                <Ionicons name="add" size={24} color="black" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen name="show" component={ShowScreen} />
      <Stack.Screen name="create" component={CreateScreen} />
    </Stack.Navigator>
  );
}
