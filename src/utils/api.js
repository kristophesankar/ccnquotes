/* global fetch */

// Get initial data from API (all quotes)
export function getInitialData () {
  return fetch('http://localhost:3001/quotes/')
    .then(response => response.json())
    .then(data => data)
}

// get One quote
export function getQuote (id) {
  return fetch(`http://localhost:3001/quotes/${id}`)
    .then(response => response.json())
    .then(data => data)
}

// Save a new quote
export function createNewQuote (data) {
  return fetch('http://localhost:3001/quotes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
}

// Update a quote
export function updateExistingQuote (data) {
  return fetch(`http://localhost:3001/quotes/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
}

// Delete a quote
export function deleteExistingQuote (data) {
  return fetch(`http://localhost:3001/quotes/${data.id}`, {
    method: 'DELETE'
  }).then(response => response.json())
}

export function getSearchData (query) {
  return fetch(`http://localhost:3001/quotes?q=${query}`)
    .then(response => response.json())
    .then(data => data)
}
