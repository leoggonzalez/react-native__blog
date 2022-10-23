import React, { useContext } from "react";
import { Text, View } from "react-native";
import { BlogContext } from "../context/BlogContext";

export function IndexScreen(): JSX.Element {
  const value = useContext(BlogContext);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Index Screen</Text>
      <Text>{value}</Text>
    </View>
  );
}
