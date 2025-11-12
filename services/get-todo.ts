//função que vai retornar a lista de tarefas

import { Task } from "./interface";

export function getTodoList(): Task[] {
    return [
        {
            id: "1",
            title: "Feira de Santana",
            latitude: '-12.2733',
            longitude: '-38.9556',
        },
        {
            id: "2",
            title: "Salvador",
            latitude: "-12.9711",
            longitude: "-38.5108"
        },
        {
            id: "3",
            title: "Alagoinhas",
            latitude: "-12.1355",
            longitude: "-38.4189"
        },
        {
            id: "4",
            title: "Amargosa",
            latitude: "-13.0300",
            longitude: "-39.6000"
        }
                
    ];
}