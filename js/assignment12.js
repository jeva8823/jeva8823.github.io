// document.querySelector('button'); (could apply to any button, not the best if you want something specific)
// document.querySelector('.new-quote button'); (could apply to different elements, not the best choice)
// document.querySelector('#js-new-quote'); (could be the best choice because the id is specific)
// const means it doesn't change, then adding a variable (letters, _, $)
//const quotebutton = document.querySelector('#js-new-quote');
// using defer in html will allow script to load and doc to loas and script will run once everything else is done
// console.log helps with debugging
const endpoint = 'https://api.quotable.io/random';

const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click',getQuote);

async function getQuote() {
  console.log("quote button was clicked");
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json);
    displayQuote(json.content);
    displayA(json.author);
    const tweetButton=document.getElementById("tweet");
        tweetButton.href="https://twitter.com/intent/tweet?text="+json.content+" ~ "+json.author;
  } catch(err) {
    console.log(err)
    alert('Failed');
  }
}

function displayQuote(quote) {
  const quoteText - document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}
function displayA(auth) {
    const quoteA = document.querySelector('#js-quote-auth');
    quoteA.textContent = "—" + auth;
}
