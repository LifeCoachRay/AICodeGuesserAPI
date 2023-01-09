const form = document.getElementById('guess-form');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', event => {
  event.preventDefault();
  const guess = document.getElementById('guess').value;
  fetch('/guessCode', {
    method: 'POST',
    body: JSON.stringify({ guess }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json())
    .then(response => {
      responseDiv.textContent = response.message;
    })
    .catch(error => {
      console.error(error);
      responseDiv.textContent = 'An error occurred.';
    });
});
