import React, { useState } from "react";
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

      <View style={styles.itemContainer1}>
        <Image source={require("../assets/Data/CreateVideoPostVideo/Add_hashtag.png")} />
        <Image source={require("../assets/Data/CreateVideoPostVideo/Tag_5.png")} />
      </View>

      <View style={styles.itemContainer2}>
        <Image source={require("../assets/Data/CreateVideoPostVideo/Tag_someone.png")}/>
        <Image source={require("../assets/Data/CreateVideoPostVideo/Tag_6.png")}/>
      </View>

      <View style={styles.itemContainer3}>
        <Image source={require("../assets/Data/CreateVideoPostVideo/Comments.png")}/>
        <Image source={require("../assets/Data/CreateVideoPostVideo/Switch_1.png")}/>
      </View>

      <View style={styles.itemContainer3}>
        <Image source={require("../assets/Data/CreateVideoPostVideo/Who_can_watch.png")}/>
        <Image source={require("../assets/Data/CreateVideoPostVideo/Dropdown_Button_1.png")}/>
      </View>

      <View style={styles.itemContainer1}>
        <Image source={require("../assets/Data/CreateVideoPostVideo/Also_poston.png")}/>
      </View>

      <View style={styles.itemContainer3}>
        <Image source={require("../assets/Data/CreateVideoPostVideo/Facebook.png")}/>
        <Image source={require("../assets/Data/CreateVideoPostVideo/Switch_2.png")}/>
      </View>

      <View style={styles.itemContainer3}>
        <Image source={require("../assets/Data/CreateVideoPostVideo/Twitter.png")}/>
        <Image source={require("../assets/Data/CreateVideoPostVideo/Switch_3.png")}/>
      </View>

      <View style={styles.itemContainer3}>
        <Image source={require("../assets/Data/CreateVideoPostVideo/Instagram.png")}/>
        <Image source={require("../assets/Data/CreateVideoPostVideo/Switch_4.png")}/>
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
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
    },
    image: {
      width: "100%", // Đảm bảo chiếm hết chiều rộng
      aspectRatio: 1, // Đảm bảo hình ảnh giữ tỷ lệ 1:1
    },
    inputContainer: {
      marginBottom: 30, // Khoảng cách giữa các input
      paddingHorizontal: 20,
      marginTop: -10, // Điều chỉnh khoảng cách giữa ảnh và input
    },
    inputLabel: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 5,
    },
    input: {
      height: 40, // Chiều cao cho input tiêu đề
      borderColor: "rgba(0, 0, 0, 0.1)",
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      backgroundColor: "#F5F5F5",
    },
    itemContainer1: {
      marginBottom: 20,
      paddingHorizontal: 20,
    },
    itemContainer2: {
      flexDirection: 'row',
      marginBottom: 20,
      paddingHorizontal: 20,
      alignItems: 'center',
    },
    itemContainer3: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      paddingHorizontal: 20,
      alignItems: 'center',
    },
  });

export default Post_Video_Screen;
