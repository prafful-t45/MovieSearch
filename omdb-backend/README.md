## Generic JS Conecpts
- Browser’s use caching for GET calls.
- JS is single threaded.
- A function passed into another function is called a callback function.

## OMDB

## Package.json
- Contains all the dependencies
## Node Modules
- Dependencies specified inside package.json get installed here
## Node JS
- Is a JS runtime used to run JS, it is based on Chrome’s V8 JS engine.
- Enables JS to be used as an alternative to other server side programming languages.
- Used to run JS even outside browsers, can be used to build servers
- Enables JS to used as a server side programming language.
- Node JS is used to listen to requests and provide responses, also to interact with databases.

## Which Apps use Node.JS for what purpose
## FrontEnd apps(Angular, React etc.) 
- They don’t use Node JS all the time.
- Use only during Development and Build/Compile Time. 

## BackEnd apps(Express,SQL,MongoDB) 
- They use Node JS for everything 
- Development, build/compile and running.


## NPM                            
- Node Package Manager.

## MERN
	MongoDB, Express JS, React, Node
	
## React
- Runs in browser, used to render UI, build highly reactive web Apps
- provide feedback based on user input
- Also serves communication between frontend and backend.

## Express 
- Is a Node JS framework that provides a structured way of handling requests and preparing responses
- used to create server.
- Acts is a Middleware.
	

## MongoDB
- Is a no SQL database engine
- Allows to store documents as collections, instead of records and tables as in traditional SQL databases.
- Does not provides a schema.
- We don’t directly connect to MongoDB from the browser due to security Issues, we use Node JS and express to do the same.


## Architecture of APP
	

UI  -----------> Our Server -----------------> OMDb API
     ←----------		     ←----------------					



## Create Express Application  
	Npx express-generator --no-view omdb-backend

## Generate Node Modules
- Cd omdb-backend
- Npm install

## Delete everything inside public folder.

## Inside package.json
## Scripts
   ## start 
        - On command (npm start) , it calls the script internally, script is run. And the application is run
   ## Dependencies
        - Contains list of dependencies. 

## NodeMon 
    - To restart server automatically when code is changed.

## Default port 
    3000  
   ## if PORT is specified inside .env file, that PORT will be used. 
		- See www file inside bin folder.


## Inside app.js

	⇒ All (require) statements are to import dependencies.
		If name is specified, then node will look into the node modules for those Dependencies.
-   =>Else if file path is specified, then it’ll import those files.

	⇒ var app = express() ; Creates express app;

## Middlewares 
- Components inside the server
- Each middleware can either return the response, or pass on request to next middleware.	
- Each performs specific tasks.



## Axios 
- Promise based HTTP client for the browser and node.js
	https://www.npmjs.com/package/axios 
   ## Allows->
		- Make XMLHTTPRequest from the browser
		- Make http request from node.js
		- Supports Promise API
        - Intercept Request and Response
        - Transform request and response data
        - Cancel Requests
        - Auto Transformations of JSON Data.
        - Client Side-Support for protection against XSRF/CSRF.	

		CSRF(See-Surf)/ XSRF
			https://en.wikipedia.org/wiki/Cross-site_request_forgery 


## Promise API 
- A function passed into another function is called a callback function.
- Whenever a function is async, suppose function is making a server call. 
- Two ways to tackle this
- 1. ## Callback function 
-       So we pass a callback function to that function , so that whenever server returns the data, it's upto the callback function to print       that data .
- 2. Promises  
     ## Use axios for same
- 3. async/await


## axios
- axios.get() returns a promise  
- For a promise execute .then() when response is received
- .catch(err) to check for errors;






## New 

## Add Logic to HTML
    - Use pure JS
        - Problems --> More Code to Manage, time consuming
                    --> DOM has to be handled manually 

## Backend Rendering
 - View + Data processed on server
 - Express can do backend rendering.
## Frontend Rendering
 - View + Data Happens on frontend/UI
     - React, Angular and other frameworks.

 - Initially only backend rendering used to happen,  but as devices became powerful, shift towards frontEnd rendering started. 

## How to share data across nodes in DOM Tree
 - Parent to Child
     - Can become  un-managable if Tree grows large in Size, so not recommended.
 - Use a store => Common Place to store data and share it across the tree.
 - React has Hooks to be used as a store. 
    - Hooks Work with Function Components.


## React has two ways of defining components
 - Class Method
 - Function Method 
    - Name of the Function is the name of the Component. 

## JSX 
 - Stands for Javascript XML. 
 - Allows to write HTML in React.
 - Components Can be used as a HTML tag

 ## Only one top level component can be there 

## className instead of class in JSX


## State Changes Angular v/s React
 - Angular Runs a digest cycle to check what has changed, so it has an overhead 
 - While in react, we have to tell React about state changes

## How to update state in React
 - useState() function   --> Stores the state of a component 
 - Takes initial value as input
 - Returns an array of 2 items
   - First is the Variable itself
   - Second is the function to update Variable's value

    - const [counter, setCounter] = useState(0); 
        - setCounter(setCounter(counter + 1)); 

 - Any time a state changes in the parent, all the children are re-rendered


``` JS
function Button(){
    return 
}
function Counter(){
    return ; 
}
    function App(){
        const [counter,setCounter] = useState(0);
        function counterSet()={setCounter(counter + 11);} 
        return (
            <p> Welcome, and Hello !! </p>
            <Button />
            <Counter /> 
        )
    }
```

## useHistory
    - is a React hook. 
    - Hooks are used to Change state, while informing React about the state change, and telling it to re-render it. 

## Higher Order Functions
 - A function that takes a function as an Argument, and returns a function 
 - Have to use the compiled JSX version in these functions. 
## 