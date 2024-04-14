"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type Props = {};

const TodoDialog = (props: Props) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const saveTask = () => {
    const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    existingTasks.push({
      id: getRandomInt(9999, 999999),
      name: taskName,
      description: taskDescription,
    });

    localStorage.setItem("tasks", JSON.stringify(existingTasks));

    setTaskName("");
    setTaskDescription("");
  };

  function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Adicionar Tarefa</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Adicionar Tarefa</DialogTitle>
          <DialogDescription>
            Adicione uma tarefa para a sua lista de tarefas.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="task">Tarefa</Label>
            <Input
              type="task"
              id="task"
              placeholder="Tarefa"
              onChange={(e) => setTaskName(e.target.value)}
            />
            <Label htmlFor="description">Descrição</Label>
            <Input
              type="description"
              id="description"
              placeholder="Descrição"
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose className="flex gap-4">
            <Button type="button" variant="secondary">
              Fechar
            </Button>
            <Button type="button" onClick={saveTask}>
              Enviar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TodoDialog;
