import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import NoteCard from '../../Components/NoteCard';
import styles from './styles';

const Home = ({navigation, route}) => {
  const [notes, setNotes] = useState([]);

  // Home ekranına geri dönüldüğünde notları yeniden yükle
  useFocusEffect(
    React.useCallback(() => {
      const loadNotes = async () => {
        try {
          const storedNotes = await AsyncStorage.getItem('@notes');
          if (storedNotes) {
            setNotes(JSON.parse(storedNotes));
          }
        } catch (error) {
          console.error('Notlar yüklenirken bir hata oluştu:', error);
        }
      };

      loadNotes();
    }, [])
  );

  // Yeni eklenen notları kontrol et
  useEffect(() => {
    if (route.params?.updatedNotes) {
      setNotes(route.params.updatedNotes);
    }
  }, [route.params?.updatedNotes]);

  const handleEditNote = (note, index) => {
    navigation.navigate('NewNote', {note, index});
  };

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity>
          <Image
            source={require('../../Assets/icons/menu1.png')}
            style={styles.menu}></Image>
        </TouchableOpacity>
        <Text style={styles.title}>Notlar</Text>
        <TouchableOpacity>
          <Image
            source={require('../../Assets/icons/search.png')}
            style={styles.searchIcon}></Image>
        </TouchableOpacity>
      </View>
      <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.notesContainer}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => handleEditNote(item, index)}
            style={styles.noteCardContainer}>
            <NoteCard title={item.title} note={item.note} />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.addNoteButton}
        onPress={() => navigation.navigate('NewNote')}>
        <Image
          source={require('../../Assets/icons/edit.png')}
          style={styles.addNoteIcon}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
