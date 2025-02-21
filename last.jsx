import React, { useState, useEffect } from "react";

const Courses = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textAnimation, setTextAnimation] = useState(false);

  // ✅ Corrected Icons URLs for each course
  const courseIcons = {
    HTML: "https://e7.pngegg.com/pngimages/780/934/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail.png",
    CSS: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-512.png",
    JavaScript: "https://cdn.iconscout.com/icon/free/png-256/free-javascript-logo-icon-download-in-svg-png-gif-file-formats--html-programming-language-coding-logos-icons-1720087.png",
    Python: "https://www.svgrepo.com/show/376344/python.svg",
    C: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvSuVwMfPqmUy1pWhSJQvGqrCW30oBDj842g&s",
  };

  const handleScroll = () => {
    const coursesSection = document.getElementById("courses");
    if (coursesSection) {
      const coursesSectionPosition = coursesSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (coursesSectionPosition < screenHeight * 0.8) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = (course) => {
    let fileName = `${course}.pdf`; // Default file name

    // ✅ Special cases for specific courses
    if (course === "HTML") fileName = "HTML_Complete_Notes.pdf";
    if (course === "JavaScript") fileName = "JS_Chapterwise_Notes.pdf";
    if (course === "Python") fileName = "Python_Complete_Notes.pdf";
    if (course === "C") fileName = "C_Complete_Notes.pdf";

    if (course === "CSS") fileName = "CSS_Complete_Notes.pdf";
    const pdfPath = `/pdfs/${fileName}`; // ✅ Ensure correct path
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="courses" style={{ padding: "50px 20px", backgroundColor: "#f9f9f9", textAlign: "center" }}>
      <h2
        style={{
          color: "#FF69B4",
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "20px",
          cursor: "pointer",
          transition: "transform 0.3s ease, color 0.3s ease",
          animation: textAnimation ? "keekEffect 1s ease-out forwards" : "none",
        }}
        onClick={() => {
          setTextAnimation(true);
          setTimeout(() => setTextAnimation(false), 3000);
        }}
      >
        Our Free Courses - Explore All
      </h2>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
        {Object.keys(courseIcons).map((course, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              textAlign: "center",
              width: "220px",
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              ...(isVisible ? { transform: "scale(1.05)", boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)" } : {}),
            }}
          >
            <img
              src={courseIcons[course]}
              alt={`${course} logo`}
              style={{ width: "80px", height: "80px", marginBottom: "15px" }}
            />
            <h3 style={{ color: "#333", fontSize: "1.3rem", marginBottom: "10px" }}>{course}</h3>
            <button
              onClick={() => handleDownload(course)}
              style={{
                backgroundColor: "#2C6B2F",
                color: "#fff",
                padding: "10px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                textDecoration: "none",
                transition: "transform 0.2s ease",
              }}
              onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
              onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              Download PDF
            </button>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes keekEffect {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            50% {
              transform: scale(1.2);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Courses;
