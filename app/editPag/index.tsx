import { ButtonCustom } from "@/components/Button";
import InputLoc from "@/components/InputLoc";
import { Task } from "@/services/interface";
import { updateLocation, deleteLocation } from "@/services/save";
import { useLocalSearchParams, router } from "expo-router";
import { useState } from "react"; 
import { Alert, View, StyleSheet } from "react-native";

export default function EditPage() {

    const params = useLocalSearchParams();

    const id = (params.id as string) || '';
    const title = (params.title as string) || '';
    const latitude = (params.latitude as string) || '';
    const longitude = (params.longitude as string) || '';

    const [lugar, setLugar] = useState(title);
    const [lat, setLat] = useState(latitude);
    const [lon, setLon] = useState(longitude);

    const handleUpdate = async () => {
        if (!lugar || !lon || !lat) {
            Alert.alert("Erro", "Preencha todos os campos.");
            return;
        }

        const updatedTask: Task = {
            id: id,
            title: lugar,
            latitude: lat,
            longitude: lon,
        };

        await updateLocation(updatedTask);
        Alert.alert("Sucesso", "Local atualizado!");
        router.back(); 
    };

    const handleDelete = async () => {
        Alert.alert(
            "Confirmar Exclusão",
            "Tem certeza que deseja deletar este local?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Deletar",
                    style: "destructive",
                    onPress: async () => {
                        await deleteLocation(id); 
                        Alert.alert("Deletado!", "Local removido.");
                        router.back();
                    },
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <InputLoc
                placeholder='Nome do local'
                value={lugar}
                onChangeText={setLugar}
            />
            <InputLoc
                placeholder='Latitude'
                value={lat}
                onChangeText={setLat}
                keyboardType="numeric"
            />
            <InputLoc
                placeholder='Longitude'
                value={lon}
                onChangeText={setLon}
                keyboardType="numeric"
            />
            
            <ButtonCustom title="Atualizar" onPress={handleUpdate} />
            
            <ButtonCustom 
                title="Deletar" 
                onPress={handleDelete}
                variant="SECONDARY" 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 10,
        gap: 20
    }
});