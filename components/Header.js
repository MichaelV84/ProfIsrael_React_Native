import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Linking } from 'react-native';
import Modal from 'react-native-modal';

const { width } = Dimensions.get('window');
const sectionWidth = width / 3;
const logoWidth = sectionWidth * 0.85;
const logoHeight = 40;

const Header = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showMenu = () => setModalVisible(true);
  const hideMenu = () => setModalVisible(false);

  const handleNavigateHome = () => {
    navigation.navigate('Home');
    hideMenu(); // Закрыть меню после навигации
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.leftSection} onPress={handleNavigateHome}>
        <Image source={require('../assets/images/logo.png')} style={[styles.logo, { width: logoWidth, height: logoHeight }]} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.centerSection} onPress={showMenu}>
        <Image source={require('../assets/images/menu.png')} style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.rightSection} onPress={() => Linking.openURL('https://profisrael.com/login/')}>
        <View style={styles.buttonContainer}>
          <Image source={require('../assets/images/icon_login.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>ВХОД</Text>
        </View>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} onBackdropPress={hideMenu}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.modalOption} onPress={handleNavigateHome}>
            <Text style={styles.modalOptionText}>На главную</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption} onPress={() => {
            navigation.navigate('Contacts');
            hideMenu(); // Закрыть меню после навигации
          }}>
            <Text style={styles.modalOptionText}>Наши контакты</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption} onPress={() => {
            Linking.openURL('https://www.instagram.com/profi.israel/');
            hideMenu(); // Закрыть меню после перехода по ссылке
          }}>
            <Text style={styles.modalOptionText}>Instagram</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
headerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 120,
    position: 'absolute',
    top: 0,
    backgroundColor: '#FFFFFF',
    // paddingTop: 27, // Добавляем отступ сверху
    },
  leftSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
  },
  menuIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F4F8',
    borderRadius: 12,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginRight: 10,
  },
  buttonIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  buttonText: {
    color: '#000000',
    fontSize: 13,
    fontWeight: '500',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  modalOptionText: {
    fontSize: 18,
    color: '#000000',
  },
});

export default Header;