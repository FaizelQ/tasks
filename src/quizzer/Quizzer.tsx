import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import QUIZDATA from "../data/quizzes.json";
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
