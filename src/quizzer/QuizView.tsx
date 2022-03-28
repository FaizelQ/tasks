import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import QUIZDATA from "../data/quizzes.json";
export default React.memo(QuizView);

type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;
interface AddQuizProps {
    AddQuiz: (
        title: string,
        questions: number,
        description: string,
        id: string
    ) => void;
}

//maps quizzes.json to const called myQuizzes
const myQuizzes = QUIZDATA.map((quiz: Quiz) => ({ ...quiz }));

export function QuizView(): JSX.Element {
    //sets initial quizzes to myQuizzes
    const [quizzes, setQuizzes] = useState<Quiz[]>(myQuizzes);
    //defualt edit mode is false
    const [editMode, setEdit] = useState<boolean>(false);

    return (
        <div>
            <h3>Quizzes</h3>
            {/*checkbox for edit mod*/}
            <div>
                <Form.Check
                    type="checkbox"
                    id="checkbox-edit-mode"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={() => setEdit(!editMode)}
                ></Form.Check>
            </div>
            {/*mapping quizzes*/}
            <div>
                <ol>
                    {quizzes.map(
                        (quiz: Quiz): JSX.Element => (
                            <li key={quiz.title}>
                                {quiz.title}
                                <div
                                    style={{
                                        border: "3px sold black",
                                        padding: "3px",
                                        width: "1200px"
                                    }}
                                >
                                    {quiz.description}
                                    <br>
                                        {"Number of Questions: " +
                                            quiz.questions}
                                        {/*total points?*/}
                                    </br>
                                </div>
                                <div>
                                    <Button>Take Quiz</Button>
                                </div>
                            </li>
                        )
                    )}
                </ol>
            </div>
        </div>
    );
}
