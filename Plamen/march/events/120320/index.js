const newsletterBox = document.querySelector('#newsletter');

const hideFunction = () => {
  console.log('keydown');
  console.log('event');

  if (event.keyCode === 27) {
    newsletterBox.style.display = 'none';
  }
}


const showFunction = () => {
  console.log('keydown');
  console.log('event');

  if (event.keyCode === 13) {
    newsletterBox.style.display = 'block';
  }
}

document.body.addEventListener('keydown', hideFunction);
document.body.addEventListener('keyup', showFunction);


const mySubmit = () => {
  // we need to stop the page of reloading after submit
  event.preventDefault(); // this will remove the default behaviour of the event // this will stop the event to reload the page
  console.log('Success' + ' ' + event.target.elements['email'].value);
}

const form = document.querySelector('form');
form.addEventListener('submit', mySubmit);



const myReset = () => {
  event.preventDefault(); // this will remove the default behaviour of the event
  console.log('Reset Success');
}

form.addEventListener('reset', myReset);


