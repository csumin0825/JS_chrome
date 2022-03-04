const quotes = [
  {
    quote: "9 X 1 =",
    author: "9",
  },
  {
    quote: "9 X 2 =",
    author: "18",
  },
  {
    quote: "9 X 3 =",
    author: "27",
  },
  {
    quote: "9 X 4 =",
    author: "36",
  },
  {
    quote: "9 X 5 =",
    author: "45",
  },
  {
    quote: "9 X 6 =",
    author: "54",
  },
  {
    quote: "9 X 7 =",
    author: "63",
  },
  {
    quote: "9 X 8 =",
    author: "72",
  },
  {
    quote: "9 X 9 =",
    author: "81",
  },
  {
    quote: "9 X 10 =",
    author: "90",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
