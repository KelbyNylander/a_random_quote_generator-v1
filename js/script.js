/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {
      quote: "If people concentrated on the really important things in life there'd be a shortage of fishing poles",
      source: "Doug Larson"
  },
  {
      quote: "Somebody just back of you while you are fishing is as bad as someone looking over your shoulder while you write a letter to your girl",
      source: "Ernest Hemingway",
      tags: "Author"
  },
  {
      quote: "I've gone fishing thousands of times in my life, and I have never once felt unlucky or poorly paid for those hours on the water",
      source: "William Tapply",
      tags: "Author"
  },
  {
      quote: "Angling is extremely time consuming. That's sort of the whole point",
      source: "Thomas McGuane",
      tags: "Author"
  },
  {
      quote: "It is impossible to grow weary of a sport that is never the same on any two days of the year",
      source: "Theodore Gordon",
      tags: "Author"
  },
  {
      quote: "The solution to any problem — work, love, money, whatever is to go fishing, and the worse the problem, the longer the trip should be",
      source: "John Gierach",
      tags: "Author"
  },
  {
      quote: "If fishing is interfering with your business, give up your business",
      source: "Sparse Grey Hackle",
      tags: "aka Alfred W. Miller"
  },
  {
      quote: "Fishing is not an escape from life, but often a deeper immersion into it",
      source: "Harry Middleton",
      tags: "Author"
  },
  {
      quote: "By the time I had turned thirty, I'd realized two important things. One, I had to fish. Two, I had to work for a living",
      source: "Mallory Burton"
  },
  {
      quote: "I go fishing not to find myself but to lose myself",
      source: "Joseph Monniger",
      tags: "Author"
  },
  {
      quote:  "Calling fishing a hobby is like calling brain surgery a job",
      source: "Paul Schullery",
      tags: "Author"
  },
  {
      quote:  "Many of the most highly publicized events of my presidency are not nearly as memorable or significant in my life as fishing with my daddy",
      source: "Jimmy Carter"
  },
  {
      quote:  "Scholars have long known that fishing eventually turns men into philosophers. Unfortunately, it is almost impossible to buy decent tackle on a philosopher's salary",
      source: "Patrick McManus",
      tags: "Author"
  },
  {
      quote:  "Do not tell fish stories where the people know you. Particularly, don't tell them where they know the fish",
      source: "Mark Twain",
      tags: "Author"
  },
  {
      quote:  "The best time to go fishing is when you can get away",
      source: "Robert Traver",
      tags: "Author"
  },
  {
      quote:  "Everyone should believe in something. I believe I'll go fishing",
      source: "Henry David Thoreau",
      tags: "Author"
  },
  {
      quote:  "If all politicians fished, instead of spoke publicly, we would be at peace with the world",
      source: "Will Rogers"
  },
  {
      quote:  "No life is so happy and so pleasant as the life of the well-govern'd angler",
      source: "Izaak Walton",
      tags: "Author"
  },
  {
      quote:  "I don't want to sit at the head table anymore. I want to go fishing",
      source: "George Bush"
  },
  {
      quote:  "I only make movies to finance my fishing",
      source: "Lee Marvin"
  },
  {
      quote:  "Perhaps I should not have been a fisherman, he thought. But that was the thing I was born for.",
      source: "Ernest Hemingway",
      citation: "The Old Man and the Sea",
      year: "1952",
      tags: "Author"
},
  ]; // array of 21 quotes

/***
 * `getgetRandomQuote` function
***/

function getRandomQuote() {
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    return quote
}
// getRandomQuote function operates on one line also pulling information from the array don't miss the [] 
console.log(getRandomQuote()); // added to test and debug function


/***
 * `printQuote` function
***/

function getRandomColor( ){
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgb = `rgb(${r}, ${g} ,${b})`;
  document.body.style.background = rgb; 
}

function printQuote ( ) {
  let calledQuote = getRandomQuote();
  let html = `
  <p class="quote">${calledQuote.quote}</p>
  <p class="source"> ${calledQuote.source}
  ` // closed template literal
  if (calledQuote.citation) {
    html += `<span class=  "citation" >${calledQuote.citation}</span >`   
  }
  if (calledQuote.year) {
    html += `<span class=  "year" >${calledQuote.year}</span >`   
  }
  if (calledQuote.tags) {
    html += `<span class= "tags" >${calledQuote.tags}</span >`
  }
html += `</p>`;
getRandomColor();
document.getElementById('quote-box').innerHTML = html;
}

setInterval(() => { // extra credit work
  printQuote();
}, 10000); // 10,000 milliseconds = 10 second delay

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
