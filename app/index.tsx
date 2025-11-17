import FloatButton from "@/components/FloatButton";
import { Task } from "@/services/interface";
import { getLocations } from "@/services/save";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Index() {
    const [locations, setLocations] = useState<Task[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useFocusEffect(
        useCallback(() => {
            async function loadData() {
                setIsLoading(true);
                const data = await getLocations();
                setLocations(data);
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

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
          
            <MapView
                style={styles.map}
             
                initialRegion={
                    locations.length > 0 ? {
                        latitude: parseFloat(locations[0].latitude),
                        longitude: parseFloat(locations[0].longitude),
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }
                    : undefined 
                }
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

            <FloatButton onPress={() => router.push('/creatPag')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});