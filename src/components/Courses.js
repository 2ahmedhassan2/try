import React from "react";
import "./styles/courses.css";
import CourseCard from "./CourseCard";
import coursesData from "../data/coursesData";

function Courses() {
  return (
    <main className="courses">
      <h2>Available Courses</h2>
      <div className="course-grid">
        {coursesData.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </main>
  );
}

export default Courses;
