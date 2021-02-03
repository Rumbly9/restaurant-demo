// this script is for search bar button
const btn = document.querySelector("#srcBtn")
const input = document.querySelector("#siteSearch")

btn.addEventListener('click', show);

function show() {
  input.classList.toggle("hidden");
}

// this script is for clickable section // This is currently a hot mess but damn it works//
const card = document.querySelector(".special");
const link = document.querySelector(".specialLink");

card.addEventListener('click', handleClick)

function handleClick() {
  link.click();
}

const card2 = document.querySelector(".menu");
const link2 = document.querySelector(".menuLink");

card2.addEventListener('click', handleClick2)

function handleClick2() {
  link2.click();
}

const card3 = document.querySelector(".location");
const link3 = document.querySelector(".locationLink");

card3.addEventListener('click', handleClick3)

function handleClick3() {
  link3.click();
}
