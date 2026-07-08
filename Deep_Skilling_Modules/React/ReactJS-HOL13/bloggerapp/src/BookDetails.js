import React from "react";

function BookDetails() {
  return (
    <div>
      <h2>Book Details</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>React Basics</td>
            <td>Jordan Walke</td>
            <td>₹550</td>
          </tr>

          <tr>
            <td>Java Programming</td>
            <td>James Gosling</td>
            <td>₹700</td>
          </tr>

          <tr>
            <td>Python Essentials</td>
            <td>Guido van Rossum</td>
            <td>₹600</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default BookDetails;