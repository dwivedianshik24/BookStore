import React, { useState } from "react";

const books = [
  "https://thumbs.dreamstime.com/b/funny-book-character-running-bookmark-ribbon-visible-two-characters-happily-together-cartoon-vector-illustration-isolated-84878146.jpg",
  "https://media.istockphoto.com/id/2148491443/vector/cartoon-retro-book-groovy-character-hippie-art.jpg?s=612x612&w=0&k=20&c=wLVVQk3ShoBBrrDJCkUuTq_dZaU5D6hU0vOJpdVh4Yc="
];

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next book in the array
  const nextBook = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 text-gray-800">
      {/* Left section with text */}
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
        <div className="space-y-8">
          {/* Greeting text */}
          <h1 className="text-2xl md:text-4xl font-bold">
            Hello, Welcome to Our{" "}
            <span className="text-pink-500">Bookstore</span>
          </h1>

          {/* New paragraph with adjusted text */}
          <p className="text-sm md:text-xl font-serif">
            Discover a world of knowledge and adventure with our vast collection
            of books. Whether you're a reader or a learner, we have something
            special for you!
          </p>

          {/* Email input field with white background */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow bg-white  text-white border-gray-300" // Email input with white background and black text
              placeholder="Email"
            />
          </label>
        </div>
        <button
          className="btn mt-6 bg-pink-500 text-white border-2 border-pink-500 hover:bg-pink-600 transition duration-300"
          onClick={nextBook}
        >
          Next Book
        </button>
      </div>

      {/* Right section with book images */}
      <div className="order-1 w-full mt-20 md:w-1/2 relative">
        {/* Display current book */}
        <img
          src={books[currentIndex]}
          className="md:w-[550px] md:h-[460px] md:ml-12 transition-all duration-300"
          alt={`Book ${currentIndex + 1}`}
        />
      </div>
    </div>
  );
}

export default About;
