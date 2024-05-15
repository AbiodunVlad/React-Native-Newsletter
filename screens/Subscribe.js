import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  useColorScheme,
} from "react-native";
import { validateEmail } from "../utils";

export default function Subscribe() {
  const [email, setEmail] = React.useState("");
  const isEmailValid = validateEmail(email);

  return (
    <View style={styles.container}>
      <Image
        source={require("../img/LittleLemon.png")}
        resizeMode="contain"
        style={styles.img}
      />

      <Text style={styles.Txt}>
        Subscribe to our newsletter for our latest delicious recipes.
      </Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Type your email"
        style={styles.emailInput}
        keyboardType="email-address"
      />

      <Pressable
        style={[
          styles.submitPressable,
          !isEmailValid && { backgroundColor: "#ccc" },
        ]}
        disabled={!isEmailValid}
        onPress={() => {
          Alert.alert("Your subscription has been received. Thank you!");
        }}
      >
        <Text style={styles.subscribe}>Subscribe</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    paddingTop: 50,
  },

  img: {
    width: 80,
    height: 100,
    margin: 0,
    padding: 0,
  },

  Txt: {
    fontSize: 20,
    fontWeight: "regular",
    paddingHorizontal: 30,
    marginVertical: 40,
    textAlign: "center",
  },

  emailInput: {
    borderWidth: 1.5,
    borderColor: "#000",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 350,
  },

  submitPressable: {
    paddingHorizontal: 145,
    paddingVertical: 9,
    backgroundColor: "#3A5F0B",
    borderRadius: 5,
    marginVertical: 30,
  },

  subscribe: {
    color: "#fff",
  },
});
