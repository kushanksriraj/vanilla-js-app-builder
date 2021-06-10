import "./index.css";
import githubLogo from "./githubLogo.png";
const root = document.getElementById("root");
let route;

function init() {
  const content = `
    <nav class="nav">
      <header class="nav__header">vanillaJS App Builder</header>
      <div class="git-logo">
        <a href="https://github.com/kushanksriraj/webpack-starter/tree/development" target="_blank" rel="noopener noreferrer">
          <img src="${githubLogo}" alt="GitHub" />
        </a>
      </div>
    </nav>
    <div class="logo">
      <div class="material-icons-outlined">
         build_circle
      </div>
    </div>
    <div class="example">
      <p>Start editing files in <code><strong>src</strong></code> folder to see magic happen...</p>
      <button class="example__btn" id="counter-show-btn">Counter example</button>
    </div>
    <div class="route" id="route"></div>
  `;

  root.innerHTML = content;
  route = document.querySelector("#route");
  document
    .querySelector("#counter-show-btn")
    .addEventListener("click", showCounterApp);
}

function showLoader(root) {
  const loader = document.createElement("div");
  loader.innerText = "loading..";
  root.appendChild(loader);
  return loader;
}

function hideLoader(root, loader) {
  root.removeChild(loader);
}

function showCounterApp() {
  const loader = showLoader(root);

  import(/* webpackPrefetch: true */ "./App").then(({ App, appFunctions }) => {
    hideLoader(root, loader);
    route.innerHTML = App();
    appFunctions();
  });
}

init();
