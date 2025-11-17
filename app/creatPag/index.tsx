import { ButtonCustom } from "@/components/Button";
import InputLoc from "@/components/InputLoc";
import { Task } from "@/services/interface";
import { saveLocation } from "@/services/save"; 
import { router } from "expo-router";
import { useState } from "react";
import { Alert, View } from "react-native";

export default function Index() {

    const [lugar, setLugar] = useState<string> ('');
    const [longitude, setLongitude] = useState<string>('');
    const [latitude, setLatitude] = useState<string>('');

    const handleSave = async () => {
        if (!lugar || !longitude || !latitude) {
            Alert.alert("Erro", "Preencha todos os campos.");
            return;
        }

        const newLocation: Task = {
            id: String(Date.now()),
            title: lugar,
            latitude: latitude,
            longitude: longitude,
        };

        
        await saveLocation(newLocation);

        Alert.alert("Sucesso!", "Local salvo.");
        
        setLugar('');
        setLatitude('');
        setLongitude('');
        router.back();
    };

    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 16,
            paddingVertical: 10,
            gap: 20 
        }}>
            <InputLoc
                placeholder='Nome do local'
                value={lugar}
                onChangeText={setLugar}
            />
            <InputLoc
                placeholder='Latitude'
                value={latitude}
                onChangeText={setLatitude}
                keyboardType="numeric"
            />
            <InputLoc
                placeholder='Longitude'
                value={longitude}
                onChangeText={setLongitude}
                keyboardType="numeric"
            />
      
            <ButtonCustom title="Salvar" onPress={handleSave} />
        </View>
    )
}