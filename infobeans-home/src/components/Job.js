import React from "react";

const Job = (props) => {
  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;

  return (
    <div className="card-post home__job">
      {props.job && (
        <span>
          <div className="home__jobTop">
            <div className="home__star">
              <i className="ibic-multistar"></i> <span>$</span>
            </div>
          </div>
          <div className="home__jobWrapper">
            <div className="home__jobTitle">
              <h3>
                <a>{props.job.title}</a>
              </h3>
            </div>
            <div className="home__jobVenue">
              <span style={{ marginRight: "10px" }}>
                <i className="ibic-location"></i>
                {props.job.location}
              </span>
              <span>
                <i className="ibic-clock"></i>
                {props.job.experience}
              </span>
            </div>

            <div className="home__jobContent">
              {truncate(props.job.description, 200)}
            </div>
          </div>
          <div className="home__jobProfile">
            {props.job.tags.map((tag) => {
              return <button>{tag}</button>;
            })}
          </div>
          <div className="home__share">
            <i className="ibic-share"></i>
            Share
          </div>
        </span>
      )}
    </div>
  );
};

export default Job;
