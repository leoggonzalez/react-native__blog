import React, { useContext } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

export function IndexScreen(): JSX.Element {
  const { state, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
      <Button
        title="add blog post"
        onPress={() => addBlogPost({ title: 'test' })}
      />
    </View>
  );
}
