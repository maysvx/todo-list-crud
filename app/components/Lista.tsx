import { ITask } from "@/types/tasks";
import React from "react";
import Tarefa from "./Tarefa";

interface TodoListProps {
    tasks: ITask[]
}

const Lista: React.FC<TodoListProps> = ({ tasks }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr className="text-white">
                        <th>Tarefa</th>
                        <th>Descrição</th>
                        <th>Prazo</th>
                        <th>Status</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <Tarefa key={task.id} task={task}/>
                    ))}
                </tbody>
            </table>
        </div>

    )
};
export default Lista;