import React from "react";
import { Button } from "@/components/ui/button";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Task = {
  id: number;
  name: string;
  description: string;
};

type Props = {
  tasks: Task[];
  getTasks: () => Task[];
};

const TodoTable: React.FC<Props> = ({ tasks, getTasks }) => {
  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    getTasks();
  };

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
          <TableRow key={task.id}>
            <TableCell className="font-medium">ID{task.id}</TableCell>
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
