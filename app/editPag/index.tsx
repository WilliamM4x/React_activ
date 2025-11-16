import { ButtonCustom } from "@/components/Button";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";


export default function Index(){
 
    const {title, latitude,longitude} = useLocalSearchParams();
    console.log(title, latitude,longitude,)

    return (
            <View style={{
            flex: 1,
            paddingHorizontal: 16,
            paddingVertical: 10,
        }}> 
            <View>
                  <Text>Página de edição de localização</Text>
                 {/* <ButtonCustom title="Salvar"/>
                  <ButtonCustom title="Deletar"/> */}
            </View>
        
        </View>
    )
}
