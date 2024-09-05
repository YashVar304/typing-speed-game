import React from "react";

function ParagraphSelection({ setDifficulty }) {
    const handleDifficultyChange = (event) => {
        setDifficulty(event.target.value);
    };

    return (
        <div className="mb-4">
            <label className="text-lg font-semibold mr-2">Select Difficulty:</label>
            <select
                className="p-2 rounded border border-gray-300"
                onChange={handleDifficultyChange}
            >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>
    );
}

export default ParagraphSelection;
