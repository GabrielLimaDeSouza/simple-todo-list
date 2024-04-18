import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import TodoDialog from "../dialog";

const getTasks = jest.fn();

beforeEach(() => {
  render(<TodoDialog getTasks={getTasks} />);
});

it("should render the dialog component", () => {
  const dialogButton = screen.getByText("Adicionar Tarefa");

  expect(dialogButton).toBeInTheDocument();
});

it("should open the dialog component", () => {
  const addButton = screen.getByText("Adicionar Tarefa");

  fireEvent.click(addButton);

  const inputLabel = screen.getByText("Descrição");

  expect(inputLabel).toBeInTheDocument();
});
