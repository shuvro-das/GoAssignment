import React from "react";
import "./index.css";
import SearchBox from "./component/SearchBox.js";
import DataCard from "./DataCard.js";

function AdminPanel() {
  return (
    <div>
      <div>
        <h1>Admin Panel</h1>
        <div>
          <SearchBox />
          <DataCard />
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
