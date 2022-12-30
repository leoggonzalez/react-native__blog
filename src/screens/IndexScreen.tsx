import React, { useContext } from 'react';
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  blogs: undefined;
  show: undefined;
};

export function IndexScreen(): JSX.Element {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('show')}>
            <View style={styles.row}>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text>id: {item.id}</Text>
              </View>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Ionicons name="trash-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
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
