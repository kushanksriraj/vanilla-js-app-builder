import Logo from "./logo.svg";

const root = document.getElementById("root");
var name = "Kushank";
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

function showAboutPage() {
  const loader = showLoader(root);

  import(/* webpackPrefetch: true */ "./App").then(({ default: App }) => {
    hideLoader(root, loader);
    route.innerHTML = App({ name });
  });
}

function showContactPage() {
  const loader = showLoader(root);

  import(/* webpackPrefetch: true */ "./Contact").then(
    ({ default: Contact }) => {
      hideLoader(root, loader);
      route.innerHTML = Contact();
    }
  );
}

init();
