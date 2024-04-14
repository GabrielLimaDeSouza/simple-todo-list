"use client";

import TodoDialog from "./components/dialog";
import TodoTable from "./components/table";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 px-16 py-16">
      <h1 className="font-semibold text-2xl">Lista de Tarefas</h1>
      <div className="flex justify-end mb-8">
        <TodoDialog />
      </div>
      <TodoTable />
    </div>
  );
}
