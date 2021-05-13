import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import axios from "./axios";
import Nav from "./Nav";
import Job from "./Job";

import "./Home.css";

const options = {
  nav: true,
  items: 4,
  loop: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    960: {
      items: 4,
    },
    1200: {
      items: 4,
    },
  },
};

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

  useEffect(() => {
    axios.get("/jobs").then(
      (response) => {
        // jobList = response.data;
        setJobs(response.data);
        // console.log(myJobs);
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
            <div className="active" id="nav-home">
              {/* <OwlCarousel className="owl-theme" loop margin={10} nav> */}
              {jobs.map((job) => {
                return <Job job={job} />;
              })}
              {/* </OwlCarousel> */}
            </div>
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
