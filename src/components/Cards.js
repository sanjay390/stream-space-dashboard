import React from "react";

const Cards = ({ title, amount, percent, time, iconShape, icon }) => {
  return (
    <>
      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card shadow border-0">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                  {title}
                </span>
                <span className="h3 font-bold mb-0">${amount}</span>
              </div>
              <div className="col-auto">
                <div className={iconShape}>
                  <i className={icon}></i>
                </div>
              </div>
            </div>
            <div className="mt-2 mb-0 text-sm">
              <span className="badge badge-pill bg-soft-success text-success me-2">
                <i className="bi bi-arrow-up me-1"></i>
                {percent}%
              </span>
              <span className="text-nowrap text-xs text-muted">{time}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
