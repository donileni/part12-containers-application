import { render, screen } from "@testing-library/react";
import Todo from "./Todo";
import { describe, test, expect } from "vitest";

describe("Todo component", () => {
  const todoExample = {
    text: "Learning docker",
    done: false,
  };
  test("displays the todo text", () => {
    render(
      <Todo
        todo={todoExample}
        onClickDelete={() => {}}
        onClickComplete={() => {}}
      />
    );

    const todoText = screen.getByText("Learning docker")
    expect(todoText).toBeDefined();
  });
});
