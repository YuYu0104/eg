import React from "react";
function Navi(props) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light nav"
        id="navbar"
      >
        <a class="navbar-brand text-white" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active ">
              <a class="nav-link text-white" href="#">
                Home
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link text-white" href="#">
                Product
              </a>
            </li>

            <li class="nav-item active">
              <a class="nav-link text-white" href="#">
                Download
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link text-white" href="#">
                Service
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link text-white" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navi;
