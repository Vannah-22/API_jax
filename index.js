// // get the axios package and store it in variable
// let axios = require("axios");
// // the console RIGHT NOW is the GIT Bash terminal
// console.log(axios);

// // axios lets us make HTTP requests.

// // get a list of Studio Ghibli films
// // make a variable to store the url of the API (endpoint)
// let url = "https://ghibliapi.herokuapp.com/people";
// /* let url = "https://ghibliapi.herokuapp.com/films"; ALL FILMS; */
// /* let url = "https://ghibliapi.herokuapp.com/locations"; LOCATIONS:*/
// /* let url = "https://ghibliapi.herokuapp.com/films/2de9426b-914a-4a06-a3a0-5e6d9d3886f6"; SPECIFIC
// MOVIE AND ITS INFO "The Secret World of Arriety" */
// /* let url = "https://ghibliapi.herokuapp.com/locations/469b14bd-5565-4436-bbed-c2036f42cc99"; SPECIFIC
// LOCATION AND AN ID OF A LOCATION "Himawari Nursery School" */



// // make a GET request to the url
// axios.get(url) /* AFTER the GET request is made, you recieve a response object */
//     .then(function(response) { // look at the response provided
//        // console.log(response.data); // all the data, the url specifies the part of the data //
//        for (let i = 0; i < data.length; i++) {
//            console.log(data[i].name);
//        }
// })        

// https://dog.ceo/dog-api/
// - Use this API along with axios to get the url to a random image for an Otterhound
// log the url to the console
// make a Github repository to store this code

// let axios = require("axios");
// console.log(axios);
// let url = "https://dog.ceo/api/breed/pitbull/images/random";
// axios.get(url)
//     .then(function(response){
//         let imgLocale = response.data.message;

//         // create an img tag //
//         let img = document.createElement("img");
//         // use the url we got from the API //
//         img.src = imgLocale;
//         img.alt = "Picture of Pitbull";
//         img.className = "dog";
//         // and append it to the document //
//         let container = document.querySelector(".container");
//         container.appendChild(img);
//     })

// let url = "https://ghibliapi.herokuapp.com/films";
// axios.get(url)
//     .then(function(response){
//         let data = response.data;

//         for (i=0; i < data.length; i++) {
//             console.log(data[i].title);
//         }
//         // loop though the data, log the name of each movie
//         // to the console
//     })

let url = "https://ghibliapi.herokuapp.com/films";
axios.get(url)
        .then(function(response){
            let data = response.data;

            for (i=0; i < data.length; i++) {
                let card = document.createElement("div");

                let title = document.createElement("h1");
                card.appendChild(".title");
                
            
                let descrip = document.createElement("p");
                card.appendChild(".desrcip");

                let rls = document.createElement("p");
                card.appendChild(".rls");
            })








//     // loop through the data, 
//         // create a card for each movie
//         /*
//         A container for this card along with...
//         Movie Title (h1)
//         Movie description (p)
//         "Released in" + Release Date (p)
//         */
//        // append that card to the document

//        loop through the data, 
//  create a card for each movie

// A container for this card along with...
// Movie Title (h1)
// Movie description (p)
// "Released in" + Release Date (p)
 
// append that card to the document
// [5:55 PM]
// e.g.
//         <div class="card">
//             <h1 class="title">Castle in the Sky</h1>
//             <p class="description">The orphan Sheeta inherited a mysterious crystal that links her to the mythical
//                 sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes
//                 her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who
//                 plans to use Laputa's science to make himself ruler of the world.</p>
//             <p class="release">Released in 1986</p>
//         </div>
//         <div class="card">
//             <h1 class="title">Grave of the Fireflies</h1>
//             <p class="description">In the latter part of World War II, a boy and his sister, orphaned when their mother
//                 is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life
//                 in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese
//                 countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.</p>
//             <p class="release">Released in 1988</p>
//         </div>
// You do not have permission to send messages in this channel.
// ﻿