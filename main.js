const texts = document.querySelector(".texts");


window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");
var elem = document.createElement("img");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("I want an apple")) {
      p = document.createElement("p");
      elem = document.createElement("img");
      p.classList.add("replay");
      elem.setAttribute("src", "apple.jpg");
      elem.setAttribute("height", "50");
      elem.setAttribute("width", "50");
      texts.appendChild(p);
      texts.appendChild(elem)
    }
    if (
      text.includes("I want an orange")
    ) {
        p = document.createElement("p");
        elem = document.createElement("img");
        p.classList.add("replay");
        elem.setAttribute("src", "orange.jpg");
        elem.setAttribute("height", "50");
        elem.setAttribute("width", "50");
        texts.appendChild(p);
        texts.appendChild(elem)
    }
    if (
        text.includes("I want a kiwi")
      ) {
          p = document.createElement("p");
          elem = document.createElement("img");
          p.classList.add("replay");
          elem.setAttribute("src", "kiwi.jpg");
          elem.setAttribute("height", "50");
        elem.setAttribute("width", "50");
          texts.appendChild(p);
          texts.appendChild(elem)
      }
      if (
        text.includes("I want a mango")
      ) {
          p = document.createElement("p");
          elem = document.createElement("img");
          p.classList.add("replay");
          elem.setAttribute("src", "mango.jpg");
          elem.setAttribute("height", "50");
        elem.setAttribute("width", "50");
          texts.appendChild(p);
          texts.appendChild(elem)
      }
      if (
        text.includes("I want a strawberry")
      ) {
          p = document.createElement("p");
          elem = document.createElement("img");
          p.classList.add("replay");
          elem.setAttribute("src", "strawberry.jpg");
          elem.setAttribute("height", "50");
        elem.setAttribute("width", "50");
          texts.appendChild(p);
          texts.appendChild(elem)
      }
    // if (text.includes("open my YouTube")) {
    //   p = document.createElement("p");
    //   p.classList.add("replay");
    //   p.innerText = "opening youtube channel";
    //   texts.appendChild(p);
    //   console.log("opening youtube");
    //   window.open("https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ");
    // }
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
