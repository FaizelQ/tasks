import React from "react";
import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import QUIZDATA from "../data/quizzes.json";
import { idText } from "typescript";
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

    function addNewQuiz(
        title: string,
        numQuestions: string,
        description: string,
        id: string
    ): void {
        setQuizzes([
            ...quizzes,
            {
                title: title,
                questions: numQuestions,
                description: description,
                id: id
            }
        ]);
    }
    function addQuizEditMode({ AddQuiz }: AddQuizProps): JSX.Element {
        const [title, setTitle] = useState<string>("Enter quiz title");
        const [numQuestions, setNumQuestions] = useState<string>("0");
        const [description, setDescription] = useState<string>(
            "Enter quiz description"
        );
        const [id, setID] = useState<string>("x_QUESTIONS");
        return (
            <div>
                <Form.Group controlId="form-quiz-title">
                    <Form.Label column sm={2}>
                        Quiz Title:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="text"
                            value={title}
                            onChange={(evt: ChangeEvent) =>
                                setTitle(evt.target.value)
                            }
                        ></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group controlId="form-quiz-numquestions">
                    <Form.Label column sm={2}>
                        Number of Questions:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="number"
                            value={numQuestions}
                            onChange={(evt: ChangeEvent) =>
                                setNumQuestions(evt.target.value)
                            }
                        ></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group controlId="form-quiz-description">
                    <Form.Label column sm={2}>
                        Quiz Description:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="text"
                            as="textarea"
                            rows={3}
                            value={description}
                            onChange={(evt: ChangeEvent) =>
                                setDescription(evt.target.value)
                            }
                        ></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group controlId="form-quiz-ID">
                    <Form.Label column sm={2}>
                        Quiz ID (ex. MATH_QUESTIONS):
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="text"
                            value={id}
                            onChange={(evt: ChangeEvent) =>
                                setID(evt.target.value)
                            }
                        ></Form.Control>
                    </Col>
                </Form.Group>
                <div>
                    {/*Button to add quiz*/}
                    <Button
                        onClick={() =>
                            addNewQuiz(title, numQuestions, description, id)
                        }
                    >
                        Add Quiz
                    </Button>
                </div>
            </div>
        );
    }

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
