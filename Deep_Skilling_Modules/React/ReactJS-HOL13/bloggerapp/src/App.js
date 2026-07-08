import React from "react";

import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

import "./App.css";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  // if...else
  let books;

  if (showBooks) {
    books = <BookDetails />;
  } else {
    books = <h2>No Book Details</h2>;
  }

  return (

    <div className="App">

      <h1>Blogger Application</h1>

      {books}

      <hr />

      {/* Logical AND */}

      {showBlogs && <BlogDetails />}

      <hr />

      {/* Ternary Operator */}

      {showCourses ? <CourseDetails /> : <h2>No Course Details</h2>}

    </div>

  );

}

export default App;