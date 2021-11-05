import React from "react";
import { Image, StyleSheet, Text, View, Linking, Platform } from "react-native";
import { Button, Title, Card } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
const Profile = (props) => {
  const { _id, name, email, salary, phone, position, picture } =
    props.route.params.item;
  const openDial = () => {
    if (Platform.OS === "android") {
      Linking.openURL(`tel:${phone}`);
    } else {
      Linking.openURL(`telprompt:${phone}`);
    }
  };
  return (
    <View style={styles.root}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#542cc9", "#5bbaff"]}
        style={{ height: "30%" }}
      />
      <View style={styles.imgView}>
        <Image
          style={styles.profileImg}
          source={{
            uri: picture,
          }}
        />
      </View>
      <View style={styles.userInfoView}>
        <Title>{name}</Title>
        <Text>{position} </Text>
      </View>
      <Card
        style={styles.userCard}
        onPress={() => Linking.openURL(`mailto:${email}`)}
      >
        <View style={styles.userCardView}>
          <MaterialIcons name="email" size={32} color="blue" />
          <Text style={styles.infoText}>{email}</Text>
        </View>
      </Card>
      <Card style={styles.userCard} onPress={() => openDial()}>
        <View style={styles.userCardView}>
          <MaterialIcons name="phone" size={32} color="blue" />
          <Text style={styles.infoText}>+{phone}</Text>
        </View>
      </Card>
      <Card style={styles.userCard}>
        <View style={styles.userCardView}>
          <MaterialIcons name="attach-money" size={32} color="blue" />
          <Text style={styles.infoText}>${salary}.00</Text>
        </View>
      </Card>
      <View style={styles.profileOptionView}>
        <Button
          icon="account-edit"
          mode="contained"
          style={styles.optionButton}
        >
          Edit
        </Button>
        <Button icon="delete" mode="contained" style={styles.optionButton}>
          Delete
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {},
  imgView: {
    //   deafult column
    alignItems: "center",
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    marginTop: -50,
  },
  userInfoView: {
    alignItems: "center",
  },
  userCard: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
  },
  infoText: {
    fontSize: 18,
    marginLeft: 5,
  },
  userCardView: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileOptionView: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  optionButton: {
    padding: 5,
  },
});
export default Profile;
