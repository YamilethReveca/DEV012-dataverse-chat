import { renderHeader } from "../components/header.js";
import { renderNav } from "../components/nav.js";
import { navigateTo } from "../router.js";
import { openIAapiIndividual } from "../lib/chatApi.js";

export const renderApiKey = () => {
  
  const header = renderHeader();
  const nav = renderNav();
  const menu = nav.querySelector("label")
  menu.style.display = "none";
  nav.style.width = "100%";
  const tittle = document.createElement("h2");
  tittle.innerHTML = `API KEY`;
  tittle.classList.add("apiStyle");
  const section = document.createElement("section");
  const apiContainer = document.createElement("div");
  apiContainer.classList.add("apiContainer");
  const divFilters = nav.querySelector(".div-filtros");
  divFilters.style.display = "none";
  const title = document.createElement("h2");
  title.innerHTML = `CHAT WITH EVERYONE`;
  title.classList.add("detallesStyle");
  title.style.display = "none";
  const label = document.createElement("label");
  label.innerHTML = "Enter your API KEY:";
  label.classList.add("apiLabel");
  const input = document.createElement("input");
  input.type = "password";
  input.placeholder = "Enter your API KEY";
  input.id = "inputApiKey";
  input.style.display = "block"
  const divApiButtons = document.createElement("div");
  divApiButtons.classList.add("divApiButtons");
  const apiKeyButton = document.createElement("button");
  apiKeyButton.id = "apiKeyButton";
  apiKeyButton.classList.add("buttonKey");
  apiKeyButton.innerHTML = "Save";
  const apiKeyButtonClear = document.createElement("button");
  apiKeyButtonClear.id = "apiKeyButtonClear";
  apiKeyButtonClear.classList.add("buttonKey");
  apiKeyButtonClear.innerHTML = "Delete";
  apiKeyButton.addEventListener("click", (element) => {
    localStorage.setItem("apiKey", input.value);
    const userText = "hola";
    openIAapiIndividual(element.name, userText)
      .then((response) => {
        if (response.status === 401 || response.status === 403) {
          console.error("Error en la solicitud:");
          alert("Authentication error: invalid or missing token.");
        } else { navigateTo("/") }
        response.json()
      })
  })
  apiKeyButtonClear.addEventListener("click", () => {
    localStorage.removeItem("apiKey");
    input.value = "";
  });
  section.appendChild(header);
  section.appendChild(nav);
  nav.appendChild(tittle);
  apiContainer.appendChild(label);
  apiContainer.appendChild(input);
  divApiButtons.appendChild(apiKeyButton);
  divApiButtons.appendChild(apiKeyButtonClear);
  apiContainer.appendChild(divApiButtons);
  section.appendChild(apiContainer);
 
  return section;
};