import React, { useState } from "react";
import Game from "./components/Game";
import ParagraphSelection from "./components/ParagraphSelection";
import CustomParagraphModal from "./components/CustomParagraphModal";

function App() {
  const [difficulty, setDifficulty] = useState("easy");
  const [customParagraphs, setCustomParagraphs] = useState({
    easy: "",
    medium: "",
    hard: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Typing Speed and Accuracy Game</h1>


      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Add Custom Paragraph
      </button>


      <CustomParagraphModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        setCustomParagraphs={setCustomParagraphs}
      />


      <ParagraphSelection setDifficulty={setDifficulty} />


      <Game difficulty={difficulty} customParagraphs={customParagraphs} />
    </div>
  );
}

export default App;
