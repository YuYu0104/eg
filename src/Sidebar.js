import React from "react";
function Sidebar(props) {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
          <h1>
            <span
              style={{ color: "yellow" }}
              className="brand-text font-weight-light"
            >
              Food Panda
            </span>
          </h1>
        </a>

        <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
          <div className="os-resize-observer-host observed">
            <div className="os-resize-observer"></div>
          </div>
          <div className="os-size-auto-observer observed">
            <div className="os-resize-observer"></div>
          </div>
          <div className="os-content-glue"></div>
          <div className="os-padding">
            <div className="os-viewport os-viewport-native-scrollbars-invisible">
              <div className="os-content">
                <div className="form-inline">
                  <div className="input-group" data-widget="sidebar-search">
                    <input
                      class="form-control form-control-sidebar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-sidebar">
                        <i class="fas fa-search fa-fw"></i>
                      </button>
                    </div>
                  </div>
                  <div class="sidebar-search-results">
                    <div class="list-group">
                      <a href="#" class="list-group-item">
                        <div class="search-title">
                          <strong class="text-light"></strong>N
                          <strong class="text-light"></strong>o
                          <strong class="text-light"></strong>{" "}
                          <strong class="text-light"></strong>e
                          <strong class="text-light"></strong>l
                          <strong class="text-light"></strong>e
                          <strong class="text-light"></strong>m
                          <strong class="text-light"></strong>e
                          <strong class="text-light"></strong>n
                          <strong class="text-light"></strong>t
                          <strong class="text-light"></strong>{" "}
                          <strong class="text-light"></strong>f
                          <strong class="text-light"></strong>o
                          <strong class="text-light"></strong>u
                          <strong class="text-light"></strong>n
                          <strong class="text-light"></strong>d
                          <strong class="text-light"></strong>!
                          <strong class="text-light"></strong>
                        </div>
                        <div class="search-path"></div>
                      </a>
                    </div>
                  </div>
                </div>

                <nav class="mt-2">
                  <ul
                    class="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                  >
                    <li class="nav-item menu-open">
                      <a href="#" class="nav-link active">
                        <i class="fa-solid fa-laptop nav-icon"></i>
                        <p>
                          Product
                          <i class="right fas fa-angle-left"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">
                        <li class="nav-item">
                          <a href="/admin/product" class="nav-link ">
                            <i class="fa-solid fa-circle-plus nav-icon"></i>
                            <p>Add Product</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="/admin/products" class="nav-link">
                            <i class="fa-solid fa-list nav-icon"></i>
                            <p>Product List</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <ul
                    class="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                  >
                    <li class="nav-item menu-open">
                      <a href="#" class="nav-link active">
                        <i class="fa-solid fa-laptop nav-icon"></i>
                        <p>
                          Service
                          <i class="right fas fa-angle-left"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">
                        <li class="nav-item">
                          <a href="/admin/service" class="nav-link ">
                            <i class="fa-solid fa-circle-plus nav-icon"></i>
                            <p>Add Service</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="/admin/services" class="nav-link">
                            <i class="fa-solid fa-list nav-icon"></i>
                            <p>Service List</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <ul
                    class="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                  >
                    <li class="nav-item menu-open">
                      <a href="#" class="nav-link active">
                        <i class="fa-solid fa-laptop nav-icon"></i>
                        <p>
                          User
                          <i class="right fas fa-angle-left"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">
                        <li class="nav-item">
                          <a href="/admin/user" class="nav-link ">
                            <i class="fa-solid fa-circle-plus nav-icon"></i>
                            <p>Add User</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="/admin/users" class="nav-link">
                            <i class="fa-solid fa-list nav-icon"></i>
                            <p>User List</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <ul
                    class="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                  >
                    <li class="nav-item ">
                      <a href="/logout" class="nav-link active">
                        <p>Logout</p>
                      </a>
                    </li>

                    <li class="nav-item " className="pt-2">
                      <a href="/orders" class="nav-link active">
                        <p>Order</p>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
            <div class="os-scrollbar-track">
              <div class="os-scrollbar-handle"></div>
            </div>
          </div>
          <div class="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
            <div class="os-scrollbar-track">
              <div class="os-scrollbar-handle"></div>
            </div>
          </div>
          <div class="os-scrollbar-corner"></div>
        </div>
      </aside>
    </div>
  );
}
export default Sidebar;
