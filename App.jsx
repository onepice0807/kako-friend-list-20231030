import { SafeAreaView, StyleSheet } from "react-native";
import Header from "./components/Header";
import Profile from "./components/Profile";
import { friendProfiles, myProfile } from "./data";
import Margin from "./components/Margin";
import Divider from "./components/Divider";
import FriendSection from "./components/FriendSection";
import FriendList from "./components/FriendList";
import { useState } from "react";
import TabBar from "./components/TabBar";

export default function App() {
  // 친구목록을 보여줄지 말지 결정하는 State
  const [friendIsShow, setFriendIsShow] = useState(true);
  // 어떤 탭버튼이 눌려졌는지 저장하는 State
  const [selectTabIndex, setSelectTabIndex] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Margin height={5}></Margin>
      <Profile
        name={myProfile.name}
        uri={myProfile.uri}
        introduction={myProfile.introduction}
        imgSize={70}
      />
      <Margin height={10}></Margin>
      <Divider height={0.6} />
      <Margin height={8}></Margin>
      <FriendSection
        friendCnt={friendProfiles.length}
        friendIsShow={friendIsShow}
        setFriendIsShow={setFriendIsShow}
      />
      <Margin height={10}></Margin>
      <FriendList
        data={friendProfiles}
        imgSize={40}
        friendIsShow={friendIsShow}
      />

      <TabBar
        selectTabIndex={selectTabIndex}
        setSelectTabIndex={setSelectTabIndex}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
