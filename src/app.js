/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = [
    "Lion",
    "Hunter",
    "Tiger",
    "Wrestler",
    "Bear",
    "Chef",
    "Elephant",
    "Gardener",
    "Giraffe",
    "Musician",
    "Hippo",
    "Swimmer",
    "Kangaroo",
    "Boxer",
    "Koala",
    "Tree Climber",
    "Panda",
    "Painter",
    "Zebra",
    "Mathematician"
  ];
  let action = [
    "took my",
    "threw my",
    "yelled at my",
    "ate my",
    "kicked my",
    "hid my",
    "destroyed my",
    "washed my",
    "borrowed my",
    "lost my",
    "found my",
    "broke my",
    "fixed my",
    "drove my",
    "wore my",
    "traded my",
    "bought my",
    "sold my",
    "cleaned my",
    "played with my"
  ];
  let possession = [
    "homework",
    "shoe",
    "pen",
    "phone",
    "book",
    "keys",
    "wallet",
    "guitar",
    "jacket",
    "umbrella",
    "camera",
    "watch",
    "glasses",
    "hat",
    "scarf",
    "bag",
    "bottle",
    "pillow",
    "blanket",
    "chair"
  ];
  let where = [
    "on the street",
    "in my house",
    "at the park",
    "in the car",
    "at work",
    "at school",
    "in the kitchen",
    "in the bathroom",
    "in the bedroom",
    "in the backyard",
    "in the pool",
    "at the beach",
    "in the mountains",
    "at the gym",
    "at the mall",
    "at the movie theater",
    "on the bus",
    "on the train",
    "in the airplane",
    "on the boat"
  ];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subIndx = Math.floor(Math.random() * subject.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let possetionIndx = Math.floor(Math.random() * possession.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subIndx] +
    " " +
    action[actionIndx] +
    " " +
    possession[possetionIndx] +
    " " +
    where[whereIndx] +
    "."
  );
};
