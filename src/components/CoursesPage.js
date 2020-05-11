import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CoursesList";
import { Link } from "react-router-dom";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-info" to="/course">
        Add a New Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
