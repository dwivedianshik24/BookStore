import React from "react";

// Sample 30 books data with better image URLs
const books = [
  { title: "Atomic Habits", author: "James Clear", price: "$15", image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg" },
  { title: "The Alchemist", author: "Paulo Coelho", price: "$12", image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg" },
  { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: "$10", image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg" },
  { title: "Think and Grow Rich", author: "Napoleon Hill", price: "$14", image: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg" },
  { title: "The Power of Habit", author: "Charles Duhigg", price: "$16", image: "https://m.media-amazon.com/images/I/51PYOgYkGyL._SL500_.jpg" },
  { title: "The 5 AM Club", author: "Robin Sharma", price: "$18", image: "https://m.media-amazon.com/images/I/81N7FmJhbhL.jpg" },
  { title: "Deep Work", author: "Cal Newport", price: "$20", image: "https://m.media-amazon.com/images/I/71din4TLubL._UF1000,1000_QL80_.jpg" },
  { title: "Ikigai", author: "Héctor García", price: "$22", image: "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg" },
  { title: "Can't Hurt Me", author: "David Goggins", price: "$19", image: "https://gyaanstore.com/cdn/shop/files/225_a5d717dd-5424-4171-987d-0ad23e3edb4b.png?v=1701688010&width=1920" },
  { title: "The Psychology of Money", author: "Morgan Housel", price: "$15", image: "https://m.media-amazon.com/images/I/71aG+xDKSYL.jpg" },
  // 20 more books with good images...
];

const BooksGrid = () => {
  return (
    <div className="container mx-auto px-4 my-10">
      {/* Book Store Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-black">Welcome to Our Book Store</h1>
        <p className="text-lg mt-4 text-gray-900">
          Explore the best free books available for reading and writing.
        </p>
      </div>

      {/* Free Books Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-pink-500">Free Books Offered</h2>

        {/* Book Display Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {books.map((book, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.author}</p>
                <p className="text-lg font-bold text-green-600">{book.price}</p>
                <button className="bg-pink-500 text-white px-4 py-2 mt-2 rounded-full w-full hover:bg-pink-600">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksGrid;