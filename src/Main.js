import React from "react";
import Breadcrub from "./components/Breadcrub";
import Cards from "./components/Cards";
import Navigation from "./components/Navigation";
import SideBar from "./components/SideBar";
import Table from "./components/Table";

const Main = () => {
  return (
    <>
      <Navigation />
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <SideBar />
        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          <Breadcrub />
          <main className="py-6 bg-surface-secondary">
            <div className="container-fluid">
              <div className="row g-6 mb-6">
                <Cards
                  title={"Budget"}
                  amount={"750.90"}
                  percent={"13"}
                  time={"Since last month"}
                  iconShape={"icon icon-shape bg-tertiary text-white text-lg rounded-circle"}
                  icon={"bi bi-credit-card"}
                />
                <Cards
                  title={"New projects  "}
                  amount={"280"}
                  percent={"30"}
                  time={"Since last month"}
                  iconShape={"icon icon-shape bg-primary text-white text-lg rounded-circle"}
                  icon={"bi bi-people"}
                />
                <Cards
                  title={"Total hours"}
                  amount={"1000"}
                  percent={"5"}
                  time={"Since last month"}
                  iconShape={"icon icon-shape bg-info text-white text-lg rounded-circle"}
                  icon={"bi bi-clock-history"}
                />
                <Cards
                  title={"Work Load"}
                  amount={"750.90"}
                  percent={"95"}
                  time={"Since last month"}
                  iconShape={"icon icon-shape bg-warning text-white text-lg rounded-circle"}
                  icon={"bi bi-minecart-loaded"}
                />                  
              </div>

              <div className="card shadow border-0 mb-7 mt-4">
                <div className="card-header">
                  <h5 className="mb-0">Applications</h5>
                </div>
                <Table />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default Main;
