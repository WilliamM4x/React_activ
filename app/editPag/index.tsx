import { ButtonCustom } from "@/components/Button";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";


export default function Index(){
 
    const {title, description} = useLocalSearchParams();
    console.log(title, description)

    return (
            <View style={{
            flex: 1,
            paddingHorizontal: 16,
            paddingVertical: 10,
        }}> 
            <View>
                  <Text>Página de edição de localização</Text>
                  <ButtonCustom title="Salvar"/>
                  <ButtonCustom title="Deletar"/>
            </View>
        
        </View>
    )
}
