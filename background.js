chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fetch_autocomplete") {
    fetch("http://localhost:5000/autocomplete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: request.text }),
    })
      .then((response) => response.json())
      .then((data) => sendResponse({ suggestion: data.suggestion }))
      .catch((error) => sendResponse({ error: error.message }));
    return true;
  }
});
