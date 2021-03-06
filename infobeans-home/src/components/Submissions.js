import React, { useState, useEffect } from "react";

import axios from "../axios";

const Submissions = () => {
  let [forms, setForms] = useState([]);

  // Get all submissions once
  useEffect(() => {
    axios.get("/forms").then(
      (res) => {
        setForms(res.data);
      },
      (err) => console.log(err)
    );
  }, []);

  // Trauncate text to desired length, for display
  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;

  return (
    <div className="submissions container-fluid">
      <h1 style={{ textAlign: "center" }}>All Submissions</h1>
      {/* If submitted forms are available */}
      {forms.length > 0 && (
        <table
          className="data-table row-border"
          style={{ overflowWrap: "anywhere" }}
        >
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>File</th>
            </tr>
          </thead>

          <tbody>
            {forms.map((form) => (
              <tr>
                <td style={{ padding: "0 15px" }}>
                  {form.fname} {form.lname}
                </td>
                <td style={{ padding: "0 15px" }}>
                  <a href={`mailto:${form.email}`}>{form.email}</a>
                </td>
                <td style={{ padding: "0 15px" }}>
                  {truncate(form.message, 100)}
                </td>
                <td>
                  <a target="_blank" href={form.file} rel="noreferrer">
                    {form.file}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* If no forms have been submitted yet */}
      {forms.length === 0 && <p>Sorry, no entry available</p>}
    </div>
  );
};

export default Submissions;
