# **CreateReactBookSearchApp to Search Goodreads Book**

This application uses goodreads api to look for books by Title, Author or Isbn code.

This project was bootstrapped with `create-react-app` and deployed live at

http://13.232.8.45

# Running the application locally

**Prerequisites:** You need to have Node + NPM installed.

<!--**Required Environment Variables:**

`REACT_APP_API_KEY` : Goodreads API Key you can get from [here](https://www.goodreads.com/api/keys).-->
you can also refer here for more detail on environment variables

Save it in the `.env` file as described [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables)
Having done that, here is how to run the application locally in development mode.

**Clone the repo:**

git clone https://github.com/yashwantsinghzala/CreateReactBookSearchApp.git

**making an entry for environment variable for the repo if you have choosen it to put it manually in .env file:**
 
 I have put an entry .env file at the root of the project and used my key while development,but one can always register himself and use   his own key.
 
 steps:
 1. create .env at the root of the project and make an entry like REACT_APP_API_KEY="your own key" or use my key  
 example : REACT_APP_API_KEY=BMSw4WMQoJpDhgZUB0lQ


**Install dependencies:**

    npm install

**Starting the application in development mode:**

    npm start

# Building the application:

To build the production assets, run

    npm run build

# Testing the App:

    npm test
    
   Note: Written unit test cases for all reducer , some of the actions and react component to ensure it renders correctly on ui .

# Features of App currently :

1. Search for books by title, author, or ISBN. (example: if we search by keyword "Harry", it displays 10 related books on it)
2. Displays search results in bootstrap cards.
3. Displays error inline if it fails for any reason.
4. Displays only title, author, and link to goodreads page.
5. See the description and rating, and other details by clicking on individual result.

# Technical Stack of App currently :
 1. Used redux and redux thunk to maintain the data in store and manage it across the containers with in the app.
 2. Components consist of dump ui component  which needs data which is provided by the container component 
    which is connected through the store.
 3. Used bootstrap for css modules .
 
# With the more time could have done below list of tasks:

1. Error handling could have been done in more detail.
2. More test cases related to asynchronous action and api testing.
3. Could have implemented separate loader for book selected ,although it is already done but currently it loads whole page .
4. Could have introduced error boundries.
5. Slidly restructure the rendering part of the app.
6. Could have give some of the more feature to app while showing selected book with good ui experience.

