import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/AppNavigation'
import { withExpoSnack } from 'nativewind';

export default function App() {
  return (
    <AppNavigation />
  );
}
