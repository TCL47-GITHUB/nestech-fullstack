class Main extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
 
<div class="container">
  <div class="wrapper">
    <div class="left">
      <!-- Echart/Bar -->
      <div id="stackedBar" class="card">
        <div class="card-header">
          <h4 >Stacked Bar</h4>
          <nav class="nav doc-tab-nav">
            <button onclick="copyContent('content')"
              class="btn btn-link px-2 text-body copy-code-btn"
              type="button"
            >
              <i class="icon-mm-copy"></i>Copy Code
            </button>
            <a id="btnViewCode" onclick="toggleContent('btnViewCode','content')" class="btn code-btn collapsed"  href="#basic-form-code">
              <i class="icon-mm-eye"></i>
              View code</a>      
          </nav>
        </div>
         <pre id="content" class="language-markup view-code"><code>&lt;form&gt;
  &lt;div class="mb-3"&gt;
    &lt;label class="form-label" for="basic-form-name"&gt;Name&lt;/label&gt;
    &lt;input class="form-control" id="basic-form-name" type="text" placeholder="Name"&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label class="form-label" for="basic-form-email"&gt;Email address&lt;/label&gt;
    &lt;input class="form-control" id="basic-form-email" type="email" placeholder="name@example.com"&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label class="form-label" for="basic-form-password"&gt;Password&lt;/label&gt;
    &lt;input class="form-control" id="basic-form-password" type="password" placeholder="Password"&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label class="form-label" for="basic-form-dob"&gt;Date of Birth&lt;/label&gt;
    &lt;input class="form-control" id="basic-form-dob" type="date"&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label class="form-label" for="basic-form-gender"&gt;Gender&lt;/label&gt;
    &lt;select class="form-select" id="basic-form-gender" aria-label="Default select example"&gt;
      &lt;option selected="selected"&gt;Select your gender&lt;/option&gt;
      &lt;option value="male"&gt;Male&lt;/option&gt;
      &lt;option value="female"&gt;Female&lt;/option&gt;
      &lt;option value="other"&gt;Other&lt;/option&gt;
    &lt;/select&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;div class="form-check"&gt;
      &lt;input class="form-check-input" id="flexRadioDefault1" type="radio" name="flexRadioDefault"&gt;
      &lt;label class="form-check-label mb-0" for="flexRadioDefault1"&gt;Personal Account&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class="form-check"&gt;
      &lt;input class="form-check-input" id="flexRadioDefault2" type="radio" name="flexRadioDefault" checked="checked"&gt;
      &lt;label class="form-check-label mb-0" for="flexRadioDefault2"&gt;Business Account&lt;/label&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label class="form-label"&gt;Upload Image&lt;/label&gt;
    &lt;input class="form-control" type="file"&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label class="form-label" for="basic-form-textarea"&gt;Description&lt;/label&gt;
    &lt;textarea class="form-control" id="basic-form-textarea" rows="3" placeholder="Description"&gt;&lt;/textarea&gt;
  &lt;/div&gt;
  &lt;div class="mb-3 form-check"&gt;
    &lt;input class="form-check-input" id="basic-form-checkbox" type="checkbox"&gt;
    &lt;label class="form-check-label" for="basic-form-checkbox"&gt;Remember me&lt;/label&gt;
  &lt;/div&gt;
  &lt;button class="btn btn-primary" type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>

        <div class="card-body card-body-chart">
            <div id="bar-chart-1"></div>
            <div id="bar-chart-2"></div>
          </div>


      </div>
      <!-- Basic form -->
      <div id="basicForm" class="card">
        <div class="card-header">
          <h4>Basic form</h4>
          <nav class="nav doc-tab-nav">
            <button onclick="copyContent('content')"
              class="btn btn-link px-2 text-body copy-code-btn"
              type="button"
            >
              <i class="icon-mm-copy"></i>Copy Code
            </button>
            <a id="btnViewCode" onclick="toggleContent('btnViewCode','content')" class="btn code-btn collapsed"  href="#basic-form-code">
              <i class="icon-mm-eye"></i>
              View code</a>      
          </nav>
        </div>
         <pre id="content" class="language-markup view-code"><code>&lt;form&gt;
  &lt;div class="mb-3"&gt;
    &lt;label class="form-label" for="basic-form-name"&gt;Name&lt;/label&gt;
    &lt;input class="form-control" id="basic-form-name" type="text" placeholder="Name"&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label class="form-label" for="basic-form-email"&gt;Email address&lt;/label&gt;
    &lt;input class="form-control" id="basic-form-email" type="email" placeholder="name@example.com"&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label class="form-label" for="basic-form-password"&gt;Password&lt;/label&gt;
    &lt;input class="form-control" id="basic-form-password" type="password" placeholder="Password"&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label class="form-label" for="basic-form-dob"&gt;Date of Birth&lt;/label&gt;
    &lt;input class="form-control" id="basic-form-dob" type="date"&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label class="form-label" for="basic-form-gender"&gt;Gender&lt;/label&gt;
    &lt;select class="form-select" id="basic-form-gender" aria-label="Default select example"&gt;
      &lt;option selected="selected"&gt;Select your gender&lt;/option&gt;
      &lt;option value="male"&gt;Male&lt;/option&gt;
      &lt;option value="female"&gt;Female&lt;/option&gt;
      &lt;option value="other"&gt;Other&lt;/option&gt;
    &lt;/select&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;div class="form-check"&gt;
      &lt;input class="form-check-input" id="flexRadioDefault1" type="radio" name="flexRadioDefault"&gt;
      &lt;label class="form-check-label mb-0" for="flexRadioDefault1"&gt;Personal Account&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class="form-check"&gt;
      &lt;input class="form-check-input" id="flexRadioDefault2" type="radio" name="flexRadioDefault" checked="checked"&gt;
      &lt;label class="form-check-label mb-0" for="flexRadioDefault2"&gt;Business Account&lt;/label&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label class="form-label"&gt;Upload Image&lt;/label&gt;
    &lt;input class="form-control" type="file"&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label class="form-label" for="basic-form-textarea"&gt;Description&lt;/label&gt;
    &lt;textarea class="form-control" id="basic-form-textarea" rows="3" placeholder="Description"&gt;&lt;/textarea&gt;
  &lt;/div&gt;
  &lt;div class="mb-3 form-check"&gt;
    &lt;input class="form-check-input" id="basic-form-checkbox" type="checkbox"&gt;
    &lt;label class="form-check-label" for="basic-form-checkbox"&gt;Remember me&lt;/label&gt;
  &lt;/div&gt;
  &lt;button class="btn btn-primary" type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>
        <div class="card-body">
          <form class="form" action="">
            <div class="form-item">
              <label class="form-label" for="basic-font-name">Name</label>
              <input
                class="form-control"
                id="basic-form-name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div class="form-item">
              <label class="form-label" for="basic-font-email"
                >Email address</label
              >
              <input
                class="form-control"
                id="basic-form-email"
                type="email"
                placeholder="name@example.com"
              />
            </div>
            <div class="form-item">
              <label class="form-label" for="basic-font-password"
                >Password</label
              >
              <input
                class="form-control"
                id="basic-form-password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div class="form-item">
              <label class="form-label" for="basic-font-dob"
                >Date of Birth</label
              >
              <input
                class="form-control"
                id="basic-form-dob"
                type="date"
                placeholder="Default select example"
              />
            </div>
            <div class="form-item">
              <label class="form-label" for="basic-font-gender">Gender</label>
              <select class="form-select" id="basic-form-gender">
                <option selected="selected">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="form-item">
              <div class="form-check">
                <input
                  class="form-check--input"
                  checked="checked"
                  type="radio"
                  id="flexRadioDefault1"
                  name="flexRadioDefault"
                />
                 
                <label class="form-check--label" for="flexRadioDefault1"
                  >Personal Account</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check--input"
                  type="radio"
                  id="flexRadioDefault2"
                  name="flexRadioDefault"
                />
                 
                <label class="form-check--label" for="flexRadioDefault2"
                  >Business Account</label
                >
              </div>
            </div>
            <div class="form-item">
              <label class="form-label">Upload Image</label>
              <input class="form-control" type="file" />
            </div>
            <div class="form-item">
              <label class="form-label" for="basic-form-textarea"
                >Description</label
              >
              <textarea
                class="form-control"
                id="basic-form-textarea"
                rows="3"
                placeholder="Description"
              ></textarea>
            </div>
            <div class="form-item form-check">
              <input
                class="form-check-input"
                id="basic-form-checkbox"
                type="checkbox"
              />
              <label class="form-check-label" for="basic-form-checkbox"
                >Remember me</label
              >
            </div>
            <button class="btn btn-primary" type="submit">Submit</button>
          </form>
        </div>
      </div>
      <!-- Accented tables -->
      <div class="card">
        <div class="card-header">
          <h4>Accented tables</h4>
          <nav class="nav doc-tab-nav">
            <button onclick="copyContent('content1')"
              class="btn btn-link px-2 text-body copy-code-btn"
              type="button"
            >
              <i class="icon-mm-copy"></i>Copy Code
            </button>
            <a id="btnViewCode1" onclick="toggleContent('btnViewCode1','content1')" class="btn code-btn collapsed"  href="#basic-form-code">
              <i class="icon-mm-eye"></i>
              View code</a>      
          </nav>
        </div>
        <pre id="content1" class="language-markup view-code"><code>&lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope="col"&gt;#&lt;/th&gt;
      &lt;th scope="col"&gt;First&lt;/th&gt;
      &lt;th scope="col"&gt;Last&lt;/th&gt;
      &lt;th scope="col"&gt;Handle&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;1&lt;/th&gt;
      &lt;td&gt;Mark&lt;/td&gt;
      &lt;td&gt;Otto&lt;/td&gt;
      &lt;td&gt;@mdo&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;2&lt;/th&gt;
      &lt;td&gt;Jacob&lt;/td&gt;
      &lt;td&gt;Thornton&lt;/td&gt;
      &lt;td&gt;@fat&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;3&lt;/th&gt;
      &lt;td colspan="2"&gt;Larry the Bird&lt;/td&gt;
      &lt;td&gt;@twitter&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
&lt;h4 class="mt-4 mb-3 text-body-secondary"&gt;Table Dark&lt;/h4&gt;
&lt;table class="table table-striped table-dark"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope="col"&gt;#&lt;/th&gt;
      &lt;th scope="col"&gt;First&lt;/th&gt;
      &lt;th scope="col"&gt;Last&lt;/th&gt;
      &lt;th scope="col"&gt;Handle&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;1&lt;/th&gt;
      &lt;td&gt;Mark&lt;/td&gt;
      &lt;td&gt;Otto&lt;/td&gt;
      &lt;td&gt;@mdo&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;2&lt;/th&gt;
      &lt;td&gt;Jacob&lt;/td&gt;
      &lt;td&gt;Thornton&lt;/td&gt;
      &lt;td&gt;@fat&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;3&lt;/th&gt;
      &lt;td colspan="2"&gt;Larry the Bird&lt;/td&gt;
      &lt;td&gt;@twitter&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
&lt;h4 class="mt-4 mb-3 text-body-secondary"&gt;Table Success&lt;/h4&gt;
&lt;table class="table table-striped table-success"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope="col"&gt;#&lt;/th&gt;
      &lt;th scope="col"&gt;First&lt;/th&gt;
      &lt;th scope="col"&gt;Last&lt;/th&gt;
      &lt;th scope="col"&gt;Handle&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;1&lt;/th&gt;
      &lt;td&gt;Mark&lt;/td&gt;
      &lt;td&gt;Otto&lt;/td&gt;
      &lt;td&gt;@mdo&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;2&lt;/th&gt;
      &lt;td&gt;Jacob&lt;/td&gt;
      &lt;td&gt;Thornton&lt;/td&gt;
      &lt;td&gt;@fat&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;3&lt;/th&gt;
      &lt;td colspan="2"&gt;Larry the Bird&lt;/td&gt;
      &lt;td&gt;@twitter&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
        </code></pre>
        <div class="table-group">
          <h4 class="text-body-secondary">Table Striped</h4>
          <table class="table table-striped">
            <thead>
              <tr>
                <th >#</th>
                <th >First</th>
                <th >Last</th>
                <th >Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th >1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th >2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th >3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <h4 class="text-body-secondary">Table Dark</h4>
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th >#</th>
                <th >First</th>
                <th >Last</th>
                <th >Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th >1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th >2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th >3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <h4 class="mt-4 mb-3 text-body-secondary">Table Success</h4>
          <table class="table table-striped table-success">
            <thead>
              <tr>
                <th >#</th>
                <th >First</th>
                <th >Last</th>
                <th >Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th >1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th >2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th >3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>


    <div class="right">
      <div class="parent-wrapper">
        <h5>On this page</h5>
        <ul>
          <li class="nav-item">
            <a class="nav-link" href="#stackedBar">
              <span>Stacked Bar</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#basicForm">
              <span>Basic form</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">
              <span>Horizontal form</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">
              <span>Horizontal form label sizing</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">
              <span>Form grid</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">
              <span>Form Grid Layout</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">
              <span>Grid - Column Sizing</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">
              <span>Grid - Auto Sizing</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">
              <span>Gutters</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">
              <span>Utilities</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
          `;
  }
}

customElements.define("my-main", Main);