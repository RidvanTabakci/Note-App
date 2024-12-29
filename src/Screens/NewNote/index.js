import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

const NewNote = ({navigation, route}) => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false); // Silme modalı durumu

  useEffect(() => {
    if (route.params?.note) {
      setTitle(route.params.note.title);
      setNote(route.params.note.note);
    }
  }, [route.params]);

  const handleSave = async () => {
    try {
      const newNote = {title, note};
      const existingNotes = await AsyncStorage.getItem('@notes');
      const notes = existingNotes ? JSON.parse(existingNotes) : [];

      if (route.params?.index !== undefined) {
        // Eski notu güncelle
        notes[route.params.index] = newNote;
      } else {
        // Yeni not ekle
        notes.push(newNote);
      }

      await AsyncStorage.setItem('@notes', JSON.stringify(notes));
      console.log('Not kaydedildi:', newNote);
    } catch (error) {
      console.error('Not kaydedilirken bir hata oluştu:', error);
    }
    setModalVisible(false);
    navigation.goBack();
  };

  const handleDelete = async () => {
    try {
      const existingNotes = await AsyncStorage.getItem('@notes');
      const notes = existingNotes ? JSON.parse(existingNotes) : [];

      if (route.params?.index !== undefined) {
        // Notu listeden sil
        notes.splice(route.params.index, 1);
        await AsyncStorage.setItem('@notes', JSON.stringify(notes));
        console.log('Not silindi');
      }
      setDeleteModalVisible(false); // Silme modalını kapat
      navigation.goBack(); // Home ekranına dön
    } catch (error) {
      console.error('Not silinirken bir hata oluştu:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.titleInput}
        placeholder="Başlık"
        placeholderTextColor="#aaa"
        value={title}
        onChangeText={setTitle}
      />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => setModalVisible(true)}>
        <Image
          source={require('../../Assets/icons/left-chevron.png')}
          style={styles.backButton}></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bin}
        onPress={() => setDeleteModalVisible(true)}>
        <Image
          style={styles.bin}
          source={require('../../Assets/icons/bin.png')}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.noteInput}
        placeholder="Notlarınızı buraya yazın..."
        placeholderTextColor="#aaa"
        multiline
        value={note}
        onChangeText={setNote}
      />

      {/* Kaydetme Modalı */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Kaydetmek ister misiniz?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={handleSave}>
                <Text style={styles.modalButtonText}>Kaydet</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setModalVisible(false);
                  navigation.goBack();
                }}>
                <Text style={styles.modalButtonText}>İptal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Silme Modalı */}
      <Modal
        transparent={true}
        visible={isDeleteModalVisible}
        animationType="slide"
        onRequestClose={() => setDeleteModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Notu silmek istediginizden emin misiniz?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, {backgroundColor: 'red'}]}
                onPress={handleDelete}>
                <Text style={styles.modalButtonText}>Sil</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setDeleteModalVisible(false)}>
                <Text style={styles.modalButtonText}>İptal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default NewNote;
