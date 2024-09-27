import { renderHeader } from "../components/header.js";
import { renderNav } from "../components/nav.js";
import { renderFooter } from "../components/footer.js";
import { renderChat } from "../components/chat.js";
import dataset from "../data/dataset.js";

export const renderCharacters = () => {

  const id= window.location.pathname.replace("/detail-", "");
  const element= dataset.find((personaje)=>personaje.id===id);
  const chat= renderChat(element);
  const header = renderHeader()
  const nav = renderNav();
  nav.style.width = "100%";
  const menu = nav.querySelector("label")
  menu.style.display = "none";
  const footer = renderFooter();
  const section= document.createElement("section");
  const section2= document.createElement("section");
  section2.classList.add("chat");
  section2.innerHTML+=`
  <div class = "infoAndImg">
  <img class ="img-chat" src="${element.imageUrl}">
  <h4 class = "infoChatName" itemprop="name">${element.name}</h3>
   <div class="description-queries">
  <h4 class = "infoChat"> "${element.description}"</h4>
  <h4 class = "infoChat">Status: ${element.facts.status}</h4>
  <h4 class = "infoChat">Origin: ${element.facts.seaOfOrigin}</h4>
  <h4 class = "infoChat">Crew: ${element.facts.crewOrigin}</h4>
  <h4 class = "infoChat">Bounty: ${element.facts.bounty}</h4>
   </div>
  </div>` 
  
  const divFilters= nav.querySelector(".div-filtros");
  divFilters.style.display="none";
  const everyoneButton= nav.querySelector("#everyoneButton");
  everyoneButton.style.display= "none";
  const title = nav.querySelector("#titulo");
  title.style.display = "block";
  title.innerHTML =  `CHAT WITH ${element.name}`;
    
  section.appendChild(header);
  section.appendChild(nav); 
  section2.appendChild(chat);
  section.appendChild(section2);  
  section.appendChild(footer);

  return section;
};
