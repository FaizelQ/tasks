import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [diceOneState, setDiceOneState] = useState<number>(1);
    const [diceTwoState, setDiceTwoState] = useState<number>(6);

    function winLose(): string {
        let result = "";
        if (diceOneState === diceTwoState) {
            if (diceOneState !== 1) {
                result = "Win";
            } else {
                result = "Lose"; //snake eyes 1 1
            }
        } else {
            result = "Roll again please";
        }
        return result;
    }

    return (
        <div>
            <div>
                <Button onClick={() => setDiceOneState(d6)}>Roll Left</Button>
                <span data-testid="left-die">Left Die: {diceOneState}</span>
            </div>
            <div>
                <Button onClick={() => setDiceTwoState(d6)}>Roll Right</Button>
                <span data-testid="right-die">Right Die: {diceTwoState}</span>
            </div>
            <div>
                <span>Result: {winLose()}</span>
            </div>
        </div>
    );
}
