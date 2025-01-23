import React from "react";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <button>Learn More</button>
    </div>
  );
}

export default CourseCard;
