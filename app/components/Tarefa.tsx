import { ITask } from "@/types/tasks";
import React from "react";
import { FaEdit } from 'react-icons/fa';
import { PiTrashBold } from 'react-icons/pi';

interface TaskProps {
    task: ITask
}

const Tarefa: React.FC<TaskProps> = ({ task }) => {
    return (
        <tr key={task.id}>
            <th>{task.task}</th>
            <th>{task.description}</th>
            <td>{task.term}</td>
            <td>{task.status}</td>
            <td className="flex gap-5">
                <FaEdit size={20} />
                <PiTrashBold size={20}/>
            </td>
        </tr>
    )
}; export default Tarefa;