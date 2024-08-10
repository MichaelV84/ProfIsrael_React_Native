// screens/HelpScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity , Image, Linking} from 'react-native';
import Header from '../components/Header';

const handleWhatsAppPress = () => {
    Linking.openURL('whatsapp://send?phone=+0539578359');
  };



const HelpScreen = ({ navigation }) => {
  return (
    
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Возникли вопросы?</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>Вопросы по размещению анкеты?</Text>
          <Text style={styles.content}>Вопросы по размещению рекламы?</Text>
          <Text style={styles.content}>Любые другие вопросы?</Text>
          <TouchableOpacity style={styles.button} onPress={handleWhatsAppPress}>
            <Text style={styles.buttonText}>Задайте нам их в WhatsApp</Text>
            <Image 
              source={require('../assets/images/ic_whatsapp.png')} // Убедитесь, что путь правильный
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.content}>или напишите на почту mail@profisrael.com</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 70,
  },
  scrollView: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F5F4F8',
    marginBottom: 40,
  },
  contentContainer: {
    width: '95%',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,
    color: 'black',
    marginBottom: 10,
  },
  content: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    color: '#7D768D',
    fontWeight:'700',
  },
  button: {
    flexDirection: 'row', // Добавлено для размещения текста и иконки в одну строку
    alignItems: 'center', // Центрирует содержимое по вертикали
    marginVertical: 20,
    backgroundColor: '#25D366',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
    marginRight: 10, // Добавляет отступ между текстом и иконкой
  },
  icon: {
    width: 20, // Установите желаемый размер иконки
    height: 20, // Установите желаемый размер иконки
  },
});

export default HelpScreen;