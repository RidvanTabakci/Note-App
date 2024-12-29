import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000', // Siyah arka plan
      padding: 20,
    },
    titleInput: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 10,
      marginLeft:windowWidth*0.07,
      borderBottomWidth: 1,
      width:windowWidth*0.7,
      borderColor: '#6C3483', // Mor çizgi
    },
    noteInput: {
      flex: 1,
      fontSize: 16,
      color: 'white',
      backgroundColor: '#6C3483',
      borderRadius: 10,
      padding: 10,
      textAlignVertical: 'top', // Yazının üstten başlaması için
    },
    backButton:{
      width:windowWidth*0.06,
      height:windowWidth*0.06,
      position:"absolute",
      marginTop:windowWidth*0.1,
      marginLeft:windowWidth*0.05,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    backButtonImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    bin:{
      width:windowWidth*0.06,
      height:windowWidth*0.06,
      position:"absolute",
      marginTop:windowWidth*0.1,
      marginLeft:windowWidth*0.84,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Saydam siyah arka plan
    },
    modalContent: {
      width: windowWidth * 0.8, // Genişliğin %80'i
      backgroundColor: '#fff',
      borderRadius: windowWidth * 0.03, // Genişliğe göre köşe yuvarlama
      padding: windowWidth * 0.05,
      alignItems: 'center',
    },
    modalText: {
      fontSize: windowWidth * 0.045,
      color: '#333',
      marginBottom: windowHeight * 0.03, // Alt boşluk
      textAlign: 'center',
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    modalButton: {
      flex: 1,
      backgroundColor: '#007bff',
      paddingVertical: windowHeight * 0.015,
      marginHorizontal: windowWidth * 0.02,
      borderRadius: windowWidth * 0.02,
      alignItems: 'center',
    },
    modalButtonText: {
      color: '#fff',
      fontSize: windowWidth * 0.04,
      fontWeight: 'bold',
    },

  });
  
  export default styles;
  