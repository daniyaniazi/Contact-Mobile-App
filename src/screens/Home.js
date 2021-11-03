import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import { Card, FAB } from "react-native-paper";

const Home = ({ navigation }) => {
  const data = [
    { id: 1, name: "Daniya", position: "Web developer" },
    { id: 2, name: "Fraeeha", position: "Web developer" },
    { id: 3, name: "Suneela", position: "Web developer" },
    { id: 4, name: "Areeba Akhatr", position: "Web developer" },
  ];
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <Card
            style={styles.card}
            onPress={() => navigation.navigate("Profile")}
          >
            <View style={styles.cardView}>
              <Image
                style={styles.img}
                source={{
                  uri: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                }}
              />

              <View>
                <Text>{item.name}</Text>
                <Text style={{ fontWeight: "bold" }}>{item.position}</Text>
              </View>
            </View>
          </Card>
        )}
      />
      <FAB
        onPress={() => navigation.navigate("Create-Contact")}
        style={styles.fab}
        small={false}
        icon="plus"
      />
    </View>
  );
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
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#542cc9",
  },
});

export default Home;
