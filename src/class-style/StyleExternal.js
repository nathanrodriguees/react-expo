import { StyleSheet } from 'react-native';
 
export const style = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FABACA'
    },
    title: {
      paddingTop: 80,
      fontSize: 28,
      fontWeight: 'bold',
      color: '#000'
    },
    paragraph: {
      paddingTop: 40,
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white',
    }
  });