
// HARD CODE

// const fs = require ('node:fs');

// const express = require('express')

// // // const server = fs.createServer();

// const app = express();

// app.get('/dad-jokes-ok', (req, res) => {
//     // console.log('');
//     const dummyJson = {
    //         joke: 'Hello, I am a JOKE'
    //     }
//     console.log("Request received on Get Users end point");

//     res.json(dummyJson);

// })

// app.listen(2020, ()=> {
    //     console.log('Express server is up and running at port 2020');
    // });
    
    
    // FETCHING DATA 

//     const fs = require ('node:fs');
//     const express = require('express');
//     const { log } = require('node:console');

//     const app = express();

//     async function getData() {
        
//         // Fetching Data from this API 

//         try {

//             const response = await fetch("https://official-joke-api.appspot.com/jokes/random")
//             const Jokes = await response.json();
            
//             console.log(Jokes)
//         } catch (error) {

//             console.log((error));
            
//         }
        
//     } 
    
//     app.get('/dad-jokes', async(req, res) => {
//         // const dummyJson = Jokes;
//         console.log("Joke received end point");
//         const Jokes = await getData();
//         res.json(Jokes);
        
//     })   



// app.listen(8080, ()=> {
    
//     console.log('Express server is up and running at port 8080');
// });


const express = require('express');
// const fetch = require('node-fetch'); // Make sure to install this package

const app = express();

let result = [];

// Function to fetch a random joke using the Official Joke API
async function fetchJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
        const joke = await response.json();

        result = {
            Joke_type: joke.type,
            Joke_Question: joke.setup,
            Joke_Punchline: joke.punchline
        }

        return result;
        
    } catch (error) {
        console.error('Error fetching joke:', error);
        return { error: 'Failed to fetch joke' };
    }
}

// Endpoint to get a random dad joke
app.get('/dad-jokes', async (req, res) => {
    console.log("Joke request received");
    const joke = await fetchJoke();
    res.json(joke);
});

// Start server on port 2020
app.listen(2020, () => {
    console.log('Express server is up and running at port 2020');
});
