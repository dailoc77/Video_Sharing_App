import React from "react";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { TextInput, Text } from "react-native";

const Post_Video_Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/Data/CreateVideoPostVideo/Image_56.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <TouchableOpacity>
          <Image
            source={require("../assets/Data/CreateVideoPostVideo/Button_16.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Input title"
          placeholderTextColor="rgba(0, 0, 0, 0.2)" // Placeholder with opacity to match the image
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Description</Text>
        <TextInput
          style={[styles.input, { height: 100 }]} // Assuming a larger height for the description field
          placeholder="Input description"
          placeholderTextColor="rgba(0, 0, 0, 0.2)" // Placeholder with opacity
          multiline // Allow multiple lines for the description
        />
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    flex: 0.5, // Giảm flex để hình ảnh chiếm ít không gian hơn
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 10,
    paddingBottom: 40,
  },
  image: {
    width: "100%", // Adjust the width as needed
    height: "100%", // Adjust the height as needed
  },
  inputContainer: {
    marginBottom: 30, // Spacing between inputs
    paddingHorizontal: 20, // Add padding left and right
    marginTop: -10, // Giảm khoảng cách giữa imageContainer và input
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40, // Default height for title input
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#F5F5F5", // Light gray background
  },
});

export default Post_Video_Screen;
