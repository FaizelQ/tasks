import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attemptsLeft, setAttempt] = useState<number>(4);
    const [quizProgress, setProgress] = useState<boolean>(false);

    function quizStart(): void {
        setAttempt(attemptsLeft > 0 ? attemptsLeft - 1 : attemptsLeft);
        setProgress(attemptsLeft > 0 ? changeState() : false);
    }

    function changeState(): boolean {
        let result = false;
        if (attemptsLeft > 0 && quizProgress === false) {
            result = true;
        }
        return result;
    }

    return (
        <div>
            <p>Number of attempts left: {attemptsLeft}</p>
            <div>
                <Button onClick={() => quizStart()} disabled={!changeState()}>
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => setProgress(false)}
                    disabled={!quizProgress}
                >
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => setAttempt(1 + attemptsLeft)}
                    disabled={quizProgress}
                >
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
