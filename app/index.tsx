import FloatButton from "@/components/FloatButton";
import { Task } from "@/services/interface";
import { getLocations } from "@/services/save";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { View, StyleSheet, ActivityIndicator, Text, Button, FlatList } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from 'expo-location';
import { isTablet } from "@/utils/get-dimensions";
import { default as CardCustom } from "../components/Card"; 

const tabletLayout = isTablet();

export default function Index() {
    const [locations, setLocations] = useState<Task[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [permissionStatus, setPermissionStatus] = useState<Location.PermissionStatus | null>(null);
    const [userRegion, setUserRegion] = useState<Region | undefined>(undefined);

    const setupLocation = async () => {
        let { status } = await Location.getForegroundPermissionsAsync();

        if (status !== 'granted') {
            let { status: newStatus } = await Location.requestForegroundPermissionsAsync();
            status = newStatus;
        }
        
        setPermissionStatus(status);

        if (status === 'granted') {
            try {
                const location = await Location.getCurrentPositionAsync({});
                setUserRegion({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                });
            } catch (error) {
                console.warn("Erro ao buscar localização:", error);
            }
        }
        return status;
    };

    const loadSavedLocations = async () => {
        const data = await getLocations();
        setLocations(data);
    };

    useFocusEffect(
        useCallback(() => {
            async function loadData() {
                setIsLoading(true);
                await setupLocation();
                await loadSavedLocations();
                setIsLoading(false);
            }
            loadData();
        }, [])
    );

    const handleMarkerPress = (item: Task) => {
        const params = new URLSearchParams({
            id: item.id,
            title: item.title,
            latitude: item.latitude,
            longitude: item.longitude,
        });
        router.push(`/editPag?${params.toString()}`);
    };

    if (isLoading || permissionStatus === null) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (permissionStatus !== 'granted') {
        return (
            <View style={styles.loadingContainer}>
                <Text style={{ textAlign: 'center', marginBottom: 20 }}>
                    Precisamos da sua permissão para mostrar sua localização no mapa.
                </Text>
                <Button title="Conceder Permissão" onPress={setupLocation} />
            </View>
        );
    }
    const LocationList = () => (
        <View style={styles.listContainer}>
            <FlatList
                data={locations}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                ListEmptyComponent={
                    <View style={{ alignItems: 'center', marginTop: 50 }}>
                        <Text style={{ fontSize: 16, color: '#666' }}>
                            Nenhum local salvo.
                        </Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <CardCustom
                        title={item.title}
                        latitude={item.latitude}
                        longitude={item.longitude}
                        onClickCard={() => handleMarkerPress(item)}
                    />
                )}
            />
        </View>
    );
    return (
        <View style={[
            styles.container,
         
            tabletLayout && styles.tabletContainer
        ]}>
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    region={userRegion}
                    showsUserLocation={true}
                >
                    {locations.map((item) => (
                        <Marker
                            key={item.id}
                            coordinate={{
                                latitude: parseFloat(item.latitude),
                                longitude: parseFloat(item.longitude),
                            }}
                            title={item.title}
                            onPress={() => handleMarkerPress(item)}
                        />
                    ))}
                </MapView>
            </View>

            {tabletLayout && <LocationList />}

            <FloatButton onPress={() => router.push('/creatPag')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    tabletContainer: {
        flexDirection: 'row', 
    },
    mapContainer: {
        flex: 1, 
    },
    listContainer: {
        flex: 1, 
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderLeftWidth: 1,
        borderLeftColor: '#ccc',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
});