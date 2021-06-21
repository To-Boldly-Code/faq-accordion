// When user clicks on question, show/hide answer
// Put an event listener on question/answer parent div
// Add relevant CSS display properties to show and hide when clicked

// Target the accordion div
const accordionItem = document.querySelectorAll('.accordion-item');

// Target the answer div
const answerItem = document.querySelectorAll('.answer');

// Create function to show/hide answer div
const showAnswer = e => {
  const clicked = e.currentTarget.childNodes[3];

  if (clicked.style.display === 'block') {
    clicked.style.display = 'none';
  } else {
    clicked.style.display = 'block';
  }
};

// Add event listener
accordionItem.forEach(item => item.addEventListener('click', showAnswer));