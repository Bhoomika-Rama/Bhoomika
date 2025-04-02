
const words = ['Interior Designer', 'Construction Project Manager'];
let i = 0, txt = '', wordIndex = 0;

(function type() {
  let current = words[wordIndex % words.length];
  if(i <= current.length) {
    txt = current.substring(0, i++);
  } else {
    i = 0; wordIndex++;
    setTimeout(type, 1000);
    return;
  }
  document.getElementById('typewriter').innerHTML = txt;
  setTimeout(type, 150);
})();
