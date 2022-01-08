// The array which contains all possible values for a hex number
let digits = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

// ! Variables ----------------------------------------------------------------------------------------------------

let color = document.querySelector(".hex-color");
let main = document.querySelector(".main");
let refreshButton = document.querySelector("#refresh");
let copyButton = document.querySelector("#copy");
let popup = document.querySelector(".message");

// ! ----------------------------------------------------------------------------------------------------

// ? Functions ----------------------------------------------------------------------------------------------------

function getRandomNumber(arr) {
  return Math.floor(Math.random() * (arr.length - 0)) + 0;
}

function createHexString() {
  let hexString = "#";

  for (let i = 0; i < 6; i++) {
    let randomDigit = getRandomNumber(digits);
    let hexDigit = digits[randomDigit];

    hexString += hexDigit;
  }

  return hexString;
}

function displayChanges() {
  let hexNumber = createHexString();
  color.textContent = hexNumber;
  main.style.backgroundColor = hexNumber;
}

function copyToClipboard(val) {
  let textarea = document.createElement("textarea");
  textarea.setAttribute("readonly", "");
  textarea.style.zIndex = "-1"; // To make it invisible
  textarea.value = val.textContent;
  main.appendChild(textarea);
  textarea.select();
  document.execCommand("copy"); // Copies the contents of the textarea to the clipboard
  main.removeChild(textarea);
}

// ? ----------------------------------------------------------------------------------------------------

// ** Events ----------------------------------------------------------------------------------------------------

displayChanges();

refreshButton.addEventListener("mousedown", () => {
  displayChanges();
});

copyButton.addEventListener("mousedown", () => {
  console.log(color.textContent);
  copyToClipboard(color);
  popup.classList.add("active");
});

popup.addEventListener("animationend", () => {
  popup.classList.remove("active");
});

// ** ----------------------------------------------------------------------------------------------------
