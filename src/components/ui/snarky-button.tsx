'use client';
import * as React from "react"
const phrases = [
  "Oh, you again?",
  "Didn't expect that, did you?",
  "I'm not lazy, I'm just on energy-saving mode.",
  "Click me harder, maybe I'll care.",
  "I'm like a cat, I only listen when I want to.",
  "Error 404: Motivation not found.",
  "Keep clicking, maybe something will happen... or not.",
  "I'm not arguing, I'm just explaining why I'm right.",
  "Are you sure you want to do that?",
  "Congratulations, you found the most useless button!"
];
export const SnarkyButton = () => {
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    alert(phrases[randomIndex]);
  };
return (
    <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Click me if you dare
    </button>
  );
};