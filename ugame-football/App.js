import { StatusBar } from 'expo-status-bar';

import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="items-center justify-center flex-1 bg-zinc-900">
      <Text className="text-4xl font-bold text-white">Jesus</Text>
      <StatusBar style="light" />
    </View>
  );
}
