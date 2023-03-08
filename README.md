# lab-02

## Exercise for modules
1. MOVE ALL FUNCTIONS and array from `functions.js` into separate files in folders `utils` and `data` - split it by comments above functions
    * function for converting color in hex format -> move into `utils/colors.js` 
    * move math functions into `utils/math.js`
    * same for another types of functions
2. You should have only one implementation of every function. If you need specific function in different file, use export/import
3. Don't forgot to import the moved functiosn again in the file functions.js
TIP: When you run `node functions.js` it should give you the same output as for `node test-functions.js`

## Exercise for Express
Before you can do anything, run `npm install` to install the dependencies as described in `package.json`
You can start your web server by running `node index.js` 

1. Implement all the end points in the index.js

- Recommended tool for sending requests: Postman https://www.postman.com/downloads/   
- How to send a Post request in Postman
![image](https://user-images.githubusercontent.com/8086995/223738127-fc28a41b-9f7c-45bf-8e05-045c072f7ae3.png)


## Bonus task:
1. Implement bonus.js
