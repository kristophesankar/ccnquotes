/* Api calls go here */

// Get initial data from API
export function getInitialData() {
  return fetch("http://localhost:3001/quotes/")
    .then(response => response.json())
    .then(data => data)
}

export function createNewQuote(data) {
  return fetch("http://localhost:3001/quotes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
}
