import React from "react";
import { View } from "react-native";

const Divider = (props) => {
  return (
    <View
      style={{
        width: "100%",
        height: props.height,
        backgroundColor: "lightgray",
      }}
    ></View>
  );
};

export default Divider;
