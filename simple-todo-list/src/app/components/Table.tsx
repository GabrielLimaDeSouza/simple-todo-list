"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";

type Task = {
  id: number;
  name: string;
  description: string;
};

const TodoTable = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
  };

  const deleteTask = (id: number) => {
    const storedItems = JSON.parse(localStorage.getItem("tasks") || "[]");

    const task = storedItems.find((task: Task) => task.id === id);

    if (task !== -1) {
      storedItems.splice(task, 1);

      localStorage.setItem("tasks", JSON.stringify(storedItems));
    }

    return task;
  };

  useEffect(() => {
    getTasks();
  }, [tasks]);

  return (
    <Table>
      <TableCaption>Uma lista das suas recentes tarefas</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Tarefa</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead className="text-right">Excluir</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow>
            <TableCell className="font-medium" key={task.id}>
              ID{task.id}
            </TableCell>
            <TableCell>{task.name}</TableCell>
            <TableCell>{task.description}</TableCell>
            <TableCell className="flex justify-end">
              <Button variant="outline" onClick={() => deleteTask(task.id)}>
                <FaRegTrashAlt />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TodoTable;
