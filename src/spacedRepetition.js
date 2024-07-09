// A function that moves a phrase to the next box and changes the next repetition date
export function movePhraseForward(k, boxes) {
  console.log(boxes)
  const today = new Date();
  const newRepetDate = new Date(today);
  let foundElement = null;

  const repetDateArrow = [3, 7, 14, 30, 0];
  for (let i = 4; i >= 0; i--) {
    foundElement = boxes[i].find(({ id }) => id === k + 1);

    if (foundElement) {
      const foundIndex = boxes[i].indexOf(foundElement);
      console.log("foundIndex in movePhraseForward", foundIndex);

      newRepetDate.setDate(today.getDate() + repetDateArrow[i]);
      foundElement.repetDate = newRepetDate.getTime();

      boxes[i + 1].push(foundElement); // adding the element to the next box
      boxes[i].splice(foundIndex, 1); // deleting it from the current box

      // Note: the elements from box6 won't be shown again
     
      break;
    }
  }

  console.log("foundElement in movePhraseForward", foundElement);

  if (!foundElement) {
    let object = { id: k+1, repetDate: 0 };
      
      newRepetDate.setDate(today.getDate() + 3);
      object.repetDate = newRepetDate.getTime();

      boxes[0].push(object);
  }
  
}

// A function that moves a phrase to the box below (when a user makes a mistake) and changes the next repetition date
export function movePhraseBackward(k, boxes) {
  console.log(boxes)
  const today = new Date();
  const newRepetDate = new Date(today);
  let foundElement = null;

  newRepetDate.setDate(today.getDate() + 1); // The next repetition is in 1 day for all the elements in all boxes

  for (let i = 0; i <= 4; i++) {
    foundElement = boxes[i].find(({ id }) => id === k + 1);

    if (foundElement) {
      const foundIndex = boxes[i].indexOf(foundElement);
      console.log("ID in moveBack: ", k+1);
      foundElement.repetDate = newRepetDate.getTime();
      if (i !== 0) {
        boxes[i - 1].push(foundElement); // the element goes one box down
        boxes[i].splice(foundIndex, 1); // deleting it from the current box

      } 

      break;

     }
  }

  console.log("foundElement in movePhraseback", foundElement);

    
  if (!foundElement) {
    let object = { id: k+1, repetDate: 0 };
      
      object.repetDate = newRepetDate.getTime();

      boxes[0].push(object);

      console.log("ID in moveBack not found: ", k+1);
  }


}
