import React from "react";

function CourseDetails() {
  return (
    <div>

      <h2>Course Details</h2>

      <table border="1" cellPadding="10">

        <thead>

          <tr>

            <th>Course</th>

            <th>Duration</th>

            <th>Trainer</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>React JS</td>

            <td>6 Weeks</td>

            <td>John</td>

          </tr>

          <tr>

            <td>Java Full Stack</td>

            <td>12 Weeks</td>

            <td>David</td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default CourseDetails;