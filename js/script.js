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
      source: "Ernest Hemingway"
  },
  {
      quote: "I've gone fishing thousands of times in my life, and I have never once felt unlucky or poorly paid for those hours on the water",
      source: "William Tapply"
  },
  {
      quote: "Angling is extremely time consuming. That's sort of the whole point",
      source: "Thomas McGuane"
  },
  {
      quote: "It is impossible to grow weary of a sport that is never the same on any two days of the year",
      source: "Theodore Gordon"
  },
  {
      quote: "The solution to any problem — work, love, money, whatever is to go fishing, and the worse the problem, the longer the trip should be",
      source: "John Gierach"
  },
  {
      quote: "If fishing is interfering with your business, give up your business",
      source: "Sparse Grey Hackle"
  },
  {
      quote: "Fishing is not an escape from life, but often a deeper immersion into it",
      source: "Harry Middleton"
  },
  {
      quote: "By the time I had turned thirty, I'd realized two important things. One, I had to fish. Two, I had to work for a living",
      source: "Mallory Burton"
  },
  {
      quote: "I go fishing not to find myself but to lose myself",
      source: "Joseph Monniger"
  },
  {
      quote:  "Calling fishing a hobby is like calling brain surgery a job",
      source: "Paul Schullery"
  },
  {
      quote:  "Many of the most highly publicized events of my presidency are not nearly as memorable or significant in my life as fishing with my daddy",
      source: "Jimmy Carter"
  },
  {
      quote:  "Scholars have long known that fishing eventually turns men into philosophers. Unfortunately, it is almost impossible to buy decent tackle on a philosopher's salary",
      source: "Patrick McManus"
  },
  {
      quote:  "Do not tell fish stories where the people know you. Particularly, don't tell them where they know the fish",
      source: "Mark Twain"
  },
  {
      quote:  "The best time to go fishing is when you can get away",
      source: "Robert Traver"
  },
  {
      quote:  "Everyone should believe in something. I believe I'll go fishing",
      source: "Henry David Thoreau"
  },
  {
      quote:  "If all politicians fished, instead of spoke publicly, we would be at peace with the world",
      source: "Will Rogers"
  },
  {
      quote:  "No life is so happy and so pleasant as the life of the well-govern'd angler",
      source: "Izaak Walton"
  },
  {
      quote:  "I don't want to sit at the head table anymore. I want to go fishing",
      source: "George Bush"
  },
  {
      quote:  "I only make movies to finance my fishing",
      source: "Lee Marvin"
  }
  ];
  
  console.log(quotes);

/***
 * `getgetRandomQuote` function
***/

let arrayLength = quotes.length;

function getRandomQuote() {
    return Math.floor(Math.random() * arrayLength);
}

console.log(getRandomQuote());


/***
 * `printQuote` function
***/

function printQuote( ) {
  let i = getRandomQuote(quotes);
  let quote = quotes[i]
  return quote;
}

console.log(printQuote());


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);