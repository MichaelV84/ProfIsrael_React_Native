// screens/ContactsScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import Header from '../components/Header';

const ContactsScreen = ({ navigation }) => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:mail@profisrael.com');
  };

  const handleWhatsAppPress = () => {
    Linking.openURL('whatsapp://send?phone=+0539578359');
  };

  const handleInstagramPress = () => {
    Linking.openURL('https://instagram.com/profi.israel');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Наши контакты</Text>

        <TouchableOpacity style={styles.contactContainer} onPress={handleEmailPress}>
          <Image style={styles.icon} source={require('../assets/images/mail_logo.png')} />
          <Text style={styles.contactText}>Написать</Text>
          <Text style={styles.contactDetail}>mail@profisrael.com</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactContainer} onPress={handleWhatsAppPress}>
          <Image style={styles.icon} source={require('../assets/images/whatsapp_icon.png')} />
          <Text style={styles.contactText}>WhatsApp чат</Text>
          <Text style={styles.contactDetail}>0539578359</Text>
        </TouchableOpacity>

          <TouchableOpacity style={styles.contactContainer} onPress={handleInstagramPress}>
          <Image style={styles.icon} source={require('../assets/images/instagram_logo.png')} />
          <Text style={styles.contactText}>Подписывайтесь</Text>
          <Text style={styles.contactDetail}>@profi.israel</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:70,
    
  },
  scrollView: {
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor:'#F5F4F8',
    marginBottom:40,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,
    color: 'black',
    marginBottom:10,
  },
  contactContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff', // Цвет фона
    marginVertical: 10,
    padding: 15,
    borderRadius: 12,
  },
  icon: {
    width: 40,
    height: 40,
    marginTop: 25,
  },
  contactText: {
    marginTop: 15,
    fontSize: 20,
  },
  contactDetail: {
    marginTop: 15,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ContactsScreen;