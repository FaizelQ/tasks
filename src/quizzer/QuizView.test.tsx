import React from "react";
import { render, screen } from "@testing-library/react";
import { QuizView } from "./QuizView";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<QuizView />);
    });
    test("The Quiz List is there and Quizzer Header", () => {
        expect(screen.getByText(/Quiz List/i)).toBeInTheDocument();
        expect(screen.getByText(/Quizzer/i)).toBeInTheDocument();
    });
    test("Edit mode is there and is checkbox", () => {
        const editCheckBox = screen.getByRole("checkbox");
        expect(editCheckBox).toBeInTheDocument();
    });
    test("Edit mode switches into edit mode", () => {
        const editCheckBox = screen.getByRole("checkbox");
        editCheckBox.click();
        expect(screen.getByRole("button")).toBeInTheDocument();
    });
});
