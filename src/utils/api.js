/* Api calls go here */

// Get initial data from API (all quotes)
export function getInitialData() {
  return fetch("http://localhost:3001/quotes/")
    .then(response => response.json())
    .then(data => data)
}

// get One quote
export function getQuote(id) {
  return fetch(`http://localhost:3001/quotes/${id}`)
    .then(response => response.json())
    .then(data => data)
}

// Save a new quote
export function createNewQuote(data) {
  return fetch("http://localhost:3001/quotes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
}


