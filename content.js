let currentInput = null;

document.addEventListener("input", (event) => {
  if (event.target.tagName === "TEXTAREA" || event.target.tagName === "INPUT") {
    currentInput = event.target;
    let text = currentInput.value;

    chrome.runtime.sendMessage(
      { action: "fetch_autocomplete", text: text },
      (response) => {
        if (response && response.suggestion) {
          showSuggestion(response.suggestion);
        }
      }
    );
  }
});

function showSuggestion(suggestion) {
  if (!currentInput) return;

  let ghostText = suggestion.substring(currentInput.value.length);
  if (ghostText) {
    currentInput.setAttribute("placeholder", currentInput.value + ghostText);
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Tab" && currentInput) {
    event.preventDefault();
    currentInput.value += currentInput.placeholder.replace(
      currentInput.value,
      ""
    );
    currentInput.removeAttribute("placeholder");
  }
});
