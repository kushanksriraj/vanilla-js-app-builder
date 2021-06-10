import "./App.css";

export const App = () => {
  console.log(process.env.SECRET_KEY);
  return `
    <div class="app">
      <div id="counter" class="counter__value"></div>
        <div class="btn__wrap">
          <div class="ui__btn" id="btn-decrement">
            <div class="ui__btn-text">Decrement</div>
            <div class="ui__btn-icon">
              <span class="material-icons-outlined">
                  remove
              </span>
            </div>
          </div>
          <div class="ui__btn" id="btn-increment">
            <div class="ui__btn-text">Increment</div>
            <div class="ui__btn-icon">
              <span class="material-icons-outlined">
               add
              </span>
            </div>
          </div>
        </div>
    </div>
  `;
};

export const appFunctions = () => {
  let count = 0;
  const showCount = document.querySelector("#counter");
  const update = () => (showCount.innerText = count);

  update();

  document.querySelector("#btn-increment").addEventListener("click", () => {
    count++;
    update();
  });

  document.querySelector("#btn-decrement").addEventListener("click", () => {
    count--;
    update();
  });
};
