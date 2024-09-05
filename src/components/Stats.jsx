import React from "react";

function Stats({ wpm, accuracy }) {
    return (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-lg flex justify-between text-lg">
            <p>
                <span className="font-semibold">WPM:</span> {wpm}
            </p>
            <p>
                <span className="font-semibold">Accuracy:</span> {accuracy}%
            </p>
        </div>
    );
}

export default Stats;
