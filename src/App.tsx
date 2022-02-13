import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Faizel Quabili
                also Hello World!
            </header>
            <h1>This is a header using the h1 tag!</h1>;
            <img
                src="https://nas-national-prod.s3.amazonaws.com/styles/article_hero_inline/s3/e09ta7.jpg?itok=PHYQ8Bcw"
                width="300"
                height="300"
                alt="A picture of my thanksgiving dinner!"
            />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <ul>
                <li>Turkey</li>
                <li>Mashed Potatoes</li>
                <li>Pumpkin Pie</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        I really enjoy dark meat
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "500px",
                                height: "100px"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        I also really like when the skin on the meat is cripsy
                        while the meat is not dry.
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "500px",
                                height: "100px"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
