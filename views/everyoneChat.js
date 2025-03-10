import { renderHeader } from "../components/header.js";
import { renderNav } from "../components/nav.js";
import { renderFooter } from "../components/footer.js";
import { renderChat } from "../components/chat.js";

export const renderEveryone = () => {
  const header = renderHeader();
  const nav = renderNav();
  nav.style.width = "100%";
  const menu = nav.querySelector("label")
  menu.style.display = "none";
  const footer = renderFooter();
  const section = document.createElement("section");
  const section2 = document.createElement("section");
  const chat = renderChat();
  chat.classList.add("chatStyle");
  section2.classList.add("chat");
  section2.innerHTML += `
	<div>
	<img class ="img-chat-everyone" src="https://i.pinimg.com/originals/86/5b/bc/865bbcb037b84d01f1be694a570e6ad0.jpg">
	 <h4 class = "infoChatName" itemprop="name">ALL CHARACTERS</h3>
	 </div>`

  const everyoneButton = nav.querySelector("#everyoneButton");
  everyoneButton.style.display = "none";
  const divFilters = nav.querySelector(".div-filtros");
  divFilters.style.display = "none";
  const titulo = document.createElement("h2");
  titulo.innerHTML = `CHAT WITH EVERYONE`;
  titulo.classList.add("detallesStyle");

  nav.appendChild(titulo);
  section.appendChild(header);
  section.appendChild(nav);
  section2.appendChild(chat)
  section.appendChild(section2);
  section.appendChild(footer);

  return section;
}