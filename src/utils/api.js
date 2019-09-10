/* Api calls go here */

// Get initial data from API
export function getInitialData() {
  return fetch("http://localhost:3001/quotes/")
    .then(response => response.json())
    .then(data => data)
}
