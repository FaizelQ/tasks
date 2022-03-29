import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import QUIZDATA from "../data/quizzes.json";
import { idText } from "typescript";
export default React.memo(QuizView);

type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;
interface AddQuizProps {
    addQuiz: (
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

    //Creates new list of quizzes
    function addQuiz(
        title: string,
        numQuestions: number,
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

    //Creates four forms to input fields of new quiz
    function AddQuizForms({ addQuiz }: AddQuizProps): JSX.Element {
        const [title, setTitle] = useState<string>("Enter Quiz Title");
        const [numQuestions, setNumQuestions] = useState<number>(0);
        const [description, setDescription] = useState<string>(
            "Enter Quiz Description"
        );
        const [id, setID] = useState<string>("Type Quiz ID");
        return (
            <div>
                <Form.Group controlId="form-quiz-title">
                    <Form.Label column sm={2}>
                        Quiz Title:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            className="w-50"
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
                            className="w-50"
                            type="number"
                            value={numQuestions}
                            onChange={(evt: ChangeEvent) =>
                                //if not a number make 0
                                setNumQuestions(
                                    isNaN(parseInt(evt.target.value))
                                        ? 0
                                        : Number(evt.target.value)
                                )
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
                            className="w-50"
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
                            className="w-50"
                            type="text"
                            value={id}
                            onChange={(evt: ChangeEvent) =>
                                setID(evt.target.value)
                            }
                        ></Form.Control>
                    </Col>
                </Form.Group>
                <br></br>
                <div>
                    {/*Button to add quiz*/}
                    <Button
                        onClick={() =>
                            addQuiz(title, numQuestions, description, id)
                        }
                    >
                        Add Quiz
                    </Button>
                </div>
            </div>
        );
    }

    function deleteQuiz(removeTitle: string): void {
        //removes passed in quiz from quizzes using filter function
        const removedQuizList = quizzes.filter(
            (quiz: Quiz): boolean => quiz.title !== removeTitle
        );
        setQuizzes(removedQuizList);
    }

    return (
        <div>
            <h3>Quiz List</h3>
            <br></br>
            {/*mapping quizzes*/}
            <div>
                <ol>
                    {quizzes.map(
                        (quiz: Quiz): JSX.Element => (
                            <li key={quiz.title}>
                                <div
                                    style={{
                                        border: "3px solid black",
                                        padding: "3px",
                                        width: "1200px"
                                    }}
                                >
                                    <div>
                                        <h3>{quiz.title}</h3>
                                    </div>
                                    <div>
                                        {quiz.description}
                                        <div></div>
                                        {"Number of Questions: " +
                                            quiz.questions}
                                        {/*total points?*/}
                                    </div>
                                    <div>
                                        <Col>
                                            <Button>Take Quiz</Button>
                                        </Col>
                                        <div
                                            style={{
                                                height: "3px",
                                                backgroundColor: "white"
                                            }}
                                        ></div>
                                        <Col>
                                            {editMode ? (
                                                <Button
                                                    onClick={() =>
                                                        deleteQuiz(quiz.title)
                                                    }
                                                >
                                                    Delete Quiz
                                                </Button>
                                            ) : (
                                                <></>
                                            )}
                                        </Col>
                                    </div>
                                </div>
                                <br></br>
                            </li>
                        )
                    )}
                </ol>
                <div>
                    {/*checkbox for edit mod*/}
                    <div
                        style={{
                            border: "2px solid black",
                            padding: "3px",
                            width: "115px",
                            backgroundColor: "#ECE329"
                        }}
                    >
                        <Form.Check
                            type="checkbox"
                            id="checkbox-edit-mode"
                            label="Edit Mode"
                            checked={editMode}
                            onChange={() => setEdit(!editMode)}
                        ></Form.Check>
                    </div>
                    {editMode ? (
                        <AddQuizForms addQuiz={addQuiz}></AddQuizForms>
                    ) : (
                        <span>
                            To Add/Delete a Quiz, Edit Mode Must Be Selected
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
