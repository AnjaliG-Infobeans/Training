import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import axios from "./axios";
import Job from "./Job";

import "./Home.css";

const Home = () => {
  let history = useHistory();
  if (!localStorage.email) {
    history.push("/login");
  }

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  const [jobs, setJobs] = useState([]);
  let myJobs = [];

  useEffect(() => {
    axios.get("/jobs").then(
      (response) => {
        myJobs = response.data;
        setJobs(response.data);
        // console.log(myJobs);
      },
      (error) => console.log(error)
    );
  }, []);

  // useEffect(() => {
  //   // setJobs(myJobs);
  // }, [myJobs]);

  return (
    <div className="home container">
      <h2 className="home__title">New Job Postings</h2>

      <div className="tabs-container">
        {/* Job tabs */}
        <div className="nav nav-tabs home__tab" id="nav-tab" role="tablist">
          <a
            className="nav-item nav-link active"
            id="nav-home-tab"
            data-toggle="tab"
            href="#nav-home"
          >
            New Hirings
          </a>
          <a
            className="nav-item nav-link"
            id="nav-profile-tab"
            data-toggle="tab"
            href="#nav-profile"
          >
            Internal Job Postings
          </a>
          <a className="home__more" href="#">
            <span>See More</span> <i className="ibic-arrow-right"></i>
          </a>
        </div>

        {/* Job tab details */}
        <div className="tab-content" id="nav-tabContent">
          <ul
            className="tab-pane fade show active home__jobCard ib-slider ib-slider-3"
            id="nav-home"
            role="tabpanel"
          >
            {jobs.map((job) => {
              return <Job job={job} />;
            })}
            {/* <Job />
            <Job />
            <Job /> */}
          </ul>
          <div className="tab-pane fade" id="nav-profile" role="tabpanel">
            <a className="logout" onClick={logout}>
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
