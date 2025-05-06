import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Text>홈페이지</Text>
      <Button
        title="상세 페이지로 이동"
        onPress={() => router.push("/(tabs)/profile")}
      />
    </SafeAreaView>
  );
}
