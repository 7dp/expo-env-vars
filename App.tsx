import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const flavor = process.env.EXPO_PUBLIC_FLAVOR;

  return (
    <View style={styles.container}>
      <Text>API URL: {apiUrl}</Text>
      <Text>FLAVOR: {flavor}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
