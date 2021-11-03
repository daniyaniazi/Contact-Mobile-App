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
    {
      id: 1,
      name: "Daniya",
      position: "Web developer",
      email: "abc@abc.com",
      salary: 90000,
      phone: "444 555 6666",
      picture:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Fraeeha",
      position: "Web developer",
      email: "abc@abc.com",
      salary: 90000,
      phone: "444 555 6666",
      picture:
        "https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo=",
    },
    {
      id: 3,
      name: "Suneela",
      position: "Web developer",
      email: "abc@abc.com",
      salary: 90000,
      phone: "444 555 6666",
      picture:
        "https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo=",
    },
    {
      id: 4,
      name: "Areeba Akhatr",
      position: "Web developer",
      email: "abc@abc.com",
      phone: "444 555 6666",
      salary: 90000,
      picture:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <Card
            style={styles.card}
            onPress={() =>
              navigation.navigate("Profile", {
                item: item,
              })
            }
          >
            <View style={styles.cardView}>
              <Image
                style={styles.img}
                source={{
                  uri: item.picture,
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
