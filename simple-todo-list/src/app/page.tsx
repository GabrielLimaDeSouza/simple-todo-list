"use client";

import { useState } from "react";
import TodoDialog from "./components/dialog/dialog";
import TodoTable from "./components/table/table";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
    return storedTasks;
  };

  return (
    <div className="flex flex-col gap-4 px-16 py-16">
      <h1 className="font-semibold text-2xl">Lista de Tarefas</h1>
      <div className="flex justify-end mb-8">
        <TodoDialog getTasks={getTasks} />
      </div>
      <TodoTable tasks={tasks} getTasks={getTasks} />
    </div>
  );
}
