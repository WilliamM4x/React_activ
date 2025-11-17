import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from './interface';

const STORAGE_KEY = '@my-locations';

export async function getLocations(): Promise<Task[]> {
    try {
        const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        console.error("Erro ao carregar locais.", e);
        return [];
    }
}

export async function saveLocation(newLocation: Task): Promise<void> {
    try {
       
        const currentLocations = await getLocations();
        const updatedLocations = [...currentLocations, newLocation];
        
        const jsonValue = JSON.stringify(updatedLocations);
        await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
        console.error("Erro ao salvar local.", e);
    }
}

export async function updateLocation(updatedTask: Task): Promise<void> {
    try {
        const currentLocations = await getLocations();
        // Encontra o item pelo ID e o substitui
        const updatedLocations = currentLocations.map(item =>
            item.id === updatedTask.id ? updatedTask : item
        );
        
        const jsonValue = JSON.stringify(updatedLocations);
        await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
        console.error("Erro ao atualizar local.", e);
    }
}

export async function deleteLocation(id: string): Promise<void> {
    try {
        const currentLocations = await getLocations();
        // Filtra o array para remover o item com o ID
        const updatedLocations = currentLocations.filter(item => item.id !== id);
        
        const jsonValue = JSON.stringify(updatedLocations);
        await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
        console.error("Erro ao deletar local.", e);
    }
}