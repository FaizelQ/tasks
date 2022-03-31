import React from "react";
import { QuizView } from "./QuizView";
export default React.memo(Quizzer);
export function Quizzer(): JSX.Element {
    return (
        <div>
            <h1>Quizzer</h1>
            <QuizView></QuizView>
        </div>
    );
}
