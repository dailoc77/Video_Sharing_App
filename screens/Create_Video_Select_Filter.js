import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const filterOptions = [
  {
    id: "1",
    name: "Film",
    icon: require("../assets/Data/Create_Video_Select_Filter/Image_45.png"),
  },
  {
    id: "2",
    name: "Black white",
    icon: require("../assets/Data/Create_Video_Select_Filter/Image_38.png"),
  },
  {
    id: "3",
    name: "Natural",
    icon: require("../assets/Data/Create_Video_Select_Filter/Image_40.png"),
  },
  {
    id: "4",
    name: "Art",
    icon: require("../assets/Data/Create_Video_Select_Filter/Image_39.png"),
  },
  {
    id: "5",
    name: "Vintage",
    icon: require("../assets/Data/Create_Video_Select_Filter/Image_41.png"),
  },
  {
    id: "6",
    name: "Spring",
    icon: require("../assets/Data/Create_Video_Select_Filter/Image_42.png"),
  },
  {
    id: "7",
    name: "Baby",
    icon: require("../assets/Data/Create_Video_Select_Filter/Image_43.png"),
  },
  {
    id: "8",
    name: "Contrast",
    icon: require("../assets/Data/Create_Video_Select_Filter/Image_44.png"),
  },
];

const filterCategories = ["For you", "Trending", "Saved"];

export default function App() {
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("For you");

  const toggleFilterModal = () => {
    setFilterModalVisible(!isFilterModalVisible);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Data/Create_Video_Select_Filter/Image_35.png")} // Replace with your background image path
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.addAudioContainer}>
          <TouchableOpacity>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: "70%" }}>
            <Image
              source={require("../assets/Data/Create_Video_Select_Filter/Button_9.png")}
            />
          </TouchableOpacity>
        </View>
        {/* Side Buttons */}
        <View style={styles.sideButtons}>
          <TouchableOpacity style={styles.sideButton}>
            <Image
              source={require("../assets/Data/Create_Video_Select_Filter/Repeat_2.png")}
              style={styles.icon}
            />
            <Text style={styles.iconLabel}>Flip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sideButton}
            onPress={toggleFilterModal}
          >
            <Ionicons name="filter" size={24} color="white" />
            <Text style={styles.iconLabel}>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideButton}>
            <Ionicons name="timer-outline" size={24} color="white" />
            <Text style={styles.iconLabel}>Timer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideButton}>
            <Ionicons name="flash" size={24} color="white" />
            <Text style={styles.iconLabel}>Flash</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Filter Modal */}
      <Modal
        visible={isFilterModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleFilterModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={toggleFilterModal}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Add Filter</Text>
            {/* Filter Categories */}
            <View style={styles.categoryContainer}>
              {filterCategories.map((category) => (
                <TouchableOpacity
                  key={category}
                  onPress={() => setActiveCategory(category)}
                  style={[
                    styles.categoryButton,
                    activeCategory === category && styles.activeCategoryButton,
                  ]}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      activeCategory === category && styles.activeCategoryText,
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <FlatList
              data={filterOptions}
              keyExtractor={(item) => item.id}
              numColumns={5}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.filterOption}>
                  <Image source={item.icon} style={styles.filterIcon} />
                  <Text style={styles.filterText}>{item.name}</Text>
                </TouchableOpacity>
              )}
              contentContainerStyle={{ paddingBottom: 20 }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  backgroundImage: {
    flex: 1,
    aspectRatio: 9 / 16,
    width: "100%",
    height: "100%",
  },
  addAudioContainer: {
    position: "absolute",
    top: 25,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  sideButtons: {
    position: "absolute",
    top: 80,
    right: 10,
    alignItems: "center",
  },
  sideButton: {
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  iconLabel: {
    color: "white",
    fontSize: 12,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "100%",
    height: "50%",
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 24,
    color: "#888",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  categoryButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  activeCategoryButton: {
    borderBottomWidth: 2,
    borderBottomColor: "pink",
  },
  categoryText: {
    fontSize: 14,
    color: "gray",
  },
  activeCategoryText: {
    color: "pink",
  },
  filterOption: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
  },
  filterIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  filterText: {
    fontSize: 10,
    textAlign: "center",
    color: "gray",
  },
});
