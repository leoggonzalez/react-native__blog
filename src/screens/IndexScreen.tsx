import React, { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Ionicons } from '@expo/vector-icons';

export function IndexScreen(): JSX.Element {
  const { state, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <Ionicons name="trash-outline" size={24} color="black" />
          </View>
        )}
      />
      <Button
        title="add blog post"
        onPress={() => addBlogPost({ title: 'test' })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
});
