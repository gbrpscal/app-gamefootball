import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Header from '../../components/Header';

export default function Home() {
  return (
    <View className="items-center justify-center flex-1 bg-zinc-900">
    <Header/>
      <Text className="text-4xl font-bold text-white">Jesus</Text>
      <StatusBar style="light" />
    </View>
  );
}
