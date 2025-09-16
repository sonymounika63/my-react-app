import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-light p-3" style={{ minWidth: "200px" }}>
      <ul className="list-unstyled">
        <li className="mb-2">
          <Link to="/home" className="text-decoration-none">
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/users" className="text-decoration-none">
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
