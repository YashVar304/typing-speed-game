import React, { useState, useEffect } from "react";
import Stats from "./Stats";

function Game({ difficulty, customParagraphs }) {
    const [inputValue, setInputValue] = useState("");
    const [words, setWords] = useState([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [correctWords, setCorrectWords] = useState(0);
    const [incorrectWords, setIncorrectWords] = useState(0);
    const [startTime, setStartTime] = useState(null);
    const [currentWordError, setCurrentWordError] = useState(false);

    const defaultParagraphs = {
        easy: "The cat sat on the mat.",
        medium: "Typing quickly is an important skill.",
        hard: "Complex sentences often require a higher degree of attention.",
    };

    const paragraph = customParagraphs[difficulty]
        ? customParagraphs[difficulty].split(" ")
        : defaultParagraphs[difficulty].split(" ");

    useEffect(() => {
        setWords(paragraph.map((word) => ({ word, typed: null })));
        setCurrentWordIndex(0);
        setCorrectWords(0);
        setIncorrectWords(0);
        setInputValue("");
        setStartTime(null);
    }, [difficulty, customParagraphs]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        const currentWord = words[currentWordIndex]?.word;

        if (!currentWord.startsWith(value.trim())) {
            setCurrentWordError(true);
        } else {
            setCurrentWordError(false);
        }

        if (!startTime) {
            setStartTime(new Date());
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === " ") {
            e.preventDefault();

            if (inputValue.trim().length > 0) {
                checkWord(inputValue.trim());
                setInputValue("");
            }
        }
    };


    const checkWord = (typedWord) => {
        const currentWord = words[currentWordIndex]?.word;
        const newWords = [...words];


        if (typedWord === currentWord) {
            newWords[currentWordIndex].typed = "correct";
            setCorrectWords((prev) => prev + 1);
        } else {
            newWords[currentWordIndex].typed = "incorrect";
            setIncorrectWords((prev) => prev + 1);
        }

        setWords(newWords); // Update words array with typing result
        setCurrentWordIndex((prev) => prev + 1); // Move to the next word
    };

    // Calculate words per minute (WPM)
    const calculateWPM = () => {
        if (!startTime) return 0;
        const now = new Date();
        const minutes = (now - startTime) / 60000;
        return Math.round((correctWords + incorrectWords) / minutes);
    };

    // Calculate typing accuracy percentage
    const calculateAccuracy = () => {
        const totalWordsTyped = correctWords + incorrectWords;
        return totalWordsTyped === 0 ? 100 : Math.round((correctWords / totalWordsTyped) * 100);
    };

    return (
        <div className="w-full max-w-2xl mx-auto mt-6">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
                <div className="paragraph text-lg font-mono">
                    {words.map((wordObj, index) => (
                        <span
                            key={index}
                            className={`inline-block mr-2 ${wordObj.typed === "correct"
                                    ? "text-green-500"
                                    : wordObj.typed === "incorrect"
                                        ? "text-red-500"
                                        : currentWordIndex === index
                                            ? "text-black"
                                            : "text-gray-400"
                                }`}
                        >
                            {wordObj.word}
                        </span>
                    ))}
                </div>
            </div>

            <input
                type="text"
                className={`w-full p-4 border ${currentWordError ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none`}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                autoFocus
                placeholder="Start typing..."
            />

            <Stats wpm={calculateWPM()} accuracy={calculateAccuracy()} />
        </div>
    );
}

export default Game;
