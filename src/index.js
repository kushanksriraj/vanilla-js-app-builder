import Logo from "./logo.svg";

const root = document.getElementById("root");
const name = "Kushank";
let route;

function init() {
  root.innerHTML = /*html*/ `
        <img src="${Logo}" alt="build icon" />
        <h1>vanillaJS app Builder</h1>
        <nav>
          <button id="about">About</button>
          <button id="contact">Contact</button>
        </nav>
        <div id="route"></div>`;

  route = document.querySelector("#route");
  document.querySelector("#about").addEventListener("click", showAboutPage);
  document.querySelector("#contact").addEventListener("click", showContactPage);
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

function showAboutPage(event) {
  const loader = showLoader(root);

  import(/* webpackPrefetch: true */ "./App").then(({ default: App }) => {
    hideLoader(root, loader);
    route.innerHTML = App({ name });
  });
}

function showContactPage(event) {
  const loader = showLoader(root);

  import(/* webpackPrefetch: true */ "./Contact").then(
    ({ default: Contact }) => {
      hideLoader(root, loader);
      route.innerHTML = Contact();
    }
  );
}

init();
