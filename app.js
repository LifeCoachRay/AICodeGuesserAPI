const express = require('express');
const app = express();
const port = 3000;

const correctCodes = ['code1', 'code2', 'code3'];

const guessCode = () => {
  const code = Math.random().toString(36).substring(2, 8);
  return correctCodes.includes(code) ? code : null;
};

app.use(express.static('public'));

app.post('/guessCode', (req, res) => {
  const guessedCode = req.body.guess;
  if (correctCodes.includes(guessedCode)) {
    res.send({ message: `You guessed the correct code: ${guessedCode}` });
  } else {
    res.send({ message: 'Incorrect code. Please try again.' });
  }
}
);

app.listen(port, () => {
  console.log(`API listening on port ${port}!`);
});
