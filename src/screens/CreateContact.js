import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import { Card, FAB, TextInput, Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";

const CreateContact = ({ navigation, route }) => {
  const getUserInfo = () => {
    if (route.params) {
      return {
        name: route.params.name,
        phone: route.params.phone,
        email: route.params.email,
        salary: route.params.salary,
        picture: route.params.picture,
        position: route.params.position,
      };
    }
    return {
      name: "",
      phone: "",
      email: "",
      salary: "",
      picture: "",
      position: "",
    };
  };

  const [user, setUser] = useState(getUserInfo());
  const [modal, setModal] = useState(false);

  // The path of the picked image
  const [pickedImagePath, setPickedImagePath] = useState(
    getUserInfo().picture
      ? getUserInfo().picture
      : "https://res.cloudinary.com/daniya/image/upload/v1636028163/m4hnuce4xabhdjsg9k4o.png"
  );

  const showImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync().catch((err) =>
        Alert.alert("Error Ocuured")
      );

    if (permissionResult.granted === false) {
      Alert.alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    }).catch((err) => Alert.alert("Error Ocuured"));

    // Explore the result

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      setUser({
        ...user,
        picture: result.uri,
      });
      setModal(false);
      // handleProfilePictureUpload(result.uri);
    }
  };

  const openCamera = async () => {
    const permissionResult =
      await ImagePicker.requestCameraPermissionsAsync().catch((err) =>
        Alert.alert("Error Ocuured")
      );

    if (permissionResult.granted === false) {
      Alert.alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync().catch((err) =>
      Alert.alert("Error Ocuured")
    );

    // Explore the result

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      setUser({
        ...user,
        picture: result.uri,
      });
      setModal(false);
      // handleProfilePictureUpload(result.uri);
    }
  };
  const handleProfilePictureUpload = async (image) => {
    let newfile = {
      uri: image,
      type: `${image.split("/").pop().split(".")[0]}/${image.split(".").pop()}`,
      name: `${image.split(".").pop()}`,
    };
    const data = new FormData();
    data.append("file", newfile);
    data.append("upload_preset", "ContactApp");
    data.append("cloud_name", "daniya");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/daniya/image/upload",
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPickedImagePath(data.url);
        setModal(false);
        return data;
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error Ocuured");
      });
    return res;
  };
  const saveContact = async () => {
    const data = await handleProfilePictureUpload(pickedImagePath);

    const newUser = {
      ...user,
      picture:
        data.url ||
        "https://res.cloudinary.com/daniya/image/upload/v1636028163/m4hnuce4xabhdjsg9k4o.png",
    };

    await fetch("http://0f24-175-107-212-41.ngrok.io/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        Alert.alert(`${data.name} has been added successfully`);
        navigation.navigate("Home");
      });
    setUser({
      name: "",
      phone: "",
      email: "",
      salary: "",
      picture: "",
      position: "",
    });
  };
  const updateContact = async () => {
    const data = await handleProfilePictureUpload(pickedImagePath);

    const newUser = {
      ...user,
      picture:
        data.url ||
        "https://res.cloudinary.com/daniya/image/upload/v1636028163/m4hnuce4xabhdjsg9k4o.png",
      id: route.params._id,
    };

    await fetch("http://0f24-175-107-212-41.ngrok.io/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        Alert.alert(`${data.name} has been updated successfully`);
        navigation.navigate("Home");
      });
  };

  return (
    <View style={styles.root}>
      <Image
        style={styles.profileImg}
        source={{
          uri: pickedImagePath,
        }}
      />

      <TextInput
        style={styles.inputField}
        mode="outlined"
        label="Name"
        value={user.name}
        right={<TextInput.Icon name="account" />}
        onChangeText={(text) =>
          setUser({
            ...user,
            name: text,
          })
        }
      />
      <TextInput
        mode="outlined"
        label="Phone"
        value={user.phone}
        style={styles.inputField}
        right={<TextInput.Icon name="phone" />}
        onChangeText={(text) =>
          setUser({
            ...user,
            phone: text,
          })
        }
        keyboardType="number-pad"
      />
      <TextInput
        mode="outlined"
        label="Email"
        right={<TextInput.Icon name="email" />}
        style={styles.inputField}
        value={user.email}
        onChangeText={(text) =>
          setUser({
            ...user,
            email: text,
          })
        }
      />
      <TextInput
        mode="outlined"
        label="Postion"
        right={<TextInput.Icon name="home" />}
        style={styles.inputField}
        value={user.position}
        onChangeText={(text) =>
          setUser({
            ...user,
            position: text,
          })
        }
      />
      <TextInput
        mode="outlined"
        label="Salary"
        right={<TextInput.Icon name="currency-usd" />}
        style={styles.inputField}
        value={`${user.salary}`}
        keyboardType="number-pad"
        onChangeText={(text) =>
          setUser({
            ...user,
            salary: text,
          })
        }
      />
      <Button
        icon={
          pickedImagePath ===
          "https://res.cloudinary.com/daniya/image/upload/v1636028163/m4hnuce4xabhdjsg9k4o.png"
            ? "camera"
            : "check"
        }
        mode="contained"
        onPress={() => setModal(true)}
        style={styles.inputField}
      >
        Upload Image
      </Button>
      {route.params ? (
        <Button
          style={styles.inputField}
          icon="content-save"
          mode="contained"
          onPress={() => updateContact()}
        >
          Upadate
        </Button>
      ) : (
        <Button
          style={styles.inputField}
          icon="content-save"
          mode="contained"
          onPress={() => saveContact()}
        >
          Save
        </Button>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        // back button
        onRequestClose={() => {
          setModal(false);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContainerView}>
            <View style={styles.modalOptionView}>
              <Button
                icon="camera"
                mode="contained"
                onPress={() => showImagePicker()}
              >
                Upload
              </Button>
              <Button
                icon="image"
                mode="contained"
                onPress={() => openCamera()}
              >
                Gallery
              </Button>
            </View>

            <Button icon="close" mode="text" onPress={() => setModal(false)}>
              Close
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    margin: 10,
  },
  inputField: {
    marginBottom: 5,
  },
  modalView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContainerView: {
    backgroundColor: "white",
    padding: "10px",
    borderRadius: 20,
    width: "95%",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
  },
  modalOptionView: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
  },
});

export default CreateContact;
