// Functions used in the main part

// AA function generating a unique index and displaying a verb and a phrase corresponding to the index
export function generateElements(data, indexArray, k) {
  if (indexArray.length !== data.data.length) {
    // Generate a random and unique index
    k = Math.floor(Math.random() * data.data.length);
    do {
      k = Math.floor(Math.random() * data.data.length);
    } while (indexArray.includes(k));
    indexArray.push(k);
  } else {
    console.log("No more phrases to practise!");
  }
  displayVerb(data, k);
  displayPhrase(data, k);
  return k;
}

// A function that displays a verb to conjugate
function displayVerb(data, k) {
  // Selecting the verb display section
  const verbDisplay = document.querySelector(".verb-display p");

  if (data && data.data.length > 0) {
    verbDisplay.textContent = data.data[k].verb;
  }
}

// A function that displays a phrase (the context)
function displayPhrase(data, k) {
  // Selecting the phrase display section (the "p" element)
  const phraseDisplay = document.querySelector(".phrase-section p");
  if (data && data.data.length > 0) {
    phraseDisplay.textContent = data.data[k].phrase;
  }
}

// A function displaying the tense
export function displayTense(data) {
  // Selecting the tense display section
  const tenseDisplay = document.querySelector(".tense-display p");
  // Displaying the tense
  if (data && data.data.length > 0) {
    tenseDisplay.textContent = data.data[0].tense;
  }
}
