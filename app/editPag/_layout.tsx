import { Feather } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen
        name="index"
        options={{
          title: "Edite a localização", 
          headerRight: () => (
            <Pressable
              onPress={() => router.push('/')}
              style={{ marginRight: 15 }}
            >
              <Feather name="home" size={24} color="white" />
            </Pressable>
          ),
        }}
      />

  </Stack>;
}