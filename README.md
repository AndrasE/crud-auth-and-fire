<h3 align="center">
  <a href="https://crud-auth.netlify.app/" target="_blank" rel="noopener noreferrer">
  <img src="https://github.com/AndrasE/raw-readme/blob/e0ba0d38fc6f2bb201983bbc4986e59f1ae946f2/logo/crud-readme-img.png" width="150">
  </a>
  <br>
  React crud application with Firestore database
  <br>
 & Firebase/OAuth options with Protected Routes
</h3>

## Hello there 👋

This project demonstrates a simple CRUD (Create, Read, Update, Delete) React application with a backend powered by Firebase. I chose Firebase for its ease of integration and robust features, allowing me to focus on the core functionality while leveraging its capabilities.

After carefully planning the project's requirements, I implemented the CRUD functionality using React components and Firebase's Realtime Database. I then integrated Firebase authentication (Google, Facebook, OTP) to secure the application and added protected routes to restrict access to unauthorized users. The app is designed with React Bootstrap to ensure a responsive and user-friendly interface.

For a more in-depth breakdown of the project's evolution and features, and practical examples, please visit the app and click on the logo. You will find both an About and About More section.

<div align="center">
<img src="https://github.com/AndrasE/raw-readme/blob/91c885d64a6cfd8a82f56dccd0ab2e57ebefe4fb/thumbs/crud_1.png" width="220">
<img src="https://github.com/AndrasE/raw-readme/blob/91c885d64a6cfd8a82f56dccd0ab2e57ebefe4fb/thumbs/crud_2.png" width="220">
<img src="https://github.com/AndrasE/raw-readme/blob/91c885d64a6cfd8a82f56dccd0ab2e57ebefe4fb/thumbs/crud_3.png" width="220">
</div>

### Key Features

- **Authentication** - Implements user authentication using Firebase, allowing users to sign in via Google, Facebook, or by phone using one-time password texts.
- **Protected Routes** - Restricts access to certain routes based on user authentication, preventing unauthorized access to sensitive data.
- **Context Provider** - Utilizes a context provider to manage user authentication state, ensuring consistent access across the application.

### Packadges used

- **[firebase](https://www.npmjs.com/package/react-firebase)** - Provides Firebase services like authentication, database, and cloud storage for integrating backend functionality.
- **[react-bootstrap](https://react-bootstrap.netlify.app/)** - A popular UI framework for React that offers pre-built, responsive components based on Bootstrap.
- **[react-phone-number-input](https://www.npmjs.com/package/react-phone-number-input)** - A customizable input field for handling phone numbers with validation and international number formatting support.
- **[react-router & react-router-dom](https://reactrouter.com/en/main)** - Manages routing in React apps, enabling navigation between different views or pages.
- **[react-gist](https://www.npmjs.com/package/react-gist)** - Allows to embed GitHub Gists (code snippets) directly into React components.
  
## Run 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Start with cloning this repo on your local machine via cli or github-desktop:

`
$ git clone https://github.com/AndrasE/crud-auth-and-fire
$ cd PROJECTNAME
`

To install and set up the library, run:

`
$ npm install -S myLib
`

Or if you prefer using Yarn:

`
$ yarn add --dev myLib
`

Add your own credentials:

`
edit firebase-config.js or add own .env
setup own google and facebook Apis
`

Serving the app:

`
$ npm start
`

Running the tests:

`
$ npm test
`

Building a distribution version:

`
$ npm run build
`
