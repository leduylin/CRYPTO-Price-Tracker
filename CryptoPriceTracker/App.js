import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import CoinItem from './src/components/CoinItem/CoinItem';

export default function App() {
  return (
    <View style={styles.container}>
        <CoinItem/>
        <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  }
});
