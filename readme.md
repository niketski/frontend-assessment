# Front End Assessment
---
This app is exclusive for my Front End Assessment, this is to test my skill when it comes to software quality.This app contains Exercise 1 and Exercise 2, the Exercise 1 is a responsive page that contains Banner and 3 CTA. Exercise 2 is a page where there's a responsive tab that turns into accordion on mobile.

This app is built using HTML,CSS,JS, Bootstrap and ReactJs. I also used a Javascript module bundler which is Webpack to be able to use the new Javascript syntax and organize my code into a separate files, then bundle the modules together into a single file.

# To install and run the app.
---
1. Make sure the you have NodeJs and Git installed on your pc.
2. Clone the project by typing `git glone https://github.com/niketski/frontend-assessment.git`.
3. Go the the root direactory of the project.
4. Once you have successfully cloned the project, on your terminal type, `npm install`.
5. After the installation of all the dependencies, you can now run the app by typing `npm run start`.

# Project Structure

```jsx
project-root/ **`project-root/`:** The main directory of the project
|-- src/
|   |-- components/ **`components/`:** This includes all the global components
|   |   |-- component/ **`component/`:** Global component
|   |   |-- |-- Component.js
|   |   |-- |-- Component.scss
|   |   |-- pages/ **`pages/`:** This folder includes all the pages
|   |   |-- |-- Page.js
|   |   |-- |-- Page.scss
|   |   |-- containers/ **`containers/`:** This includes all the components that has their own state
|   |   |-- |-- Container.js
|   |   |-- |-- Container.scss
|   |   |-- |-- App.js **`App.js`:** The App.js file includes the MainRoutes component which contains all the routes of the app also it includes the initialization of AOS.js library.
|   |   |-- |-- App.scss
|   |   |-- |-- MainRoutes.js **`MainRoutes.js`:** This file includes all the imported page components and routes of the app.
|   |-- images/ **`images/`:** This includes all the image files like .jpg, .png and etc.
|   |-- styles/ **`styles/`:** This folder includes all import of the files came from the components folder.
|   |-- | -- vendor/ **`vendor/`:** This includes all of the other library styles.
|   |-- utilities.js **`utilities.js`:** This file inlcudes all the js helper functions.
|-- package.json
|-- README.md
|-- webpack.config.js **`webpack.config.js`:** This file inlcudes the entry point, output file, rules and devServer options.