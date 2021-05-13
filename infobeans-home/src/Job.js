import React from "react";

const Job = (props) => {
  console.log(props.job);
  return (
    <div className="card-post home__job">
      <div className="home__jobTop">
        <div className="home__star">
          <i className="ibic-multistar"></i> <span>$</span>
        </div>
      </div>
      <div className="home__jobTitle">
        <h3>
          <a>{props.job.title}</a>
        </h3>
      </div>
      <div className="home__jobDetails">
        <div className="home__jobVenue">
          <span>
            <i className="ibic-location"></i>
            {props.job.location}
          </span>
          <span>
            <i className="ibic-clock"></i>
            {props.job.experience}
          </span>
        </div>

        <div className="home__jobContent">{props.job.description}</div>
        <div className="home__jobProfile">
          {props.job.tags.map((tag) => {
            return <button>{tag}</button>;
          })}
        </div>
        <div className="home__share">
          <i className="ibic-share"></i>
          Share
        </div>
      </div>
    </div>
  );
};

export default Job;
