import { navigateTo } from "../router.js";

export const renderItems = (dataset) => {
  const ul = document.createElement("ul");
  dataset.forEach((element) => {
    const li = document.createElement("li");
    li.setAttribute("itemscope", "");
    li.setAttribute("itemtype", "One Piece");
    li.classList.add("cards");
    li.innerHTML = `
      <h3 itemprop="name">${element.name}</h3>
      <img src="${element.imageUrl}" alt="${element.id}">
      <p class="description" itemprop="description">${element.description}</p>
      <h4 class = "bountyValue" itemprop="bounty">${element.facts.bounty}</h4>
      `;
    const apiSaved = localStorage.getItem("apiKey");
    li.addEventListener("click", (e) => {
      e.preventDefault();

      if (apiSaved === null) {
        navigateTo("/api-key");
      }else{
        navigateTo(`/detail-${element.id}`,element);
      }
      
        
      
    });
    ul.appendChild(li);
  });
  return ul;
};
