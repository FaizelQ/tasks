import React from "react";
import { render, screen } from "@testing-library/react";
import { QuizView } from "./QuizView";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<QuizView />);
    });
    test("The Quiz List Header is there", () => {
        expect(screen.getByText(/Quiz List/i)).toBeInTheDocument();
    });
    test("Number of questions is displayed (one or two digits)", () => {
        expect(
            screen.getByText(/Number of Questions: \d\d/i)
        ).toBeInTheDocument();
    });
    test("There is a take quiz button", () => {
        expect(
            screen.getByRole("button", { name: /Take Quiz/i })
        ).toBeInTheDocument();
    });
    test("Edit mode is there and is checkbox", () => {
        const editCheckBox = screen.getByRole("checkbox");
        expect(editCheckBox).toBeInTheDocument();
    });
    test("Edit mode switches into edit mode", () => {
        const editCheckBox = screen.getByRole("checkbox");
        editCheckBox.click();
        expect(
            screen.getByRole("button", { name: /Delete Quiz/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /Add Quiz/i })
        ).toBeInTheDocument();
    });
});
