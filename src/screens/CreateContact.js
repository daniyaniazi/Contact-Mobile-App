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
} from "react-native";
import { Card, FAB, TextInput, Button } from "react-native-paper";
const CreateContact = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    salary: "",
    picture: "",
  });
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.root}>
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
        label="Salary"
        right={<TextInput.Icon name="currency-usd" />}
        style={styles.inputField}
        value={user.salary}
        onChangeText={(text) =>
          setUser({
            ...user,
            salary: text,
          })
        }
      />
      <Button
        icon="upload"
        mode="contained"
        onPress={() => setModal(true)}
        style={styles.inputField}
      >
        Upload Image
      </Button>
      <Button
        style={styles.inputField}
        icon="content-save"
        mode="contained"
        onPress={() => setModal(true)}
      >
        Save
      </Button>
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
                onPress={() => setModal(false)}
              >
                Upload
              </Button>
              <Button
                icon="gallery"
                mode="contained"
                onPress={() => setModal(false)}
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
  },
  modalOptionView: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default CreateContact;
