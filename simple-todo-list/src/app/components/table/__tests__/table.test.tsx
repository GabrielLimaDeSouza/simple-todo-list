import { render, screen, within, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { tasksMock } from "../__mocks__/index";

import TodoTable from "../table";

const getTasks = jest.fn();

beforeEach(() => {
  render(<TodoTable tasks={tasksMock} getTasks={getTasks} />);
});

it("should render the table component", () => {
  const tableDescription = screen.getByText(
    "Uma lista das suas recentes tarefas"
  );

  expect(tableDescription).toBeInTheDocument();
});

it("should render the tasks", () => {
  const taskName = tasksMock[0].name;
  expect(screen.getByText(taskName)).toBeInTheDocument();

  const taskDescription = tasksMock[1].description;
  expect(screen.getByText(taskDescription)).toBeInTheDocument();

  const taskId = tasksMock[2].id;
  expect(screen.getByText("ID" + taskId)).toBeInTheDocument();
});

it("should call getTasks when click on delete task button", () => {
  const row = screen.getByRole("row", {
    name: /id1521512 fazer compras comprar itens essenciais no mercado\./i,
  });

  const button = within(row).getByRole("button");

  fireEvent.click(button);

  expect(getTasks).toHaveBeenCalled();
});
