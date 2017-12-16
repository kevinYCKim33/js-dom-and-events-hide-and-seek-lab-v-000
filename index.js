function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div.target');
}

function deepestChild() {
  let grandNode = document.querySelector('#grand-node');
  let list = grandNode.querySelectorAll('div');
  return list[list.length - 1];
}

function increaseRankBy(n) {
  let rankedNumbers = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < rankedNumbers.length; i++) {
    rankedNumbers[i].innerHTML = parseInt(rankedNumbers[i].innerHTML) + n;
  }
}
