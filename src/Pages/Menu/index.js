import React from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "../../Components/Header";
import StoriesList from "../../Components/Stories";
import PostsList from "../../Components/PostsList";

function Menu() {
  return (
    <View>
      <Header />
      <ScrollView>
        <StoriesList />
        <PostsList />
      </ScrollView>
    </View>
  );
}
export default Menu;
