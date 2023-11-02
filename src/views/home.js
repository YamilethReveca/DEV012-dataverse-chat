import { renderNav } from "../components/nav.js";
import { renderHeader } from "../components/header.js";
import { renderFooter } from "../components/footer.js"
import { filterData } from "../lib/dataFunctions.js";
import { renderItems } from "../components/cards.js";
import dataset from "../data/dataset.js";
import { sortBounty } from "../lib/dataFunctions.js";


export const renderHome = () => {
  const section = document.createElement("section");
  section.classList.add("section");
  const nav = renderNav();
  const footer = renderFooter();
  const header = renderHeader();
  const ul = renderItems();
  const rootRender = document.querySelector("#root");


  nav.innerHTML += `
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
  <label for="status">Filter:</label>
  <select id="status" name="status" data-testid="select-filterStatus">
  <option disabled selected value="">Select Status</option>
  <option value="Deceased">Deceased</option>
  <option value="Alive">Alive</option>
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
  <button data-testid="button-clear">Clear</button>
  <button id="facts" class="button">Facts</button>
  </div>`
  
    section.appendChild(header)
    section.appendChild(nav);
    section.appendChild(ul)
  window.addEventListener('DOMContentLoaded', function () {
    const filterOrigin = document.querySelector('[data-testid="select-filterOrigin"]');
    const sortName = document.querySelector('[data-testid="select-sort"]');
    const sortedBounty = document.querySelector('[data-testid="select-bounty"]');
    const filterCrew = document.querySelector('[data-testid="select-filter"]');
    const filterStatus = document.querySelector('[data-testid="select-filterStatus"]');
    const clearButton = document.querySelector('[data-testid="button-clear"]');



    let result;
    filterOrigin.addEventListener("change", (e) => {
      e.preventDefault();
      const value = filterOrigin.value;
      const filteredOrigin = filterData(dataset, "seaOfOrigin", value);
      filterCrew.value = "";
      filterStatus.value = "";
      section.appendChild(renderItems(filteredOrigin));
      result = filteredOrigin;
    });

    filterCrew.addEventListener("change", (e) => {
      e.preventDefault();
      const value = filterCrew.value;
      const filteredCrew = filterData(dataset, "crewOrigin", value);
      //rootRender.innerHTML = "";
      filterOrigin.value = "";
      filterStatus.value = "";
      const filteredList = renderItems(filteredCrew);
      rootRender.appendChild(filteredList);
      result = filteredCrew;
    });
    filterStatus.addEventListener("change", (e) => {
      e.preventDefault();
      const value = filterStatus.value;
      const filteredStatus = filterData(dataset, "status", value);
      rootRender.innerHTML = "";
      filterOrigin.value = "";
      filterCrew.value = "";
      const filteredList = renderItems(filteredStatus);
      rootRender.appendChild(filteredList);
      result = filteredStatus;
    });
    sortName.addEventListener("change", (e) => {
      e.preventDefault();
      const sortOrder = sortName.value;
      const sortedName = sortData(result, "name", sortOrder);
      rootRender.innerHTML = "";
      sortedBounty.value = "";
      const sortedList = renderItems(sortedName);
      rootRender.appendChild(sortedList);
    }
    );
    sortedBounty.addEventListener("change", (e) => {
      e.preventDefault();
      const sortOrder = sortedBounty.value;
      const sortedResultBounty = sortBounty(result, sortOrder)
      rootRender.innerHTML = "";
      sortName.value = "";
      const sortedList = renderItems(sortedResultBounty);
      rootRender.appendChild(sortedList);
    });
    clearButton.addEventListener("click", (e) => {
      e.preventDefault();
      filterOrigin.value = "";
      filterCrew.value = "";
      filterStatus.value = "";
      sortName.value = "";
      sortedBounty.value = "";
      rootRender.innerHTML = "";
      rootRender.appendChild(renderItems(dataset));
      result = dataset;
    });

  })
  section.appendChild(footer)
  return section
}


export const renderStats = () => {
  const root = document.querySelector("#root");
  const ul = document.createElement("ul");
  //Render Origin Card
  const liOrigin = document.createElement("li");
  liOrigin.classList.add("cards");
  liOrigin.innerHTML = `
    <h3>Origin Fact</h3>
  <img src= "${"https://cdn.myanimelist.net/s/common/uploaded_files/1447350221-41774e2d831c741252034f3e287dc61d.jpeg"}" alt="origin-img">
  `
  const pOrigin = document.createElement("p");
  pOrigin.id = "idOrigin";
  liOrigin.appendChild(pOrigin);
  ul.appendChild(liOrigin);



  //Render Crew Card
  const liCrew = document.createElement("li");
  liCrew.classList.add("cards");
  liCrew.innerHTML = `
    <h3>Crew Fact</h3>
  <img src= "${"https://i.pinimg.com/originals/ff/e8/e8/ffe8e84d96f9417fec86d2b84470a0b6.jpg"}" alt="crew-img">
  `
  const pCrew = document.createElement("p");
  pCrew.id = "idCrew";
  liCrew.appendChild(pCrew);
  ul.appendChild(liCrew);



  //Render Bounty Card
  const liBounty = document.createElement("li");
  liBounty.classList.add("cards");
  liBounty.innerHTML = `
    <h3>Bounty Fact</h3>
  <img src= "${"https://birdsofherme.files.wordpress.com/2021/08/sanji-bounty.jpg"}" alt="bounty-img">
  `
  const pBounty = document.createElement("p");
  pBounty.id = "idBounty";
  liBounty.appendChild(pBounty);
  ul.appendChild(liBounty);
  root.appendChild(ul);
  return ul;
};



