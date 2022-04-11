// document.querySelector('button'); (could apply to any button, not the best if you want something specific)
// document.querySelector('.new-quote button'); (could apply to different elements, not the best choice)
// document.querySelector('#js-new-quote'); (could be the best choice because the id is specific)
// const means it doesn't change, then adding a variable (letters, _, $)
//const quotebutton = document.querySelector('#js-new-quote');
// using defer in html will allow script to load and doc to loas and script will run once everything else is done
// console.log helps with debugging
async function getQuote() {
  console.log("quote button was clicked");
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json);
    displayQuote(json.fact);
  } catch(err) {
    console.log(err)
    alert('Failed');
  }
}

function displayQuote(quote) {
  const quoteText - document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

const endpoint = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click',getQuote);
