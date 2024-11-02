import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";

const Follow_Screen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("followers");

  const followingData = [
    { id: "1", name: "Kiran Glaucus", isFollowing: true, avatar: require('../assets/Data/Follow/Avatar_31.png') },
    { id: "2", name: "Sally Rooney", isFollowing: true, avatar: require('../assets/Data/Follow/Avatar_37.png') },
    { id: "3", name: "Marie Franco", isFollowing: true, avatar: require('../assets/Data/Follow/Avatar_36.png') },
    { id: "4", name: "Jena Nguyen", isFollowing: true, avatar: require('../assets/Data/Follow/Avatar_35.png') },
    { id: "5", name: "Kristin Watson", isFollowing: true, avatar: require('../assets/Data/Follow/Avatar_34.png') },
  ];

  const suggestionsData = [
    { id: "6", name: "Bobby Sandoval", isFollowing: false, avatar: require('../assets/Data/Follow/Avatar_32.png') },
    { id: "7", name: "Jennie Ponce", isFollowing: false, avatar: require('../assets/Data/Follow/Avatar_38.png') },
    { id: "8", name: "Anja O'Connor", isFollowing: false, avatar: require('../assets/Data/Follow/Avatar_33.png') },
  ];

  const renderUserItem = ({ item }) => (
    <View style={styles.userItem}>
      <Image source={item.avatar} style={styles.avatar} />
      <Text style={styles.userName}>{item.name}</Text>
      <TouchableOpacity style={item.isFollowing ? styles.followingButton : styles.followButton}>
        <Text style={item.isFollowing ? styles.followingText : styles.followText}>
          {item.isFollowing ? "Following" : "Follow"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.moreButton}>
        <Text style={styles.moreButtonText}>⋮</Text>
      </TouchableOpacity>
    </View>
  );

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

      {/* Danh sách người đang theo dõi */}
      <FlatList
        data={followingData}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id}
        
        contentContainerStyle={styles.listContent}
      />

      {/* Danh sách gợi ý */}
      <FlatList
        data={suggestionsData}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <Text style={styles.sectionTitle}>Suggestions for you</Text>}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

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
    backgroundColor: '#fff',
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
  listContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 10,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    flex: 1,
    fontSize: 16,
  },
  followButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: 'dodgerblue',
    borderRadius: 5,
  },
  followText: {
    color: 'white',
    fontWeight: 'bold',
  },
  followingButton: {
    padding: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  followingText: {
    color: 'black',
    fontWeight: 'bold',
  },
  moreButton: {
    marginLeft: 10,
  },
  moreButtonText: {
    fontSize: 20,
    color: 'gray',
  },
});

export default Follow_Screen;
