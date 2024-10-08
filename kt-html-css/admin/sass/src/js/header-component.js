class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<nav>
  <div class="header">
    <div class="header-logo">
      <img src="assets/img/logo.png" alt="logo" />
      <span>phoenix</span>
    </div>

    <div class="header-search">
      <i class="mm-1 icon1-search"></i>
      <form action="">
        <input type="text" placeholder="Search..." />
      </form>
    </div>

    <ul class="header-right">
      <li>
        <div><i class="mm-1 icon1-instagram"></i></div>
      </li>
      <li>
        <div><i class="mm-1 icon1-bell"></i></div>
      </li>
      <li>
        <div><i class="mm-1 icon1-grid"></i></div>
      </li>
      <li>
        <a onclick="toggleShowHide('dropdownProfile')" class="avatar" href="#!">
          <img src="assets/img/avatar-1.png" alt="" />
        </a>
        <div id="dropdownProfile" class="dropdown-profile">
          <div class="card">
            <div class="card-body">
              <div class="group">
                <a class="avatar" href="#!">
                  <img src="assets/img/avatar-1.png" alt="" />
                </a>
                <h6>Jerry Seinfield</h6>
              </div>
              <div>
                <input
                  class="form-control"
                  placeholder="Update your status"
                  type="text"
                />
              </div>
            </div>
            <div class="parent-wrapper">
              <ul>
                <li class="nav-item">
                  <i class="mm-1 icon1-user-2"></i>
                  <a class="nav-link" href="#!">
                    <span>Profile</span>
                  </a>
                </li>
                <li class="nav-item">
                  <i class="mm-1 icon1-analysis"></i>
                  <a class="nav-link" href="#!">
                    <span>Dashboard</span>
                  </a>
                </li>
                <li class="nav-item">
                  <i class="mm-1 icon1-locked"></i>
                  <a class="nav-link" href="#!">
                    <span>Posts & Activity</span>
                  </a>
                </li>
                <li class="nav-item">
                  <i class="mm-1 icon1-settings"></i>
                  <a class="nav-link" href="#!">
                    <span>Settings & Privacy</span>
                  </a>
                </li>
                <li class="nav-item">
                  <i class="mm-1 icon1-help-circle"></i>
                  <a class="nav-link" href="#!">
                    <span>Help Center</span>
                  </a>
                </li>
                <li class="nav-item">
                  <i class="mm-1 icon1-shield"></i>
                  <a class="nav-link" href="#!">
                    <span>Language</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-footer">
              <ul class="nav">
                <li class="nav-item">
                  <i class="mm-1 icon1-user-2"></i>
                  <a class="nav-link" href="#!">
                    <span>Add other acconut</span>
                  </a>
                </li>
              </ul>
              <div class="sign-out">
                <a class="btn btn-secondary btn--center" href="#!">
                  <i class="mm-1 icon1-log-out"></i>Sign out</a
                >
              </div>
              <div class="card-footer-nav">
                <a class="" href="#!">Privacy policy</a>•<a class="" href="#!"
                  >Terms</a
                >•<a class="" href="#!">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</nav>

              `;
  }
}

customElements.define("my-header", Header);
