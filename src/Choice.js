import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
const choice = ({ navigation }) => {
  return (
    <View
      style={{
        alignItems: "center"
      }}
    >
      <TouchableOpacity
        style={styles.choices}
        onPress={() => navigation.navigate("bypin")}
      >
        <Text style={{ color: "white" }}>Search by PIN</Text>
      </TouchableOpacity>
      <Text styles={{ fontSize: 16, fontWeight: "bold" }}>OR</Text>
      <TouchableOpacity
        style={styles.choices}
        onPress={() => navigation.navigate("bydist")}
      >
        <Text style={{ color: "white" }}>Search by District</Text>
      </TouchableOpacity>
    </View>
  );
};
export default choice;
