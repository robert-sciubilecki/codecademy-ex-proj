console.log("hello");
const app = document.querySelector(".app");
const randomPhrase = document.querySelector(".app-random-phrase");
const phraseAuthor = document.querySelector(".app-author");

const randomPhraseLib = [
  {
    quote:
      "I'm sick of following my dreams, man. I'm just going to ask where they're going and hook up with ’em later.",
    author: "Mitch Hedberg",
  },
  {
    quote: "Gentlemen, you can't fight in here. This is the war room.",
    author: "President Merkin Muffley (Peter Sellers), Dr. Strangelove",
  },
  {
    quote:
      "My mother always used to say: The older you get, the better you get, unless you’re a banana.",
    author: "Rose (Betty White), The Golden Girls",
  },
  {
    quote:
      "Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.",
    author: "Jack Handey",
  },
];

function getRandomQuoteObj(quotesArray) {
  const listLength = quotesArray.length;
  const randomIndex = Math.floor(Math.random() * listLength);
  return quotesArray[randomIndex];
}

function setRandomPhraseOnScreen(phraseObj, phraseEl, authorEl) {
  const { quote, author } = phraseObj;
  phraseEl.textContent = quote;
  authorEl.textContent = author;
}

setRandomPhraseOnScreen(
  getRandomQuoteObj(randomPhraseLib),
  randomPhrase,
  phraseAuthor
);

console.log(getRandomQuoteObj(randomPhraseLib));
