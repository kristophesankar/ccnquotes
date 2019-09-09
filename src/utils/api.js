/* Api calls go here */

export function getInitialData() {
  return fetch("http://localhost:3001/quotes/")
    .then(response => response.json())
    .then(data => data)
}
