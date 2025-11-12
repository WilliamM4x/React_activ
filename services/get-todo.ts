//função que vai retornar a lista de tarefas

import { Task } from "./interface";

export function getTodoList(): Task[] {
    return [
        {
            id: "1",
            title: "Comprar mantimentos",
            description: "Comprar leite, pão e ovos no supermercado.",
        },
        {
            id: "2",
            title: "Estudar React Native",
            description: "Ler a documentação oficial e fazer alguns tutoriais.",
        },
        {
            id:"3",
            title: "Estudar React Native iii",
            description: "Agora Ler a documentação oficial e fazer alguns tutoriais.",
        }
    ];
}