// you're welcome tristan, i didnt forget
console.log("it works!")
document.addEventListener('DOMContentLoaded', function() {
  const colorblindToggle = document.getElementById('colorblind-toggle');
  const bodyElement = document.querySelector('body');

  colorblindToggle.addEventListener('click', function() {
    bodyElement.classList.toggle('colorblind-mode');
  });
});