/* global fetch */

const api = 'https://quotesdb-f9bc1.firebaseapp.com/api'

// Get initial data from API (all quotes)
export function getInitialData () {
  return fetch(`${api}/quotes/`)
    .then(response => response.json())
    .then(data => data)
}

// get One quote
export function getQuote (id) {
  return fetch(`${api}/quotes/${id}`)
    .then(response => response.json())
    .then(data => data)
}

// Save a new quote
export function createNewQuote (data) {
  return fetch(`${api}/quotes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
}

// Update a quote
export function updateExistingQuote (data) {
  return fetch(`${api}/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
}

// Delete a quote
export function deleteExistingQuote (data) {
  return fetch(`${api}/quotes/${data.id}`, {
    method: 'DELETE'
  }).then(response => response.json())
}

export function getSearchData (query) {
  return fetch(`${api}/quotes?q=${query}`)
    .then(response => response.json())
    .then(data => data)
}
