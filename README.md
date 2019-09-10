# Developer Notes

- Code Style: [Javascript Standard Style](https://standardjs.com/)
- State Management: [Redux](https://redux.js.org/)
- CSS Library: [React Bootstrap](https://react-bootstrap.github.io/)
- API Calls: [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

# CCN Quotes

Thanks for your interest in working with us! This little assignment is here to assess your React knowledge, design skills, and testing style.

## Before you begin

A few logistics to get out of the way:

- Please **create a private repo** - do not make your code public. Invite @fdidron and @ezuk as collaborators so we can look at your work. This is because you are not the only one currently doing this assignment. If you don't have a way to make a private repo, you can submit your work as a zip file (with the `.git` directory included).
- This assignment is not paid.
- Any code you write or designs you create for this assignment will remain under your complete ownership, and will never be used by CodeCode Ninja. In November 2019 you may release this code publicly or add it to your portfolio if you wish.
- Before you begin, please let us know when you intend to complete the task.
- **Questions are okay!** Feel free to reach out over email with any feedback or questions as you work through the process. Communication is essential when working remotely.

## Introduction: What you'll be building

A notes app! :) You're going to be making an SPA that lets the user:

1. Pull a list of quotes from an API.
2. Create a new quote.
3. Update a quote.
4. Delete a quote.

You will also write e2e tests using [cypress](https://www.cypress.io) to validate your work.

This repository contains everything to get started, including:

1. A [create-react-app](https://facebook.github.io/create-react-app/docs/) to run the application in development mode.
2. The [cypress](https://www.cypress.io/) testing suite.
3. A local api to CRUD (Create Read Update Delete) the quotes.

## What we will (and won't) be looking at

To evaluate your work, we will be looking at the following factors:

- Code quality and readability
- UX design: How your app feels in the browser
- Commit messages (how granular and clear they are)
- React best practices
- Your Cypress tests (both style, and what you choose to test)
- Your communication throughout the process (talk to us if blocked, let us know when you'll be completing it ahead of time, etc)

We will *not* be looking at the following:

- You do not need to complete each and every thing in the app. You can do a large chunk of the work (and not all of it) and still win; we are looking at the quality. You need to do enough for us to get a clear sense of your style and quality.
- You do not need to be the first to finish. This is not a race. Finish when you said you would.

## Getting started

Make sure you are running `nodejs >= 10` before starting.

In the project directory, run: `yarn` to install all the dependencies. Then you can run the following commands:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn cypress open`

Opens Cypress's electron app, useful when writing test as it reloads the test suite when editing a test.

### `yarn cypress run`

Executes the Cypress test suite in the terminal (headless mode).

### `yarn api`

Runs the api locally.<br>
The api is available @ [http://localhost:3001](http://localhost:3001).

## API Specification

All the data is persisted in the `db.json` file located at the root of the repository. The API is built using [json-server](https://github.com/typicode/json-server)

### Data model

The data model includes a single entity, the `quote` object:

```
{
  id: int, //auto increment
  author: string, // the quote author
  body: string, // the quote text
  source: string // the url pointing to the author profile
}
```

### Endpoints

The available endpoints are:

```
// Get an array of quotes
GET    /quotes

// Get a single quote by id
GET    /quotes/{id}

// Create a new quote
// Required field are author / body / source
POST   /quotes

// Update a quote
// Allowed parameters are author / body / source
PUT    /quotes/{id}

// Delete a quote by id
DELETE /quotes/{id}
```

The following api features are not required for the assignement but are here if you feel creative :)

### Paginate

Use `_page` and optionally `_limit` to paginate returned data.

In the `Link` header you'll get `first`, `prev`, `next` and `last` links.

```
GET /quotes?_page=7
GET /quotes?_page=7&_limit=20
```

_10 items are returned by default_

### Sort

Add `_sort` and `_order` (ascending order by default)

```
GET /quotes?_sort=author&_order=asc
```

### Full-text search

Add `q`

```
GET /quotes?q=nyan
```
