/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let icon = ["♦", "♥", "♠", "♣"];
  let iconClass = ["diamond", "heart", "spade", "club"];
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let iconR = Math.floor(Math.random() * icon.length);
  let numR = Math.floor(Math.random() * num.length);

  let divNum = document.querySelector(".card>div:nth-child(2)");
  divNum.innerHTML = num[numR];

  let head = document.querySelector(".card>div:nth-child(1)");
  head.innerHTML = "<font>" + icon[iconR] + "</font>";

  let footer = document.querySelector(".card>div:nth-child(3)");
  footer.innerHTML = "<font>" + icon[iconR] + "</font>";

  let card = document.querySelector(".card");
  card.classList.add(iconClass[iconR]);
};
