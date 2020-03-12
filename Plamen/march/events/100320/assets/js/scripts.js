// Function to change the content of t2
function modifyText() {
  const t2 = document.querySelector("#t2");
  if (t2.firstChild.nodeValue === "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
  }
}

// Add event listener to table
const el = document.querySelector("#outside");
// el.addEventListener("click", modifyText);
// el.addEventListener("mouseenter", modifyText);
el.addEventListener("mouseleave", modifyText);
console.log('added event listener');
el.removeEventListener('mouseleave', modifyText);

// DOMContentLoaded event

document.addEventListener('DOMContentLoaded', () => {
  console.log('Dom fully loaded and parsed')
  // now we can start changing stuff!!
  // execute code when the html (DOM) is loaded
})