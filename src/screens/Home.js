import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Card, FAB } from "react-native-paper";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUser = async () => {
    await fetch("http://d93e-175-107-212-41.ngrok.io", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        refreshing={loading}
        onRefresh={() => fetchUser()}
        data={data}
        keyExtractor={(item) => `${item._id}`}
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
