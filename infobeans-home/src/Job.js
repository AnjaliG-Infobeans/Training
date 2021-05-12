import React from "react";

const Job = () => {
  return (
    <li className="card-post home__job">
      <div className="home__jobTop">
        <div className="home__star">
          <i className="ibic-multistar"></i> <span>$</span>
        </div>
      </div>
      <div className="home__jobTitle">
        <h3>
          <a>
            Senior Consultant – (Web and Mobile Application Solution Designer)
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
          Communication with customer and internal stakeholders - Understanding
          customer requirements and business objectives ...
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
  );
};

export default Job;
