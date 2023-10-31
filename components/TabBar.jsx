import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabIconButton = ({
  activeIconName, // 버튼의 선택안되었는지
  inActiveIconName, // 버튼의 선택되었는지
  isSelected, // 버튼의 선택유무
  isMaterialCommunityIcons,
  isIonicons,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      onPress={onPress}
    >
      {isIonicons && (
        <Ionicons
          name={isSelected ? activeIconName : inActiveIconName}
          size={34}
          color="black"
        />
      )}
      {isMaterialCommunityIcons && (
        <MaterialCommunityIcons
          name={isSelected ? activeIconName : inActiveIconName}
          size={34}
          color="black"
        />
      )}
    </TouchableOpacity>
  );
};

const TabBar = ({ selectTabIndex, setSelectTabIndex }) => {
  const handle0 = () => {
    setSelectTabIndex(0);
  };
  const handle1 = () => {
    setSelectTabIndex(1);
  };
  const handle2 = () => {
    setSelectTabIndex(2);
  };
  const handle3 = () => {
    setSelectTabIndex(3);
  };
  const handle4 = () => {
    setSelectTabIndex(4);
  };

  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#eeee",
        height: 65,
        flexDirection: "row",
      }}
    >
      <TabIconButton
        id="0"
        isSelected={selectTabIndex === 0}
        activeIconName="person"
        inActiveIconName="person-outline"
        onPress={() => handle0()}
        isIonicons
      />
      <TabIconButton
        id="1"
        isSelected={selectTabIndex === 1}
        activeIconName="chatbubble"
        inActiveIconName="chatbubble-outline"
        onPress={() => handle1()}
        isIonicons
      />
      <TabIconButton
        id="2"
        isSelected={selectTabIndex === 2}
        activeIconName="chatbubbles"
        inActiveIconName="chatbubbles-outline"
        onPress={() => handle2()}
        isIonicons
      />
      <TabIconButton
        id="3"
        isSelected={selectTabIndex === 3}
        activeIconName="shopping"
        inActiveIconName="shopping-outline"
        onPress={() => handle3()}
        isMaterialCommunityIcons
      />
      <TabIconButton
        id="4"
        isSelected={selectTabIndex === 4}
        activeIconName="ellipsis-horizontal-circle-sharp"
        inActiveIconName="ellipsis-horizontal-circle-outline"
        onPress={() => handle4()}
        isIonicons
      />
    </View>
  );
};

export default TabBar;
