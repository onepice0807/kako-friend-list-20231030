import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ name, color }) => {
  return (
    <TouchableOpacity
      hitSlop={{ top: 10, bottom: 10 }} // 터치 판정영역을 padding 값보다 늘리거나 줄일 때 사용. padding 값은 적용되지 않음
      style={{ paddingHorizontal: 6, backgroundColor: color }}
      onPress={() => console.log(name)}
    >
      <Ionicons name={name} size={26} color="black" />
    </TouchableOpacity>
  );
};

const Header = () => {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>친구</Text>
      <View style={{ flexDirection: "row" }}>
        <IconButton name="search" color={"purple"} />
        <IconButton name="md-person-add" color={"green"} />
        <IconButton name="musical-notes-outline" color={"purple"} />
        <IconButton name="settings-outline" color={"green"} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  HeaderContainer: {
    marginTop: 24,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
