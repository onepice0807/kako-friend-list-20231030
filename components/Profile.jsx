import React from "react";
import { Image, Text, View } from "react-native";

const Profile = ({ name, uri, introduction, imgSize }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={{ uri: uri }}
        style={{ width: imgSize, height: imgSize, borderRadius: 16 }}
      />
      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{name}</Text>
        <Text style={{ fontSize: 12, color: "gray" }}>{introduction}</Text>
      </View>
    </View>
  );
};

export default Profile;
