import Feather from "@expo/vector-icons/build/Feather";
import { router, Stack } from "expo-router";
import { Pressable } from "react-native";


export default function RootLayout() {
  return <Stack>
    <Stack.Screen
        name="index"
        options={{
          title: "Mapa", 
          headerRight: () => (
            <Pressable 
                onPress={() => router.push('/favoritosPag')} 
                style={{ marginRight: 15 }}
            >
                <Feather name="list" size={24} color="white" />
            </Pressable>
          ),
        }}
      />
    <Stack.Screen
        name="favoritosPag"
        options={{ 
          headerShown: false 
        }}
      />
    <Stack.Screen
      name="creatPag"
        options={{ 
          headerShown: false 
        }}
    />  
    <Stack.Screen
      name="editPag"
      options={{ 
        headerShown: false 
      }}
    />
  </Stack>;
}
