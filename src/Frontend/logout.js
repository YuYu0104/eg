import React from "react";

function Logout(props) {
  localStorage.removeItem("pizza");
  window.location.href = "/login";
  return <div></div>;
}

export default Logout;
