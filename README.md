# **CreateReactBookSearchApp to Search Goodreads Book Search**

This application uses goodreads api to look for books by title, author or isbn code.

This project was bootstrapped with `create-react-app` and deployed live at -----

# Running the application locally

**Prerequisites:** You need to have Node + NPM installed.

<!--**Required Environment Variables:**

`REACT_APP_API_KEY` : Goodreads API Key you can get from [here](https://www.goodreads.com/api/keys).-->
 
 I have put an entry .env file at the root of the project and used my key while development  ,but you can always register and use your own key.

 steps:
 1. create .env at the root of the project and make an entry like REACT_APP_API_KEY="your own key" or use my key  
 <!--example : REACT_APP_API_KEY=BMSw4WMQoJpDhgZUB0lQ-->

you can also refer here for more detail on environment variables

Save it in the `.env` file as described [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables)

Having done that, here is how to run the application locally in development mode.

**Clone the repo:**

    <!--git clone-->

**Install dependencies:**

    npm install

**Starting the application in development mode:**

    npm start

# Building the application:

To build the production assets, run

    npm run build

# Testing the App:

    npm test

# Features of App currently :

1. Search for books by title, author, or ISBN. (example: if we search by keyword "Harry", it displays 10 related books on it)
2. Displays search results in bootstrap cards.
3. Displays error inline if it fails for any reason.
4. Displays only title, author, and link to goodreads page.
5. See the description and rating, and other details by clicking on individual result.

# Technical Stack of App currently :
 1. used redux to store data and manage it across the containers only.
 2. components consist of dump ui component  which needs data which is provided by the container component 
    which is connected through the store.
 3. used sass for css modules .



# With the more time could have been done:

1. error handling could have been done in more detail.
2. more test cases related to asynchronous action and api testing.
3. could have implemented separate loader for book selected ,although it is already done in reducer ,need to make 
    it only towards UI .
4. could have introduced error boundries.
5. slidly restructure the rendering part of the app.

