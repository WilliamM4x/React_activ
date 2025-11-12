import { ButtonCustom } from "@/components/Button";
import { Text, View } from "react-native";


export default function Index(){
 
    return (
            <View style={{
            flex: 1,
            paddingHorizontal: 16,
            paddingVertical: 10,
        }}> 
            <View>
                  <Text>Página de criação de localização</Text>
                  <ButtonCustom title="Salvar"/>
            </View>
        
        </View>
    )
}
