import React from "react";
import { ScrollView, View } from "react-native";
import Profile from "./Profile";
import Margin from "./Margin";

const FriendList = ({ data, imgSize, friendIsShow }) => {
  if (!friendIsShow) return null;
  else {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((friend, index) => {
          return (
            <View key={index}>
              <Profile
                name={friend.name}
                uri={friend.uri}
                introduction={friend.introduction}
                imgSize={imgSize}
              />
              <Margin height={20} />
            </View>
          );
        })}
      </ScrollView>
    );
  }
};

export default FriendList;
