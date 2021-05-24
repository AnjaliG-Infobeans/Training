import React, { useState, useEffect } from "react";

import axios from "../axios";

import "../style/Submissions.css";

const Submissions = () => {
  let [forms, setForms] = useState([]);

  useEffect(() => {
    axios.get("/forms").then(
      (res) => {
        setForms(res.data);
        console.log(res);
      },
      (err) => console.log(err)
    );
  }, []);

  return (
    <div className="submissions">
      <h1>All Submissions</h1>
      {forms.length > 0 && (
        <table className="submissions__table data-table row-border">
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
                <td>
                  {form.fname} {form.lname}
                </td>
                <td>
                  <a href={`mailto:${form.email}`}>{form.email}</a>
                </td>
                <td>{form.message}</td>
                <td className="actions">
                  <a href={form.file}>{form.file}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {forms.length === 0 && <p>Sorry, no entry available</p>}
    </div>
  );
};

export default Submissions;
