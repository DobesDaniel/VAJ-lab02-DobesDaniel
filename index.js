
import express from 'express'
import fs from 'fs/promises'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const task1Object = { firsname: "Obiwan", lastname: "Kenobi", home: "Tattoine" }

// this is the simpliest example - if you go to the localhost:3000, if show you "Hello world"
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//  TASK 1. GET request /testing-json and return JSON - simple object with your name, lastname, home
// return something like { firstname: "Obiwan", lastname: "Kenobi", home: "Tattoine"}
// Hint: For JSON response see Response methods https://expressjs.com/en/guide/routing.html


// TASK 2. GET request /vehicles and return array of simple objects of vehicles in JSON format.
// USE data/vehicles.json file. You have to do transformation of the loaded json file. Remove the extra fields!
// return [{id: 1, name: "Sand Crawler"}, {id: 2, name: "T-16 skyhopper"}, ...]
// Hint: See presentation 5, slide ~13? how to use async await and read file ... 


// TASK 3. GET request /vehicles/id-of-vehicle and return whole object for specific vehicle
// request /vehicles/1 return object for Sand Crawler
// if you call for /vehicles/100 (this ID is not in vehicles.json), return { error: "We don't have vehicle with that ID"}
// only one function here! Not for each vehicle!
// Hint: See route parameters in https://expressjs.com/en/guide/routing.html


// TASK 4. POST request /secret-code 
// If you send POST params password: {password: "2021-9-29-emperor-is-awesome"}   //(today in format YYYY-MM-DD-emperor-is-awesome)
// page should return text: "Your access is granted!" 
// if password is wrong, it should return "Please send valid password or we are forced to destroy your ship."
// Password is changed every day - for tomorrow it is 2021-9-30-emperor-is-awesome
// Hint: For sending POST request, use Postman
// Hint: Add code console.log(req.body) send request, see what it returns 
// Hint: Current date - many ways https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript


// this only show that it listen on port 3000.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

export { app, task1Object };