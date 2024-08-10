import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ScrollView, Image, TextInput } from 'react-native';

const { width } = Dimensions.get('window');

const buttonWidth = 180;
const buttonHeight = 50; // Установите нужную высоту кнопки
const imageWidth = width * 0.9; // 90% ширины экрана
const listContainerWidth = width * 0.85; // 85% ширины экрана для контейнера списка

const searchIcon = require('../assets/images/search.png');
const iconUnselected = require('../assets/images/arrow_up2.png'); // Замените на путь к вашей иконке невыбранного состояния
const iconSelected = require('../assets/images/arrow_down2.png'); // Замените на путь к вашей иконке выбранного состояния

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState(''); // состояние для строки поиска
  const [borderColor, setBorderColor] = useState('#ccc'); // Цвет границы для строки поиска
  const [activeIndex, setActiveIndex] = useState(null); // Состояние для управления видимостью текста в каждом элементе списка

  const handleFocus = () => {
    setBorderColor('#FE5631'); // Цвет границы при фокусе
  };

  const handleBlur = () => {
    setBorderColor('#ccc'); // Цвет границы, когда фокус потерян
  };

  // Список элементов с текстом
  const listItems = [
    { title: 'Реклама на портале', content: 'В верхнем правом углу сайта кнопка «Регистрация», нажав на неё вы переходите к заполнению информации, которая будет отображаться в вашей анкете. Инстаграм мы берем только для продвижения в социальных сетях. Фото мастера обязательно, по статистике клиент выбирает мастера, который ему внешне близок. Фото работ - чем больше вы добавите, тем лучше, клиент увидит ваше портфолио и сможет принять решение.Есть профессии где достаточно и одного фото (психолог, репетитор и тд), но если вы фотограф, мастер маникюра, парикмахер или делаете тортики на заказ или рисуете картины, без фото работ, как клиент вас сможет оценить? Отнеситесь к заполнению анкеты максимально серьезно, мы помогаем вас найти, но продаете себя вы сами.' },
    { title: 'Кого здесь можно найти?', content: 'Наш портал помогает найти специалистов в различных областях, стоит выбрать город и категорию услуг, далее вы увидите всех представленных в нем специалистов.' },
    { title: 'Чем мы лучше других?', content: 'Мы постарались сделать наиболее удобный и простой в использовании поисковик по услугам в Израиле, без навязчивой рекламы, который отвечает всем современным требованиям по использованию с любых устройств.' },
    { title: 'Помогите нам стать лучше!', content: 'Если вы заметили на портале какую-либо неточность, ошибку или опечатку, пожалуйста, дайте нам знать об этом. Так же вы можете отправить нам на почту любые ваши пожелания связанные с функционалом и наполнением портала, которые будут рассмотрены в обязательном порядке.' },
    { title: 'Кто мы?', content: 'Мы - молодая команда репатриантов, которые в свое время столкнулись с трудностями адаптации и поиска необходимых услуг в Израиле, поэтому мы решили создать этот портал для удобства всех русскоязычных пользователей.' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerText}>Найти лучшего профи</Text>

        <View style={styles.searchContainer}>
          <TextInput
            style={[styles.searchInput, { borderColor }]}
            placeholder="Поиск..."
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <TouchableOpacity style={styles.searchButton} onPress={() => alert('Search button pressed')}>
            <Image source={searchIcon} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => alert('Find City')}>
          <Text style={styles.buttonText}>ВЫБРАТЬ ГОРОД</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => alert('Online Services')}>
          <Text style={styles.buttonText}>ONLINE УСЛУГИ</Text>
        </TouchableOpacity>

        {/* Кликабельная картинка */}
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate('Help')}>
          <Image 
            source={require('../assets/images/pr.jpg')} // Замените на путь к вашему изображению
            style={styles.image}
          />
        </TouchableOpacity>

        {/* Список с раскрывающимися элементами */}
        <View style={[styles.listContainer, { width: listContainerWidth }]}>
          <Text style={styles.listHeader}>О нашем портале</Text>
          <View style={styles.listContentContainer}>
            {listItems.map((item, index) => (
              <View key={index} style={styles.listItem}>
                <TouchableOpacity onPress={() => setActiveIndex(activeIndex === index ? null : index)} style={styles.listItemContent}>
                  <Text style={[styles.listTitle, { color: activeIndex === index ? '#FE5631' : '#000' }]}>
                    {item.title}
                  </Text>
                  <Image 
                    source={activeIndex === index ? iconSelected : iconUnselected} 
                    style={styles.icon}
                  />
                </TouchableOpacity>
                {activeIndex === index && (
                  <Text style={styles.listContent}>{item.content}</Text>
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    width: width * 0.4, // сохраняем ширину строки поиска
    height: 50,
    borderColor: '#ccc', // начальный цвет границы
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchButton: {
    marginLeft: 0, // Убираем отступ слева для плотного прилегания к строке поиска
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    width: 35, // Подходящая ширина для иконки
    height: 50 * 1151 / 792, // Поддержка соотношения сторон, соответствующего высоте строки поиска
    resizeMode: 'contain',
  },
  scrollContainer: {
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#F5F4F8',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    color: '#000000',
  },
  button: {
    width: buttonWidth,
    height: buttonHeight,
    backgroundColor: '#FE5631',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginTop: 20,
    width: imageWidth,
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 2,
    resizeMode: 'contain',
  },
  listContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: 40,
    borderRadius: 12,
  },
  listHeader: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContentContainer: {
    width: '100%',
    marginBottom: 30,
  },
  listItem: {
    width: '100%',
    borderWidth: 0,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },
  listItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  listContent: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    textAlign: 'left',
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default HomeScreen;