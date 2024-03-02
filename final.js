// Functions used in the final part

import { set, ref } from "./config.js";

// A function playing an audio
export function playAudio(text) {
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "fr-FR";
  speech.volume = 1;
  speech.rate = 1;
  speech.text = text;
  speechSynthesis.speak(speech);
}

// A function that moves a phrase to the next box and changes the next repetition date
export function movePhraseForward(k, boxes) {
  const today = new Date();
  const newRepetDate = new Date(today);

  const foundElementBox5 = boxes[4].find(({ id }) => id === k + 1);
  if (foundElementBox5) {
    const foundIndex = boxes[4].indexOf(foundElementBox5);

    // The phrase won't be shown again (we don't show phrases from box6)

    foundElementBox5.repetDate = 0;

    boxes[5].push(foundElementBox5); // adding the element to box6

    boxes[4].splice(foundIndex, 1); // deleting it from box5
  }

  const foundElementBox4 = boxes[3].find(({ id }) => id === k + 1);
  if (foundElementBox4) {
    const foundIndex = boxes[3].indexOf(foundElementBox4);

    newRepetDate.setDate(today.getDate() + 30); // The next repetition is in 30 days
    console.log(newRepetDate.toDateString());

    foundElementBox4.repetDate = newRepetDate.getTime();

    boxes[4].push(foundElementBox4); // adding the element to box5

    boxes[3].splice(foundIndex, 1); // deleting it from box4
  }

  const foundElementBox3 = boxes[2].find(({ id }) => id === k + 1);
  if (foundElementBox3) {
    const foundIndex = boxes[2].indexOf(foundElementBox3);

    newRepetDate.setDate(today.getDate() + 14); // The next repetition is in 14 days
    console.log(newRepetDate.toDateString());

    foundElementBox3.repetDate = newRepetDate.getTime();

    boxes[3].push(foundElementBox3); // adding the element to box4

    boxes[2].splice(foundIndex, 1); // deleting it from box3
  }

  const foundElementBox2 = boxes[1].find(({ id }) => id === k + 1);
  if (foundElementBox2) {
    const foundIndex = boxes[1].indexOf(foundElementBox2);

    newRepetDate.setDate(today.getDate() + 7); // The next repetition is in 7 days
    console.log(newRepetDate.toDateString());

    foundElementBox2.repetDate = newRepetDate.getTime();

    boxes[2].push(foundElementBox2); // adding the element to box3

    boxes[1].splice(foundIndex, 1); // deleting it from box2
  }

  const foundElementBox1 = boxes[0].find(({ id }) => id === k + 1);
  if (foundElementBox1) {
    const foundIndex = boxes[0].indexOf(foundElementBox1);

    newRepetDate.setDate(today.getDate() + 3); // The next repetition is in 3 days
    console.log(newRepetDate.toDateString());

    foundElementBox1.repetDate = newRepetDate.getTime();

    boxes[1].push(foundElementBox1); // adding the element to box2

    boxes[0].splice(foundIndex, 1); // deleting it from box1
  }
  return boxes;
}

// A function that moves a phrase to a lower box (when a user makes a mistake) and changes the next repetition date
export function movePhraseBackward(k, boxes) {
  console.log("box1 inside moveback", boxes[0]);

  const today = new Date();
  const newRepetDate = new Date(today);

  newRepetDate.setDate(today.getDate() + 1); // The next repetition is in 1 day for all the elements in all boxes
  console.log(newRepetDate.getTime());

  const foundElementBox1 = boxes[0].find(({ id }) => id === k + 1);
  if (foundElementBox1) {
    const foundIndex = boxes[0].indexOf(foundElementBox1);

    foundElementBox1.repetDate = newRepetDate.getTime();
    console.log("foundElBox1", foundElementBox1);

    // The element stays in the same box
  }

  const foundElementBox2 = boxes[1].find(({ id }) => id === k + 1);
  if (foundElementBox2) {
    const foundIndex = boxes[1].indexOf(foundElementBox2);
    console.log("foundElBox2", foundElementBox2);

    foundElementBox2.repetDate = newRepetDate.getTime();

    boxes[0].push(foundElementBox2); // adding the element to box1
    console.log("box1 after push", boxes[0]);

    boxes[1].splice(foundIndex, 1); // deleting it from box2
  }

  const foundElementBox3 = boxes[2].find(({ id }) => id === k + 1);
  if (foundElementBox3) {
    const foundIndex = boxes[2].indexOf(foundElementBox3);

    foundElementBox3.repetDate = newRepetDate.getTime();

    console.log("foundElBox3", foundElementBox3);

    boxes[1].push(foundElementBox3); // adding the element to box2

    boxes[2].splice(foundIndex, 1); // deleting it from box3
  }

  const foundElementBox4 = boxes[3].find(({ id }) => id === k + 1);
  if (foundElementBox4) {
    const foundIndex = boxes[3].indexOf(foundElementBox4);

    foundElementBox4.repetDate = newRepetDate.getTime();

    console.log("foundElBox4", foundElementBox4);

    boxes[1].push(foundElementBox4); // adding the element to box2 (it goes 2 boxes lower)

    boxes[3].splice(foundIndex, 1); // deleting it from box4
  }

  const foundElementBox5 = boxes[4].find(({ id }) => id === k + 1);
  if (foundElementBox5) {
    const foundIndex = boxes[4].indexOf(foundElementBox5);

    foundElementBox5.repetDate = newRepetDate.getTime();

    boxes[2].push(foundElementBox5); // adding the element to box3 (it goes 2 boxes lower)

    boxes[4].splice(foundIndex, 1); // deleting it from box5
  }
  console.log("box2 inside moveback", boxes[1]);
  return boxes;
}

export function addBoxToDb(data, boxes, userId, database) {
  let tense;

  switch (data.data[0].tense) {
    case "present (le présent de l'indicatif)":
      tense = "/present/";
      break;
    case "past (le passé composé)":
      tense = "/pastcomp/";
      break;

    case "imperfect past (l'imparfait)":
      tense = "/pastimp/";
      break;
  }
  for (let i = 0; i < boxes.length; i++) {
    let boxName = "box" + (i + 1);
    let boxRef = ref(database, "users/" + userId + "/data" + tense + boxName);
    set(boxRef, boxes[i])
      .then(() => {
        console.log("Box " + boxName + " added successfully do DB");
      })
      .catch((error) => {
        console.error("Error adding the box " + boxName + " : ", error);
      });
  }
}
