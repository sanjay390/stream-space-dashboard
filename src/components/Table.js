import React, { useState, useEffect } from "react";
import axios from "axios";

const Table = () => {
  const [post, setPost] = useState();

  useEffect(() => {
    const baseURL = "https://reqres.in/api/users?page=2";
    axios.get(baseURL).then((response) => {
      setPost(response.data.data);
    });
  }, []);

  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover table-nowrap">
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {post &&
              post.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        alt="..."
                        src={data.avatar}
                        className="avatar avatar-sm rounded-circle me-2"
                      />
                      <a className="text-heading font-semibold" href="#">
                        {data.first_name} {data.last_name}
                      </a>
                    </td>
                    <td>{data.email}</td>
                    <td className="">
                      <a href="#" className="btn btn-sm btn-neutral">
                        View
                      </a>
                      <button
                        type="button"
                        className="btn btn-sm btn-square btn-neutral text-danger-hover"
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      
      <div className="card-footer border-0 py-5">
        <span className="text-muted text-sm">
          Showing 10 items out of 250 results found
        </span>
      </div>
    </>
  );
};
export default Table;
