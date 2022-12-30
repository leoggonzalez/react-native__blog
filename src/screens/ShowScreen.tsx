import { RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

type ParamList = {
  show: {
    itemId: string;
  };
};

export function ShowScreen(): JSX.Element {
  const route = useRoute<RouteProp<ParamList, 'show'>>();
  const { itemId } = route.params;
  const { state } = useContext(BlogContext);

  const blog = state?.find((item) => item.id === itemId);

  if (!blog) {
    return (
      <View>
        <Text>Blog not found</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>ShowScreen</Text>
      <Text>{blog.id}</Text>
    </View>
  );
}
