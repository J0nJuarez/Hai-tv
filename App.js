import { StyleSheet, Text, View } from 'react-native';
import Sidebarhai from './components/Sidebar';
import Videoprin from './components/videoprin';

export default function App() {
  return (
 
   <View style={styles.container}>
      <Sidebarhai/>
      <Videoprin/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#00040B',
  },
});
