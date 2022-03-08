import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attemptsLeft, setAttempt] = useState<number>(4);
    const [quizState, setQuizState] = useState<boolean>(false);

    function startQuiz(): void {
        setQuizState(true);
        setAttempt(attemptsLeft - 1);
    }

    function stopQuiz(): void {
        setQuizState(false);
    }

    return (
        <div>
            <span>Attempts left: {attemptsLeft}</span>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={quizState || attemptsLeft === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={stopQuiz} disabled={!quizState}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => setAttempt(attemptsLeft + 1)}
                    disabled={quizState}
                >
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
