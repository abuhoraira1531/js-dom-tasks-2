const body = document.getElementById("body");
body.style.backgroundColor = "#FEE4C3";
body.style.width = "1200px";
body.style.margin = "0 auto";

const heading = document.getElementsByClassName("heading");
heading[0].style.backgroundColor = "#A62A2A";
heading[0].style.textAlign = "center";
heading[0].style.color = "#fff";
heading[0].style.fontSize = "40px";
heading[0].style.padding = "16px";
heading[0].style.margin = "50px 0";

const boxContainer = document.getElementById("box-container");
boxContainer.style.display = "grid";
boxContainer.style.gridTemplateColumns = "repeat(3,1fr)";
boxContainer.style.gap = "30px";

const box = document.getElementsByClassName("box");
const subHeading = document.getElementsByClassName("sub-heading");
const item = document.getElementsByClassName("item");

// box-1
const box1 = box[0];
box1.style.fontSize = "24px";
box1.style.width = "330px";
box1.style.backgroundColor = "#F5F5F5";
box1.style.borderRadius = "8px";
box1.style.border = "4px solid black";
box1.style.padding = "10px";
subHeading[0].style.color = "#04FFA3";
item[0].style.color = "#38A990";
item[2].style.color = "#85b1eb";

// box-2
const box2 = box[1];
box2.style.fontSize = "24px";
box2.style.width = "330px";
box2.style.backgroundColor = "#F5F5F5";
box2.style.borderRadius = "8px";
box2.style.border = "4px solid black";
box2.style.padding = "10px";
subHeading[1].style.color = "#97FF00";
item[8].style.color = "#85b1eb";
item[11].style.color = "#FE2751";

// box-3
const box3 = box[2];
box3.style.fontSize = "24px";
box3.style.width = "330px";
box3.style.backgroundColor = "#F5F5F5";
box3.style.borderRadius = "8px";
box3.style.border = "4px solid black";
box3.style.padding = "10px";
subHeading[2].style.color = "#05A7F4";
item[13].style.color = "#85b1eb";

// box-4
const box4 = document.createElement("div");
box4.style.fontSize = "24px";
box4.style.width = "330px";
box4.style.backgroundColor = "#F5F5F5";
box4.style.borderRadius = "8px";
box4.style.border = "4px solid black";
box4.style.padding = "10px";
const heading4 = document.createElement("h2");
heading4.innerText = "List of movies";
heading4.style.color = "#F201FA";
box4.appendChild(heading4);
const ul1 = document.createElement("ul");
box4.appendChild(ul1);
let li1 = document.createElement("li");
li1.innerText = "Movie name 1";
ul1.appendChild(li1);
const li2 = document.createElement("li");
li2.innerText = "Movie name 2";
ul1.appendChild(li2);
const li3 = document.createElement("li");
li3.innerText = "Movie name 3";
li3.style.color = "#B3B684";
ul1.appendChild(li3);
const li4 = document.createElement("li");
li4.innerText = "Movie name 4";
ul1.appendChild(li4);
boxContainer.appendChild(box4);

// box-5
const box5 = document.createElement("div");
box5.style.fontSize = "24px";
box5.style.width = "330px";
box5.style.backgroundColor = "#F5F5F5";
box5.style.borderRadius = "8px";
box5.style.border = "4px solid black";
box5.style.padding = "10px";
const heading5 = document.createElement("h2");
heading5.innerText = "List of sports";
heading5.style.color = "#FE2751";
box5.appendChild(heading5);
const ul2 = document.createElement("ul");
box5.appendChild(ul2);
let li5 = document.createElement("li");
li5.innerText = "sport name 1";
li5.style.color = "#85b1eb";
ul2.appendChild(li5);
const li6 = document.createElement("li");
li6.innerText = "sport name 2";
ul2.appendChild(li6);
const li7 = document.createElement("li");
li7.innerText = "sport name 3";
li7.style.color = "#85b1eb";
ul2.appendChild(li7);
const li8 = document.createElement("li");
li8.innerText = "sport name 4";
ul2.appendChild(li8);
boxContainer.appendChild(box5);

// comments section
const commentSection = document.getElementById("comment-section");
commentSection.style.textAlign = "center";

const submitBtn = document.getElementById("submit");
submitBtn.style.backgroundColor = "#FF4545";
submitBtn.style.color = "white";
submitBtn.style.fontSize = "24px";
submitBtn.style.border = "none";
submitBtn.style.padding = "8px 12px";
submitBtn.style.borderRadius = "8px";

const inputField = document.getElementById("input");
inputField.style.height = "28px";
inputField.style.border = "none";
inputField.style.borderRadius = "8px";
inputField.style.backgroundColor = "#F4F6FF";
inputField.style.padding = "10px 15px";
inputField.style.fontSize = "24px";
inputField.style.marginRight = "20px";

submitBtn.addEventListener("click", function () {
  const comments = document.getElementById("comments");
  const value = inputField.value;
  const h3 = document.createElement("h3");
  h3.innerText = value;
  comments.appendChild(h3);
  inputField.value = "";
});
