import { ButtonCustom } from "@/components/Button";
import FloatButton from "@/components/FloatButton";
import { router } from "expo-router";
import { View } from "react-native";


export default function Index(){
 
    return (
            <View style={{
            flex: 1,
            paddingHorizontal: 16,
            paddingVertical: 10,
        }}> 
            <View>
                  <ButtonCustom title="Clique aqui"/> 
            </View>
          
           
            <FloatButton onPress={() => router.push('/creatPag')}/>
        </View>
    )
}
