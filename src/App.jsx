import React from "react";
import foreplayBook from "./assets/foreplaybook.jpg";
import dinosaurBook from "./assets/dinosaurbook.jpg";
import oceanBook from "./assets/oceanbook.jpg";
import authorPic from "./assets/authorpic.jpg"

const books = [
  {
    title: "The Ultimate Foreplay Handbook",
    description:
      "A comprehensive and engaging guide to foreplay and sexual intimacy. Designed for young adults and couples seeking deeper connection. This book explores pleasure with clarity, warmth, and practical insights.",
    genre: "Romance, Sex-education, Foreplay",
    image: foreplayBook,
    amazonLink: "https://www.amazon.com/dp/B0CVBPGCBN",
    gumroadLink: "https://omakcharlie.gumroad.com/l/ultimate-foreplay-handbook",
  },
  {
    title: "Dinosaurs and Prehistoric Evolution",
    description:
      "Discover the ancient world of dinosaurs and the incredible journey of evolution. Designed for curious minds both young and adult. This book brings prehistoric creatures to life with vivid detail and engaging storytelling.",
    genre: "Documentary, Paleontology, Dinosaurs",
    image: dinosaurBook,
    amazonLink: "https://www.amazon.com/dp/B0DLTX3VXJ",
    gumroadLink: "https://omakcharlie.gumroad.com/l/dinosaurs-and-prehistoric-evolution",
  },
  {
    title: "The Magnificent Giants of the Ocean",
    description:
      "An awe-inspiring dive into the lives of the ocean’s most magnificent creatures. Designed for wildlife lovers of every age. This book captures marine life with vivid imagery and immersive storytelling.",
    genre: "Marine Giants Oceanology, Documentary",
    image: oceanBook,
    amazonLink: "https://www.amazon.com/dp/B0DN5XVTMC",
    gumroadLink: "https://omakcharlie.gumroad.com/l/magnificent-giants-of-the-ocean",
  },
];

export default function LandingPage() {
  return (
    <div className="bg-[#D7DFA3] text-[#1A4862] min-h-screen">
      <header className="bg-[#1A4862] text-[#D7DFA3] text-center py-10">
        <h1 className="text-4xl font-bold">Omak Charlie Omar</h1>
        <p className="mt-2 text-lg">omakcharlie@gmail.com</p>
      </header>

      <section className="text-center py-5 px-4">
      <h2 className="text-2xl font-bold mb-1">About the Author</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-x-8">
        <p className="max-w-2xl text-justify">
          Omak Charlie Omar is a passionate writer dedicated to enlightening and educating
          readers across diverse subjects, from intimacy and relationships to natural history
          and ocean life. Through meticulously researched content and a powerful narrative style,
          his works inspire curiosity and growth in readers of all ages.
        </p>

        <div className="mt-0 md:mt-0">
          <img className="w-40 h-40 rounded-full object-cover" src={authorPic} alt="Author" />
        </div>
      </div>
      </section>

      <section className="py-5 px-4">
        <h2 className="text-2xl font-semibold text-center mb-5">Books</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-[#1A4862] bg-opacity-80 rounded-2xl shadow-lg w-80 p-4 text-center transform transition duration-300 ease-in-out hover:scale-105"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-[420px] object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-[#D7DFA3] mb-2">{book.title}</h3>
              <p className="text-sm text-justify text-[#D7DFA3] mb-2">{book.description}</p>
              <p className="text-xs italic text-[#D7DFA3]">Genre: {book.genre}</p>
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D7DFA3] text-[#1A4862] px-4 py-2 rounded-lg text-sm hover:bg-[#FF9900] hover:text-black"
                >
                  Amazon
                </a>
                <a
                  href={book.gumroadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D7DFA3] text-[#1A4862] px-4 py-2 rounded-lg text-sm hover:bg-[#FF90E8] hover:text-black"
                >
                  Gumroad
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-6 bg-[#1A4862] text-[#D7DFA3] mt-10">
        <p>© 2025 Omak Charlie Omar | All rights reserved.</p>
      </footer>
    </div>
  );
}
