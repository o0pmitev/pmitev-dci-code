// const inlineJavascript = "hello world";
// console.log(inlineJavascript);

// console.log(window);
// console.log({});

// let name = prompt("What is your name?"); 
// alert(`Hello world ${name}`);
console.log(document);
console.log(document.doctype);
console.log(document.head);
console.log(document.title);
console.log(document.body)

let heading = document.getElementById('websiteTitle');
heading.style.color = "blue";
console.log(heading.style.color);

let links = document.querySelectorAll('a');
console.log(links);

// loops trough the array of all the links
for(let i = 0; i < links.length; i++) {
  links[i].style.color = "hotblue";
  links[i].style.fontSize = "5em";
  links[i].style.margin = "0.4em ";
  links[i].style.textDecoration = "none";
};

links.style.color = "hotblue";
links.style.fontSize = "5em";