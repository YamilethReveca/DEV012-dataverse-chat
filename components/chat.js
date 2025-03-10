import { openIAapi, openIAapiIndividual } from "../lib/chatApi.js";
import { characters } from "../lib/chatApi.js";


export const renderChat = (element) => {
  const container = document.createElement("div");
  container.id = "chatContainer";
  const chatSection = document.createElement("section");
  chatSection.id = "chatSection";
  const divTextarea = document.createElement("div");
  divTextarea.classList.add("divTextarea")
  const inputChat = document.createElement("textarea");
  inputChat.id = "inputChat";
  inputChat.placeholder = "Chat with your favourite character";
  const sendButton = document.createElement("button");
  sendButton.id = "sendButton";
  sendButton.innerHTML = `<i class="bi bi-send"></i>`;

  sendButton.addEventListener("click", () => {

    const userText = container.querySelector("#inputChat").value;
    const showUserText = document.createElement("p");


    showUserText.innerHTML = userText;
    showUserText.style.color = "blue"
    chatSection.appendChild(showUserText);

    const clearTextarea = container.querySelector("#inputChat");
    clearTextarea.value = "";
    const route = window.location.pathname;
    if (route === "/panel") {

      openIAapi(characters, userText)
        .then((response) => //{if (response.status === 401 || response.status === 403) {
          //throw new Error("Error de autenticación: Token inválido o faltante.");}
          response.json())

        .then((data) => {
          const apiAnswer = document.createElement("p");
          apiAnswer.innerHTML = data.choices[0].message.content;
          chatSection.appendChild(apiAnswer);
        })

        .catch((error) => {
          console.error("Error en la solicitud:", error);
          const apiError = document.createElement("p");
          apiError.innerHTML = "Authentication error: invalid or missing token.";
          apiError.style.color = "red";
          apiError.style.fontSize = "25px";
          container.appendChild(apiError);
        })
    } else {
      openIAapiIndividual(element.name, userText)
        .then((response) =>
          // {if (response.status === 401 || response.status === 403) {
          //   throw new Error("Error de autenticación: Token inválido o faltante.");}
          response.json())

        .then((data) => {
          const apiAnswer = document.createElement("p");
          apiAnswer.innerHTML = data.choices[0].message.content;
          chatSection.appendChild(apiAnswer);
        })

        .catch((error) => {
          console.error("Error en la solicitud:", error);
          const apiError = document.createElement("p");
          apiError.innerHTML = "Authentication error: invalid or missing token.";
          apiError.style.color = "red";
          apiError.style.fontSize = "25px";
          container.appendChild(apiError);
        })
    }
  });
  container.appendChild(chatSection);
  divTextarea.appendChild(inputChat);
  divTextarea.appendChild(sendButton);
  container.appendChild(divTextarea);

  return container;
};

