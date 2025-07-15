import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="">Users</Link></li> {/* This links to /admin */}
          <li><Link to="products">Products</Link></li> {/* This links to /admin/products */}
          <li><Link to="orders">Orders</Link></li> {/* This links to /admin/orders */}
        </ul>
      </nav>
      <hr />
      <Outlet /> {/* This renders the nested route content */}
    </div>
  );
}
