import React from "react";
import { useHistory } from "react-router";
import "./Home.css";

const Home = () => {
  let history = useHistory();
  // if (!localStorage.email) {
  //   history.push("/login");
  // }
  return (
    <div className="home">
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
        <div className="tab-content " id="nav-tabContent">
          <ul
            className="tab-pane fade show active home__jobCard ib-slider ib-slider-3"
            id="nav-home"
            role="tabpanel"
          >
            <li class="card-post home__job">
              <div className="home__jobTop">
                <div className="home__star">
                  <i className="ibic-multistar"></i> <span>$</span>
                </div>
              </div>
              <div className="">
                <h3>
                  <a className="home__jobTitle">
                    Senior Consultant – (Web and Mobile Application Solution
                    Designer)
                  </a>
                </h3>
              </div>
              <div className="home__jobDetails">
                <div className="home__jobVenue">
                  <span>
                    <i className="ibic-location"></i>
                    Chennai, India
                  </span>
                  <span>
                    <i className="ibic-clock"></i>8 to 10 Years
                  </span>
                </div>

                <div className="home__jobContent">
                  Communication with customer and internal stakeholders -
                  Understanding customer requirements and business objectives
                  ...
                </div>
                <div className="home__jobProfile">
                  <button>UI Developer</button>
                  <button>UI Designer</button>
                </div>
                <div className="home__share">
                  <i className="ibic-share"></i>
                  Share
                </div>
              </div>
            </li>
            <li class="card-post home__job">
              <div className="home__jobTop">
                <div className="home__star">
                  <i className="ibic-multistar"></i> <span>$</span>
                </div>
              </div>
              <div className="home__jobTitle">
                <h3>
                  <a>
                    Senior Consultant – (Web and Mobile Application Solution
                    Designer)
                  </a>
                </h3>
              </div>
              <div className="home__jobDetails">
                <div className="home__jobVenue">
                  <span>
                    <i className="ibic-location"></i>
                    Chennai, India
                  </span>
                  <span>
                    <i className="ibic-clock"></i>8 to 10 Years
                  </span>
                </div>

                <div className="home__jobContent">
                  Communication with customer and internal stakeholders -
                  Understanding customer requirements and business objectives
                  ...
                </div>
                <div className="home__jobProfile">
                  <button>UI Developer</button>
                  <button>UI Designer</button>
                </div>
                <div className="home__share">
                  <i className="ibic-share"></i>
                  Share
                </div>
              </div>
            </li>
            <li class="card-post home__job">
              <div className="home__jobTop">
                <div className="home__star">
                  <i className="ibic-multistar"></i> <span>$</span>
                </div>
              </div>
              <div className="home__jobTitle">
                <h3>
                  <a>
                    Senior Consultant – (Web and Mobile Application Solution
                    Designer)
                  </a>
                </h3>
              </div>
              <div className="home__jobDetails">
                <div className="home__jobVenue">
                  <span>
                    <i className="ibic-location"></i>
                    Chennai, India
                  </span>
                  <span>
                    <i className="ibic-clock"></i>8 to 10 Years
                  </span>
                </div>

                <div className="home__jobContent">
                  Communication with customer and internal stakeholders -
                  Understanding customer requirements and business objectives
                  ...
                </div>
                <div className="home__jobProfile">
                  <button>UI Developer</button>
                  <button>UI Designer</button>
                </div>
                <div className="home__share">
                  <i className="ibic-share"></i>
                  Share
                </div>
              </div>
            </li>
            <li class="card-post home__job">
              <div className="home__jobTop">
                <div className="home__star">
                  <i className="ibic-multistar"></i> <span>$</span>
                </div>
              </div>
              <div className="home__jobTitle">
                <h3>
                  <a>
                    Senior Consultant – (Web and Mobile Application Solution
                    Designer)
                  </a>
                </h3>
              </div>
              <div className="home__jobDetails">
                <div className="home__jobVenue">
                  <span>
                    <i className="ibic-location"></i>
                    Chennai, India
                  </span>
                  <span>
                    <i className="ibic-clock"></i>8 to 10 Years
                  </span>
                </div>

                <div className="home__jobContent">
                  Communication with customer and internal stakeholders -
                  Understanding customer requirements and business objectives
                  ...
                </div>
                <div className="home__jobProfile">
                  <button>UI Developer</button>
                  <button>UI Designer</button>
                </div>
                <div className="home__share">
                  <i className="ibic-share"></i>
                  Share
                </div>
              </div>
            </li>
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
