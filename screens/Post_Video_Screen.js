import React from "react";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet, Image, Dimensions } from "react-native";

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
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 10,
  },
  image: {
    width: "50%", // Adjust the width as needed
    height: "40%", // Adjust the height as needed
  },
});

export default Post_Video_Screen;
