import { renderNav } from "../components/nav.js";
import { renderHeader } from "../components/header.js";
import { renderFooter } from "../components/footer.js";
import { filterData } from "../lib/dataFunctions.js";
import { renderItems } from "../components/cards.js";
import dataset from "../data/dataset.js";
import { sortBounty } from "../lib/dataFunctions.js";
import { sortData } from "../lib/dataFunctions.js";
import { navigateTo } from "../router.js";

export const renderHome = () => {
  const section = document.createElement("section");
  section.classList.add("section");
  section.id = "mainContainer";
  const nav = renderNav();
  nav.id = "navHome";
  const footer = renderFooter();
  footer.id = "footerHome";
  const header = renderHeader();
  header.id = "headerHome";
  const showItems = document.createElement("div");
  showItems.id = "cardHome";
  showItems.classList.add("showItems");
  const hometitle = document.createElement("h2");
  hometitle.classList.add("hometitle")
  hometitle.innerHTML = "Chat with your favorite characters!"


  section.appendChild(header);
  section.appendChild(nav);
  section.appendChild(hometitle);
  showItems.appendChild(renderItems(dataset));
  section.appendChild(showItems);

  const filterOrigin = nav.querySelector('[data-testid="select-filterOrigin"]'
  );
  const sortName = nav.querySelector('[data-testid="select-sort"]');
  const sortedBounty = nav.querySelector('[data-testid="select-bounty"]'
  );
  const filterCrew = nav.querySelector('[data-testid="select-filter"]');




  let data = dataset;
  filterOrigin.addEventListener("change", (e) => {
    e.preventDefault();
    const value = filterOrigin.value;
    const filteredOrigin = filterData(dataset, "seaOfOrigin", value);
    showItems.innerHTML = "";
    filterCrew.value = "";

    const filteredList = renderItems(filteredOrigin);
    showItems.appendChild(filteredList);
    data = filteredOrigin;
  });

  filterCrew.addEventListener("change", (e) => {
    e.preventDefault();
    const value = filterCrew.value;
    const filteredCrew = filterData(dataset, "crewOrigin", value);
    showItems.innerHTML = "";
    filterOrigin.value = "";

    const filteredList = renderItems(filteredCrew);
    showItems.appendChild(filteredList);
    data = filteredCrew;
  });

  sortName.addEventListener("change", (e) => {
    e.preventDefault();
    const sortOrder = sortName.value;
    const sortedName = sortData(data, "name", sortOrder);
    showItems.innerHTML = "";
    sortedBounty.value = "";
    const sortedList = renderItems(sortedName);
    showItems.appendChild(sortedList);
  });
  sortedBounty.addEventListener("change", (e) => {
    e.preventDefault();
    const sortOrder = sortedBounty.value;
    const sortedResultBounty = sortBounty(data, sortOrder);
    showItems.innerHTML = "";
    sortName.value = "";
    const sortedList = renderItems(sortedResultBounty);
    showItems.appendChild(sortedList);
  });
  const clearButton = nav.querySelector('[data-testid="button-clear"]');
  clearButton.addEventListener("click", (e) => {
    e.preventDefault();
    filterOrigin.value = "";
    filterCrew.value = "";

    sortName.value = "";
    sortedBounty.value = "";
    showItems.innerHTML = "";
    showItems.appendChild(renderItems(dataset));
    data = dataset;
  });
  const factsButton = nav.querySelector("#facts");
  factsButton.addEventListener("click", (e) => {
    e.preventDefault();
    navigateTo("/facts");
  });
  section.appendChild(footer);

  return section;
};
