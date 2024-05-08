import React from "react";
import ActionButtonnew from "./ActionButton";
import Appbar2 from "./Appbar2";

const AdminPage = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const phone = localStorage.getItem("phone");
  return (
    <>
      <div>
        <div>
          <Appbar2 />
        </div>
        <div style={{ marginTop: "-4%" }}>
          <ActionButtonnew />
        </div>
        <h1>Welcome, {userData.email}</h1>
        <h1>Welcome, {phone}</h1>
      </div>
    </>
  );
};

export default AdminPage;
