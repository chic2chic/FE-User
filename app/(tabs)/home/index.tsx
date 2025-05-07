import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View className="">
        <Text className="font-bold text-blue-500">Hello World!</Text>
      </View>
    </SafeAreaView>
  );
}
