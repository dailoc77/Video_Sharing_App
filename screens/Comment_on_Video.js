import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Sample comments data
// Cập nhật dữ liệu bình luận với đường dẫn ảnh cục bộ
const comments = [
    { id: '1', name: 'Laura', text: 'So cute. I wish my cat was like that', time: '6 mins ago', avatar: require('../assets/Data/Follow/Avatar_37.png') },
    { id: '2', name: 'Lauren', text: 'Look at her, as if "mom, I want food"', time: '20 mins ago', avatar: require('../assets/Data/Follow/Avatar_31.png') },
    { id: '3', name: 'Liz', text: 'My cats also often wait for me to come home from work in front of the door hehe', time: '24 mins ago', avatar: require('../assets/Data/Follow/Avatar_35.png') },
    { id: '4', name: 'Anne', text: 'Awwwww', time: '30 mins ago', avatar: require('../assets/Data/Follow/Avatar_33.png') },
    { id: '5', name: 'Larry', text: 'I want to cuddle', time: '20 mins ago', avatar: require('../assets/Data/Follow/Avatar_36.png') },
  ];
  
  export default function App() {
    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
  
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/Data/Comment_on_Video/Image_24.png')} // Thay bằng đường dẫn ảnh nền của bạn
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <TouchableOpacity style={styles.commentIcon} onPress={toggleModal}>
            <Ionicons name="chatbubble-outline" size={32} color="white" />
          </TouchableOpacity>
        </ImageBackground>
  
        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={toggleModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>700 comments</Text>
              <FlatList
                data={comments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.comment}>
                    <View style={styles.commentHeader}>
                      <Image source={item.avatar} style={styles.avatar} />
                      <View style={styles.commentInfo}>
                        <Text style={styles.commentName}>{item.name}</Text>
                        <Text style={styles.commentTime}>{item.time}</Text>
                      </View>
                    </View>
                    <Text style={styles.commentText}>{item.text}</Text>
                  </View>
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
      backgroundColor: '#000',
    },
    backgroundImage: {
      flex: 1,
      aspectRatio: 9 / 16,
      width: '100%',
      height: '100%',
    },
    commentIcon: {
      position: 'absolute',
      bottom: 40,
      right: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 10,
      borderRadius: 50,
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '100%',
      height: '50%',
      backgroundColor: 'white',
      padding: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 1,
    },
    closeButtonText: {
      fontSize: 24,
      color: '#888',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    comment: {
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      paddingVertical: 10,
    },
    commentHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    commentInfo: {
      flex: 1,
    },
    commentName: {
      fontWeight: 'bold',
    },
    commentTime: {
      color: '#888',
      fontSize: 12,
    },
    commentText: {
      fontSize: 14,
    },
  });
  
