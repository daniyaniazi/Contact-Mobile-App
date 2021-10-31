import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
const Home = () => {
  const data = [
    { id: 1, name: "Daniya", position: "Web developer" },
    { id: 2, name: "Fraeeha", position: "Web developer" },
    { id: 3, name: "Suneela", position: "Web developer" },
    { id: 4, name: "Areeba Akhatr", position: "Web developer" },
  ];
  return data.map((item) => (
    <Card style={styles.card}>
      <View style={styles.cardView}>
        <Image
          style={styles.img}
          source={{
            uri: " https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
          }}
        />
        <View>
          <Text>{item.name}</Text>
          <Text style={{ fontWeight: "bold" }}>{item.position}</Text>
        </View>
      </View>
    </Card>
  ));
};
const styles = StyleSheet.create({
  card: {
    margin: 5,
    padding: 5,
  },
  cardView: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    margin: 5,
  },
});

export default Home;
