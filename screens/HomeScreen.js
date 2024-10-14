import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { Avatar, Card } from "react-native-elements";

// Import images from the assets folder
const avatarImages = {
  avatar1: require("../assets/Data/Home_Video_Listing/Container_13.png"),
  avatar2: require("../assets/Data/Home_Video_Listing/Container_17.png"),
  avatar3: require("../assets/Data/Home_Video_Listing/Container_20.png"),
  avatar4: require("../assets/Data/Home_Video_Listing/Container_23.png"),
  avatar5: require("../assets/Data/Home_Video_Listing/Container_26.png"),
  avatar6: require("../assets/Data/Home_Video_Listing/Container_29.png"),
};

const topTrendingImages = {
  trending1: require("../assets/Data/Home_Video_Listing/Container_3.png"),
  trending2: require("../assets/Data/Home_Video_Listing/Container_15.png"),
  trending3: require("../assets/Data/Home_Video_Listing/Container_16.png"),
};

const topicImages = {
  topic1: require("../assets/Data/Home_Video_Listing/Container_4.png"),
  topic2: require("../assets/Data/Home_Video_Listing/Container_5.png"),
  topic3: require("../assets/Data/Home_Video_Listing/Container_6.png"),
  topic4: require("../assets/Data/Home_Video_Listing/Container_7.png"),
  topic5: require("../assets/Data/Home_Video_Listing/Container_8.png"),
  topic6: require("../assets/Data/Home_Video_Listing/Container_9.png"),
  topic7: require("../assets/Data/Home_Video_Listing/Container_10.png"),
  topic8: require("../assets/Data/Home_Video_Listing/Container_36.png"),
};

const streamingImages = {
  stream1: require("../assets/Data/Home_Video_Listing/Container_11.png"),
  stream2: require("../assets/Data/Home_Video_Listing/Container_32.png"),
  stream3: require("../assets/Data/Home_Video_Listing/Container_34.png"),
};

const audioImages = {
  audio1: require("../assets/Data/Home_Video_Listing/Image_7.png"),
  audio2: require("../assets/Data/Home_Video_Listing/Image_8.png"),
  audio3: require("../assets/Data/Home_Video_Listing/Image_9.png"),
  audio4: require("../assets/Data/Home_Video_Listing/Image_10.png"),
};

export default function HomeScreen() {
  const avatars = [
    avatarImages.avatar1,
    avatarImages.avatar2,
    avatarImages.avatar3,
    avatarImages.avatar4,
    avatarImages.avatar5,
    avatarImages.avatar6,
  ];

  const topTrending = [
    topTrendingImages.trending1,
    topTrendingImages.trending2,
    topTrendingImages.trending3,
  ];

  const browseTopics = [
    topicImages.topic1,
    topicImages.topic2,
    topicImages.topic3,
    topicImages.topic4,
    topicImages.topic5,
    topicImages.topic6,
    topicImages.topic7,
    topicImages.topic8,
  ];

  const streamingData = [
    streamingImages.stream1,
    streamingImages.stream2,
    streamingImages.stream3,
  ];

  const audioData = [
    audioImages.audio1,
    audioImages.audio2,
    audioImages.audio3,
    audioImages.audio4,
  ];

  const handleImagePress = (image) => {
    console.log("Image clicked:", image);
    // You can navigate or perform any action here
  };

  return (
    <ScrollView style={styles.container}>
      {/* Avatar Section */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.avatarSection}
      >
        {avatars.map((avatar, index) => (
          <Avatar
            key={index}
            rounded
            source={avatar}
            size="medium"
            containerStyle={styles.avatarContainer}
          />
        ))}
      </ScrollView>

      {/* Top Trending Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Top Trending</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {topTrending.map((image, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleImagePress(image)}
            >
              <Card containerStyle={styles.fullCard}>
                <Image source={image} style={styles.topTrendingImage} />
              </Card>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Browse Topics Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Browse Topics</Text>
        <FlatList
          data={browseTopics}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleImagePress(item)}>
              <Card containerStyle={styles.browseCard}>
                <Image source={item} style={styles.browseCardImage} />
              </Card>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={4} // Set 4 columns
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Streaming Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Streaming</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {streamingData.map((image, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleImagePress(image)}
            >
              <Card containerStyle={styles.fullCard}>
                <Image source={image} style={styles.fullCardImage} />
              </Card>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Audio Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Audio</Text>
        <FlatList
          horizontal
          data={audioData}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleImagePress(item)}>
              <Card containerStyle={styles.fullCard}>
                <Image source={item} style={styles.audioCardImage} />{" "}
                {/* Use the new style here */}
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  avatarSection: {
    marginBottom: 25,
    flexDirection: "row",
  },
  avatarContainer: {
    marginHorizontal: 12, // Increased from 10 to 15 for more spacing
  },

  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  horizontalScroll: {
    marginBottom: 20,
  },
  fullCard: {
    width: 150, // You can adjust this width as needed
    marginHorizontal: 5, // Reduce margin to fit more images if needed
    padding: 0,
    borderRadius: 10,
    overflow: "hidden",
  },
  browseCard: {
    flex: 1,
    margin: 10,
    padding: 0,
    borderRadius: 10,
    overflow: "hidden",
  },
  browseCardImage: {
    width: 82,
    height: 82, // Further increased height
    resizeMode: "cover",
  },
  topTrendingImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  fullCardImage: {
    width: "100%",
    height: 200, // Increased height for streaming images
    resizeMode: "cover",
  },
  audioCardImage: {
    width: 70,
    height: 0, // Adjusted height for audio images
    resizeMode: "cover",
  },
});
