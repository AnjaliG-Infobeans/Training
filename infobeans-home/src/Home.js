import React from "react";
import { useHistory } from "react-router";

import Job from "./Job";

import "./Home.css";

const Home = () => {
  let history = useHistory();
  // if (!localStorage.email) {
  //   history.push("/login");
  // }

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
            <Job />
            <Job />
            <Job />
            <Job />
          </ul>
          <div className="tab-pane fade" id="nav-profile" role="tabpanel">
            Profile Content
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
