# Developer Notes

A few things out of the way. I built the app using a variety of tooling and libraries. Some of these are:

- Code Style: [Javascript Standard Style](https://standardjs.com/)
- State Management: [Redux](https://redux.js.org/)
- CSS Library: [React Bootstrap](https://react-bootstrap.github.io/)
- API Calls: [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- User Notifications: [Toasted Notes](https://toasted-notes.netlify.com/)
- Styling: [Styled Components](https://github.com/styled-components/styled-components)
- Tooltips: [React Tippy](https://github.com/tvkhoa/react-tippy)

## Running the App

- Clone this repository.
- `cd` into the project folder
- `yarn install` to install all the dependencies
- `yarn api` to start the db server
- `yarn start` to run the application
- `yarn cypress open` to run the cypress electron app for testing

## Description
The application is notes app based on the requirements listed below. Users are presented with a screen displaying two columns. The left column provides a list of all quotes available in the json database. Clicking on any will display the full quote details in the second column. Both columns are independantly scrollable. 

Users may add, edit and delete new quotes. Hovering over any of the icons in the app will help the user by providing an instruction as to what the element is responsible for.

## Known Bugs / Issues

- The update form does not validate input.
- On mobile, the quote details column is placed to the bottom. (The user can still scroll to it. It's just not very intuitive.)
- The Search bar only works on the All Quotes page.
- If the user refreshes the page, the state will be reset. (Persisting to local storage will fix this.)


