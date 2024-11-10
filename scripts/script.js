function genWord() {
  const wordarea = document.querySelector('.wordarea');
  fetch("https://random-word-api.herokuapp.com/word").then(
    r => {
      return r.json();
    }
  ).then(
    d => {
      wordarea.textContent=d;
    }
  ).catch(
    e => {
      wordarea.textContent="Error";
    }
  );
}

function copyToClipboard(){
  const word = document.querySelector('.wordarea').textContent;
  navigator.clipboard.writeText(word).catch(
    () => {
      alert("Failed to copy text");
    }
  )
}

genWord();
