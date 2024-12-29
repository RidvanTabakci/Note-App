import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  noteCard: {
    backgroundColor: '#960CFF',
    width: windowWidth * 0.4,
    height: windowWidth * 0.6,
    borderRadius: windowWidth * 0.04,

  },
  title: {
    fontWeight: 'bold',
    color:"white",
    fontSize: 16,
    marginLeft:windowWidth*0.02,
    marginTop:windowWidth*0.01,
    marginBottom: 5,
  },
  note: {
    fontSize: 14,
    color: 'white',
    marginLeft:windowWidth*0.02,
  },
});
export default styles;
