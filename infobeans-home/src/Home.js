import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import axios from "./axios";
import Nav from "./Nav";
import Job from "./Job";

import "./Home.css";

const Home = () => {
  let history = useHistory();
  if (!localStorage.token) {
    history.push("/login");
  }

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("/jobs", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
      .then(
        (response) => {
          setJobs(response.data);
        },
        (error) => console.log(error)
      );
  }, []);

  return (
    <div className="home">
      <Nav />
      <div className="container">
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
            {jobs && (
              <ul className="home__jobs ib-slider ib-slider-3" id="nav-home">
                <Job job={jobs[0]} />
                <Job job={jobs[1]} />
                <Job job={jobs[2]} />
                <Job job={jobs[3]} />
              </ul>
            )}
            <div className="tab-pane fade" id="nav-profile" role="tabpanel">
              <a className="logout" onClick={logout}>
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="home__footer">
        &copy; Copyright 2020 InfoBeans. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;
