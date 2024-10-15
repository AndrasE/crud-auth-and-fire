<br>
<p align="center">
  <a href="https://crud-auth.netlify.app/" target="_blank" rel="noopener noreferrer">
  <img src="https://github.com/AndrasE/raw-readme/blob/main/crud-readme-img.png?raw=true" width="200">
  </a>
</p>
<h3 align="center">
  Full stack crud application using React with Firestore database & 
  <br>
  Firebase/OAuth options with Protected Routes
</h3>

<br>

## Hello there 👋

<p>This project demonstrates a simple CRUD (Create, Read, Update, Delete) React application with a backend powered by Firebase. I chose Firebase for its ease of integration and robust features, allowing me to focus on the core functionality while leveraging its capabilities. <br /> After carefully planning the project's requirements, I implemented the CRUD functionality using React components and Firebase's Realtime Database. I then integrated Firebase authentication (Google, Facebook, OTP) to secure the application and added protected routes to restrict access to unauthorized users. The app is designed with React Bootstrap to ensure a responsive and user-friendly interface. <br /> For a more in-depth breakdown of the project's evolution and features, and practical examples, please visit the app and click on the logo. You will find both an About and About More section.</p>

<br>

<p> Key Features: 
<li>Authentication - Implements user authentication using Firebase, allowing users to sign in via Google, Facebook, or by phone using one-time password texts.</li> 
<li> Protected Routes - Restricts access to certain routes based on user authentication, preventing unauthorized access to sensitive data. </li> 
<li>Context Provider - Utilizes a context provider to manage user authentication state, ensuring consistent access across the application.</li>
</p>

<br>

<p> Packadges used: 
<li>firebase - Provides Firebase services like authentication, database, and cloud storage for integrating backend functionality.</li>
<li>react-bootstrap - A popular UI framework for React that offers pre-built, responsive components based on Bootstrap.</li>
<li>react-gist - Allows to embed GitHub Gists (code snippets) directly into React components.</li>
<li>react-phone-number-input - A customizable input field for handling phone numbers with validation and international number formatting support.</li>
<li>react-router & react-router-dom: Manages routing in React apps, enabling navigation between different views or pages.</li>
</p>
  
## Run 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Start with cloning this repo on your local machine via cli or github-desktop:

```sh
$ git clone https://github.com/AndrasE/crud-auth-and-fire
$ cd PROJECTNAME
```

To install and set up the library, run:

```sh
$ npm install -S myLib
```

Or if you prefer using Yarn:

```sh
$ yarn add --dev myLib
```

Add your own credentials:

```sh
edit firebase-config.js or add own .env
setup own google and facebook Apis
```

Serving the app:

```sh
$ npm start
```

Running the tests:

```sh
$ npm test
```

Building a distribution version:

```sh
$ npm run build
```
