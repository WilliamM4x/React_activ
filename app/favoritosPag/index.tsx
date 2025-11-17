// app/favoritosPag/index.tsx
import InputSearch from "@/components/InputSearch";
import { Task } from "@/services/interface";
import { getLocations } from "@/services/save"; // Importe a função de LER
import { router, useFocusEffect } from "expo-router"; // Importe 'useFocusEffect'
import { useCallback, useMemo, useState } from "react"; // Importe 'useCallback'
import { FlatList, Text, View } from "react-native";
import { default as CardCustom } from "../../components/Card";


export default function Index() {
    const [searchText, setSearchText] = useState<string | null>(null);
    const [lista, setLista] = useState<Task[]>([]); // Começa vazio

    // Esta função será chamada toda vez que a tela entrar em foco
    useFocusEffect(
        useCallback(() => {
            async function loadData() {
                const locations = await getLocations();
                setLista(locations);
            }
            loadData();
        }, [])
    );

    // Lógica de filtro (continua igual)
    const todoListFiltered = useMemo(() => {
        if (!searchText) return lista; // Agora 'lista' vem do AsyncStorage

        const searchLower = searchText.toLowerCase();
        // Ajuste no filtro para buscar apenas pelo título
        const listaFiltered = lista.filter(item => {
            const title = (item.title || '').toLowerCase();
            return title.includes(searchLower);
        });

        return listaFiltered
    }, [searchText, lista]);

    // O useEffect que chamava getTodoList() foi removido

    return (
        <View style={{
            flex: 1,
            gap: 20,
            paddingHorizontal: 16,
            paddingVertical: 10,
        }}>

            <InputSearch
                onChangeText={(text) => setSearchText(text)}
                placeholder="Buscar local"
                value={searchText || ""}
                onClickClear={() => setSearchText("")}
            />

            <View style={{ flex: 1 }}>
                <FlatList
                    style={{ flex: 1 }}
                    data={todoListFiltered}
                    renderItem={({ item }) =>
                        <CardCustom
                            title={item.title}
                            latitude={item.latitude}
                            longitude={item.longitude}
                           onClickCard={() => {
                                const params = new URLSearchParams({
                                    id: item.id,
                                    title: item.title,
                                    latitude: item.latitude,
                                    longitude: item.longitude,
                                });
                                router.push(`/editPag?${params.toString()}`);
                            }}
                        />
                    }
                    ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                    ListEmptyComponent={
                        <View style={{ alignItems: 'center', marginTop: 50 }}>
                            <Text style={{ fontSize: 16, color: '#666' }}>
                                Nenhum item salvo.
                            </Text>
                        </View>
                    }
                />
            </View>
            
        </View>
    )
}