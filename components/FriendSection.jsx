import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const FriendSection = ({ friendCnt, setFriendIsShow, friendIsShow }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ color: "gray", fontSize: 16 }}>친구{friendCnt}</Text>
      <TouchableOpacity onPress={() => setFriendIsShow(!friendIsShow)}>
        {friendIsShow ? (
          <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
        ) : (
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default FriendSection;
