import InputSearch from "@/components/InputSearch";
import { getTodoList } from "@/services/get-todo";
import { Task } from "@/services/interface";
import { router } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { default as CardCustom } from "../../components/Card";


export default function Index(){
    //const [valor do estado, função que atualiza] = useState<type>(primeiro estdo);

    const [searchText, setSearchText] = useState<string | null>(null);
    const [lista, setLista] = useState<Task[]>([]);

    const todoListFiltered = useMemo(() => {
        if (!searchText) return lista;

        const searchLower = searchText.toLowerCase();
        const listaFiltered = lista.filter(item => {
            const title = (item.title || '').toLowerCase();  
            return title.includes(searchLower);
        });

        return listaFiltered
    }, [searchText, lista]);

    useEffect(()=>{
        const todos = getTodoList();
        setLista(todos);
    }, []);

    return (
        <View style={{
            flex: 1,
            gap: 20,
            paddingHorizontal: 16,
            paddingVertical: 10,
        }}>

            <InputSearch
                onChangeText={(todos) => setSearchText(todos)}
                placeholder="Buscar tarefas"
                value={searchText || ""} 
                onClickClear={() => setSearchText("")}
            />

            <View style={{
                flex: 1,
            }}
            > 
                <FlatList
                    style={{ flex: 1 }}
                    data={todoListFiltered}
                    renderItem={({ item }) =>
                        <CardCustom
                            title={item.title}
                            latitude={item.latitude}
                            longitude={item.longitude}
                            onClickCard={() => router.push(`/editPag?title=${item.title}&latitude=${item.latitude}&longitude=${item.longitude}`)}
                        />
                    }
                    ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                    
                    ListEmptyComponent={
                        <View style={{ alignItems: 'center', marginTop: 50 }}>
                            <Text style={{ fontSize: 16, color: '#666' }}>
                                Nenhum item encontrado.
                            </Text>
                        </View>
                    }
                />
            </View>
            
        </View>
    )
}
