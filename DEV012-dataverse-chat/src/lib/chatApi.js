import dataset from "../data/dataset.js";
//api
const endpoint = "https://api.openai.com/v1/chat/completions";
export const characters = dataset.map(element => element.name);

export function openIAapi(characters, userText) {
  const apiKey = localStorage.getItem("apiKey");
  console.log(apiKey);
  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You are ${characters} characters from One Piece, therefore respond collectively to all questions you can about their lives`,
      },
      { role: "user", content: userText }
    ],
  };

  const result = fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  });
  return result;
}

export function openIAapiIndividual(character, userText) {
  const apiKey = localStorage.getItem("apiKey");
  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You are ${character} a character from One Piece, therefore respond to all questions you can about your life`,
      },
      { role: "user", content: userText }
    ],
  };

  const result = fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  });
  return result;
}
