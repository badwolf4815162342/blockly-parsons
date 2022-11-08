import React, { Component, useState } from "react";
import MyBlockly from './components/myblockly';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import ShowXml from "./components/showxml";

function GameScreen(props) {
    const [isGameMode, setGameMode] = useState(false);

    const startGame = () => {
        setGameMode(true);
    };

    const closeGame = () => {
        setGameMode(false);
    };

    return (
        <div className="App">
            <Stack gap={3}>
                <div className="bg-light border">
                    <h1>Hello, React!</h1>
                </div>
                <div className="bg-light border">
                    <Button onClick={() => startGame()}>Start Game</Button>
                </div>
                <div className="bg-light border">
                    <Stack direction="horizontal" className="col-md-6 mx-auto" gap={3}>
                        <div className="bg-light border">First item</div>
                        <div className="bg-light border">
                            <Card style={{ width: '400px', height: '600px' }}>
                                <Card.Body>
                                    <Card.Title>Exercise</Card.Title>
                                    <Card.Text>
                                        Write a program that infinitely takes numbers as input (one at a time) and then outputs if the number is even or odd and whether it is the current maximum.
                                    </Card.Text>
                                    <GameArea gameMode={isGameMode} />
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="bg-light border"><ShowXml /></div>
                    </Stack>
                </div>
                <div className="bg-light border">
                    <Button onClick={() => closeGame()}>Close Game</Button>
                </div>
            </Stack>
        </div>
    );
}

function GameArea(props) {
    const gameMode = props.gameMode;
    if (gameMode) {
        return <MyBlockly />;
    }

    return <h1>Nothing</h1>;
}

export default GameScreen 