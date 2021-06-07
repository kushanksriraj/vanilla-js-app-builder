import _ from "lodash";
import "./App.css";

const App = ({ name }) => {
  return /*html*/ `
    <h2> ${_.join(["Welcome,", name], " ")} </h2>
    <p> Build apps with plain JS but with modern tooling  </p>
    <ul>
      <li>1</li>
      <li>2</li>
    </ul>
    `;
};

export default App;
