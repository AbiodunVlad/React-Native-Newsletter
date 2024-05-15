import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.firstTxt}>LITTLE</Text>
      <Image
        source={require("../img/LittleLemon.png")}
        style={styles.heroImg}
        resizeMode="contain"
      />
      <Text style={styles.firstTxt}>LEMON</Text>

      <Text style={styles.intro}>
        Little Lemon, your local Mediterranean Bistro
      </Text>

      <Pressable
        onPress={() => navigation.navigate("Subscribe")}
        style={styles.newsPressable}
      >
        <Text style={styles.newsletter}>Newsletter</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  firstTxt: {
    color: "#3A5F0B",
    fontSize: 20,
    fontWeight: "bold",
    // fontFamily: "serif",
    margin: 10,
  },

  heroImg: {
    width: 170,
    height: 200,
    margin: 0,
    padding: 0,
  },

  intro: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 100,

    textAlign: "center",
  },

  newsPressable: {
    backgroundColor: "#3A5F0B",
    paddingHorizontal: 150,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 0,
  },

  newsletter: {
    color: "#fff",
  },
});
