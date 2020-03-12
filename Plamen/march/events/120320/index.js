const newsletterBox = document.querySelector('#newsletter');

const myFunction = () => {
  console.log('keydown');
  console.log('event');

  if (event.keyCode === 27) {
    newsletterBox.style.display = 'none';
  }
}

document.addEventListener('keydown', myFunction);