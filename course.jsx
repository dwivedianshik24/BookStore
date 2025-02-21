

import React, { useState } from "react";

const courses = [
  {
    title: "Web Development",
    books: [
      { title: "HTML & CSS", author: "Jon Duckett", price: "$15", image: "https://codezta.in/wp-content/uploads/2024/04/htmlcssjs-details-removebg-preview.jpg", description: "A complete guide to HTML and CSS." },
      { title: "JavaScript Basics", author: "John Doe", price: "$20", image: "https://eu-images.contentstack.com/v3/assets/blt892f41c9788ae399/blt025407e71148d0ab/664eff4d80b433801ddd2084/intermediate-books-on-javascript.png", description: "Learn the fundamentals of JavaScript." },
      { title: "React Essentials", author: "Dan Abramov", price: "$25", image: "https://beehiiv-images-production.s3.amazonaws.com/uploads/asset/file/7defe9e1-a9c5-4e8c-878c-25273f3868ce/react_book.png?t=1730036659", description: "Master React for front-end development." },
      // { title: "Node.js Basics", author: "Mosh Hamedani", price: "$25", image: "https://via.placeholder.com/150", description: "Learn Node.js and build real-world applications." },
      // { title: "Express.js", author: "Scott Corgan", price: "$28", image: "https://via.placeholder.com/150", description: "Build RESTful APIs with Express.js." },
      // { title: "MongoDB", author: "Rob Dahl", price: "$32", image: "https://via.placeholder.com/150", description: "Master MongoDB for database management." }
    ]
  },
  {
    title: "Data Science",
    books: [
      { title: "Python for Data Science", author: "Jake VanderPlas", price: "$18", image: "https://puppycoding.com/wp-content/uploads/2023/07/free-python-books.webp", description: "Python tools for data science." },
      { title: "Machine Learning", author: "Andrew Ng", price: "$30", image: "https://i0.wp.com/mltechniques.com/wp-content/uploads/2022/10/books.png?fit=1920%2C1080&ssl=1", description: "Learn ML from an expert." },
      { title: "Deep Learning", author: "Ian Goodfellow", price: "$40", image: "https://miro.medium.com/v2/resize:fit:1400/1*wfb7uS0fmxmcXxdEGgpDow.jpeg", description: "Advanced deep learning techniques." },
      // { title: "Data Analysis", author: "Mark Williams", price: "$35", image: "https://via.placeholder.com/150", description: "Exploring data analysis techniques." },
      // { title: "Data Visualization", author: "Jason Kantor", price: "$28", image: "https://via.placeholder.com/150", description: "Creating compelling data visualizations." },
      // { title: "Data Mining", author: "Martin F. R. Minsky", price: "$32", image: "https://via.placeholder.com/150", description: "Mining large datasets for valuable insights." }
    ]
  }
];

const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-black">Courses & Books</h1>

      {/* Course Tabs */}
      <div className="flex justify-center space-x-4 my-6">
        {courses.map((course, index) => (
          <button
            key={index}
            onClick={() => setSelectedCourse(course)}
            className={`px-4 py-2 rounded-lg ${selectedCourse.title === course.title ? "bg-pink-500 text-white" : "bg-gray-200 text-black"}`}
          >
            {course.title}
          </button>
        ))}
      </div>

      {/* Books List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {selectedCourse.books.map((book, index) => (
          <div key={index} className="relative border rounded-lg overflow-hidden shadow-lg group">
            <img src={book.image} alt={book.title} className="w-full h-48 object-cover transition-transform transform group-hover:scale-105" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-black">{book.title}</h3>
              <p className="text-sm text-gray-600">{book.author}</p>
            </div>

            {/* Hover Effect for Price and Description */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity duration-300 p-4">
              <p className="text-xl">{book.price}</p>
              <p className="text-sm mt-2 text-center">{book.description}</p>
              <button className="mt-3 bg-pink-500 px-4 py-2 rounded-full text-white">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
