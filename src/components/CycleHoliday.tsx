import React, { useState } from "react";
import { Button } from "react-bootstrap";
//🤡, 🦃, 🎄, 🐐, 🐇
//Halloween, Thanksgiving, Christmas, Eid, Easter
//Alphabetical
//Christmas, Easter, Eid, Halloween, Thanksgiving
//By Date
//Easter, Eid, Halloween, Thanksgiving, Christmas

export function CycleHoliday(): JSX.Element {
    const [holidayState, setHoliday] = useState<string>("🤡");

    const alphaRecord: Record<string, string> = {
        "🤡": "🦃",
        "🦃": "🎄",
        "🎄": "🐐",
        "🐐": "🐇",
        "🐇": "🤡"
    };

    const byDateRecord: Record<string, string> = {
        "🐇": "🐐",
        "🐐": "🤡",
        "🤡": "🦃",
        "🦃": "🎄",
        "🎄": "🐇"
    };

    return (
        <div>
            <p>Holiday: {holidayState}</p>
            <div>
                <Button
                    onClick={() =>
                        setHoliday(
                            (currentHoliday) => alphaRecord[currentHoliday]
                        )
                    }
                >
                    Advance by Alphabet
                </Button>
            </div>
            <div>
                <Button
                    onClick={() =>
                        setHoliday(
                            (currentHoliday) => byDateRecord[currentHoliday]
                        )
                    }
                >
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
