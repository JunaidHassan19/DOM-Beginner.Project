// Variables

let btn = document.querySelector('#new-qoute');
let qoute = document.querySelector('.qoute');
let person = document.querySelector('.person');

const qoutes = [{
  qoute: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
  person: 'Nelson Mandela'
}, {
  qoute: 'The way to get started is to quit talking and begin doing.',
  person: 'Walt Disney'
}, {
  qoute: 'If life were predictable it would cease to be life, and be without flavor.',
  person: 'Eleanor Roosevelt'
}, {
  qoute: 'Life is what happens when you\'re busy making other plans.',
  person: 'John Lennon'
}, {
  qoute: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
  person: 'Mother Teresa'
}, {
  qoute: 'When you reach the end of your rope, tie a knot in it and hang on.',
  person: 'Franklin D. Roosevelt'
}, {
  qoute: 'Always remember that you are absolutely unique. Just like everyone else.',
  person: 'Margaret Mead'
}, {
  qoute: 'Don\'t judge each day by the harvest you reap but by the seeds that you plant.',
  person: 'Robert Louis Stevenson'
}, {
  qoute: 'The future belongs to those who believe in the beauty of their dreams.',
  person: 'Eleanor Roosevelt'
}, {
  qoute: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
  person: 'Benjamin Franklin'
}, {
  qoute: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
  person: 'Helen Keller'
}, ];

// Event Listeners

btn.addEventListener('click', () => {
  let random = Math.floor(Math.random() * qoutes.length);
  qoute.textContent = qoutes[random].qoute;
  person.textContent = qoutes[random].person;
});