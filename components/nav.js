import { navigateTo } from "../router.js";

export const renderNav = () => {
  const nav = document.createElement("nav");
  nav.classList.add("navStyle");
  nav.innerHTML += `
  <button id="homeButton" class="homeButton"><img class="home-img" src="./img/home-button.png" alt="Home-img"/></button>
  <label for="menu">☰</label>
  <input type="checkbox" id="menu">
  <div class= "div-filtros">
  <label for="origin">Filter:</label>
  <select id="origin" name="origin" data-testid="select-filterOrigin">
  <option disabled selected value="">Select Origin</option>
  <option value="East Blue">East Blue</option>
  <option value="North Blue">North Blue</option>
  <option value="West Blue">West Blue</option>
  <option value="South Blue">South Blue</option>
  <option value="Grand Line">Grand Line</option>
  <option value="New World">New World</option>
  <option value="Unknown">Unknown</option>
  </select>
  <label for="crew">Filter:</label>
  <select id="crew" name="crew" data-testid="select-filter">
  <option disabled selected value="">Select Crew</option>
  <option value="Straw Hat Pirates">Straw Hat Pirates</option>
  <option value="Kuja Pirates">Kuja Pirates</option>
  <option value="Marines">Marines</option>
  <option value="Blackbeard Pirates">Blackbeard Pirates</option>
  <option value="Big Mom Pirates">Big Mom Pirates</option>
  <option value="Heart Pirates">Heart Pirates</option>
  <option value="Revolutionaries">Revolutionaries</option>
  <option value="Red-Haired Pirates">Red Haired Pirates</option>
  <option value="Kid Pirates">Kid Pirates</option>
  <option value="Baroque Works">Baroque Works</option>
  <option value="Spade Pirates">Spade Pirates</option>
  <option value="Roger Pirates">Roger Pirates</option>
  <option value="Buggy Pirates">Buggy Pirates</option>
  <option value="Bonney Pirates">Bonney Pirates</option>
  </select>  
  <label for="a-to-z">Sort:</label>
  <select id="a-to-z" name="a-to-z" data-testid="select-sort">
  <option disabled selected value="">Select Order</option>
  <option value="asc">A-Z</option>
  <option value="desc">Z-A</option>
  </select>
  <label for="bounty">Sort:</label>
  <select id="bounty" name="bounty" data-testid="select-bounty">
  <option disabled selected value="">Select Bounty</option>
  <option value="asc">Lowest</option>
  <option value="desc">Highest</option>
  </select>
  <button data-testid="button-clear" class="button">Clear</button>
  <button id="facts" class="button">Facts</button>
  <button id="apiKey" class="button">Api Key</button>
  <button id="everyoneButton" class="button">Chat With Everyone</button>
  </div>`;

  const homeIcon = nav.querySelector("#homeButton");
  homeIcon.addEventListener("click", (e) => {
    e.preventDefault();
    navigateTo("/");
  });

  const title = document.createElement("h2");


  title.id = "titulo";
  title.style.display = "none";
  title.classList.add("detallesStyle");
  nav.appendChild(title);

  const apiKeyInput = nav.querySelector("#apiKey");
  apiKeyInput.addEventListener("click", (e) => {

    e.preventDefault();
    navigateTo("/api-key");
  })

  const everyoneButton = nav.querySelector("#everyoneButton");

  const apiSaved = localStorage.getItem("apiKey");


  everyoneButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (apiSaved === null) {
      navigateTo("/api-key")
    } else {
      navigateTo("/panel");
    }
  });



  return nav;
}