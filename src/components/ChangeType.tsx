import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [state, setState] = useState<QuestionType>("short_answer_question");
    function changeQuestionType(): void {
        if (state === "short_answer_question") {
            setState("multiple_choice_question");
        } else {
            setState("short_answer_question");
        }
    }
    return (
        <div>
            <div>
                <Button onClick={changeQuestionType}>Change Type</Button>
            </div>
            <div>
                {state === "short_answer_question" ? (
                    <span>Short Answer</span>
                ) : (
                    <span>Multiple Choice</span>
                )}
            </div>
        </div>
    );
}
