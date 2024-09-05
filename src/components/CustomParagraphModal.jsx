import React, { useState } from "react";

function CustomParagraphModal({ isOpen, closeModal, setCustomParagraphs }) {
    const [easyParagraph, setEasyParagraph] = useState("");
    const [mediumParagraph, setMediumParagraph] = useState("");
    const [hardParagraph, setHardParagraph] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setCustomParagraphs({
            easy: easyParagraph || "The cat sat on the mat.",
            medium: mediumParagraph || "Typing quickly is an important skill.",
            hard: hardParagraph || "Complex sentences often require a higher degree of attention.",
        });
        closeModal(); // Close the modal after submitting
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                <h2 className="text-2xl font-bold mb-4">Add Custom Paragraphs</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2">Easy Paragraph</label>
                        <textarea
                            className="w-full p-2 border rounded-md"
                            rows="3"
                            value={easyParagraph}
                            onChange={(e) => setEasyParagraph(e.target.value)}
                            placeholder="Enter a short, simple sentence."
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2">Medium Paragraph</label>
                        <textarea
                            className="w-full p-2 border rounded-md"
                            rows="3"
                            value={mediumParagraph}
                            onChange={(e) => setMediumParagraph(e.target.value)}
                            placeholder="Enter a sentence of moderate complexity."
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2">Hard Paragraph</label>
                        <textarea
                            className="w-full p-2 border rounded-md"
                            rows="3"
                            value={hardParagraph}
                            onChange={(e) => setHardParagraph(e.target.value)}
                            placeholder="Enter a complex sentence with uncommon words."
                        ></textarea>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CustomParagraphModal;
