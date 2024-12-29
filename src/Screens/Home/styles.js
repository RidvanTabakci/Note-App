import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  menu: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  searchIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  notesContainer: {
    marginLeft:windowWidth*0.04
  },
  noteCardContainer: {
    flex: 1,
    margin: 5,
    maxWidth: windowWidth * 0.45, // İki sütunlu düzen için genişlik
  },
  addNoteButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#6a0dad',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addNoteIcon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
});

export default styles;