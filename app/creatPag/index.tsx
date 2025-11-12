import { ButtonCustom } from "@/components/Button";
import InputLoc from "@/components/InputLoc";
import { useState } from "react";
import { Alert, Text, View } from "react-native";


export default function Index(){

    const [lugar, setLugar] = useState<string>('');
    const [longitude, setLongitude] = useState<string>('');
    const [latitude, setLatitude] = useState<string>('');

    const SaveLocation = () => {
        if (!lugar || !longitude || !latitude) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }
        
        const newLocation: Task = {
            id: String(Date.now()),
            title: lugar,
            longitude: longitude,
            latitude: latitude
        };

        // 4. Sua lógica de salvar já atualiza o 'lista' corretamente
        setLista(currentList => [...currentList, newLocation]);

        setLugar('');
        setLongitude('');
        setLatitude('');
        Alert.alert("Sucesso!", "Local salvo.");
    };
    
    return (
            <View style={{
            flex: 1,
            paddingHorizontal: 16,
            paddingVertical: 10,
        }}> 
            <View>
                  <InputLoc
                    placeholder= 'Nome do local'
                    value={lugar}
                    onChangeText={(value)=> setLugar(value)}
                    />
                    <InputLoc
                    placeholder= 'Longiude'
                    value={longitude}
                    onChangeText={(value)=> setLongitude(value)}
                    />
                    <InputLoc
                    placeholder= 'Latitude'
                    value={latitude}
                    onChangeText={(value)=> setLatitude(value)}
                    />

                  <ButtonCustom 
                    title="Salvar"
                    onPress={SaveLocation}
                    />

            </View>
        
        </View>
    )
}
