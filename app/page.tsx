import { getAllTasks } from "@/api";
import AddTarefa from "./components/AddTarefa";
import Lista from "./components/Lista";
import Modal from "./components/Modal";

export default async function Home() {

  const tasks = await getAllTasks();

  return (
    <main className="max-w-4xl mx-auto mt-4">

      <div className="text-center my-4 flex flex-col gap-4">
        <h1 className="text-center font-bold text-white text-xl">To Do List</h1>
        <h2 className="text-center"> Seu app para o dia-a-dia</h2>
        <AddTarefa />
      </div>
      <Lista tasks={tasks} />
    </main>
  )
}
