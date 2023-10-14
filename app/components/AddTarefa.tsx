"use client"

import React, { FormEventHandler } from "react";
import { IoMdAddCircleOutline } from 'react-icons/io'
import Modal from "./Modal";
import { useState } from 'react';
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";


const AddTarefa = () => {

    const router = useRouter;

    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [newTaskValue, setnewTaskValue] = useState<string>('')

    const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (evento) => {
        evento.preventDefault();
        await addTodo({
            id: "",
            task: newTaskValue,
            description: newTaskValue,
            term: newTaskValue,
            status: newTaskValue
        });
        setnewTaskValue("");
        setModalOpen(false);
        router.refresh();
    }

    return (
        <div>
            <button
                onClick={() => setModalOpen(true)}
                className='btn btn-secondary w-full'
            >
                Adicionar nova Tarefa
                <IoMdAddCircleOutline size={18} />
            </button>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmitNewTodo} >
                    <h2 className="font-bold text-lg text-white">Adicione uma nova Tarefa</h2>

                    <div className="modal-action" >
                        <input value={newTaskValue}
                            onChange={evento => setnewTaskValue(evento.target.value)}
                            type="text"
                            placeholder="Nome da Tarefa"
                            className="input input-bordered input-secondary w-full"
                        />
                    </div>

                    <div className="modal-action">
                        <input
                            value={newTaskValue}
                            onChange={evento => setnewTaskValue(evento.target.value)}
                            type="text"
                            placeholder="Descrição"
                            className="input input-bordered input-secondary w-full"
                        />
                    </div>

                    <div className="modal-action">
                        <input
                            value={newTaskValue}
                            onChange={evento => setnewTaskValue(evento.target.value)}
                            type="date"
                            placeholder="Prazo"
                            className="input input-bordered input-secondary w-full"
                        />
                    </div>
                    <div className="mt-4 w-full h-full">
                        <select className="select select-secondary w-full"
                            value={newTaskValue}
                            onChange={evento => setnewTaskValue(evento.target.value)}>
                            <option disabled selected>Status</option>
                            <option>Aberto</option>
                            <option>Em andamento</option>
                            <option>Concluido</option>
                            <option>Pendente</option>
                        </select>
                    </div>

                    <button className="btn btn-active btn-secondary mt-4" type="submit">Salvar</button>
                </form>
            </Modal>
        </div>
    )
};
export default AddTarefa;