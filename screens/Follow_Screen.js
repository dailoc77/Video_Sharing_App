import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

const Follow_Screen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("followers");

  return (
    <SafeAreaView style={styles.wrapper}>
      {/* Thanh tab cố định */}
      <View style={styles.header}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "followers" && styles.activeTab]}
          onPress={() => setActiveTab("followers")}
        >
          <Text
            style={[styles.text, activeTab === "followers" && styles.activeText]}
          >
            368 followers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "following" && styles.activeTab]}
          onPress={() => setActiveTab("following")}
        >
          <Text
            style={[styles.text, activeTab === "following" && styles.activeText]}
          >
            456 following
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff', // Đảm bảo thanh tab có nền trắng
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    paddingBottom: 8,
  },
  activeTab: {
    borderBottomColor: 'hotpink',
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  activeText: {
    color: 'hotpink',
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  content: {
    flex: 1,
  },
  contentText: {
    fontSize: 18,
    marginVertical: 10,
  }
});

export default Follow_Screen;
