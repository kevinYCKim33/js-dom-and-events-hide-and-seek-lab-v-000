function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

// function deepestChild() {
//   let grandNode = document.querySelector('#grand-node');
//   let list = grandNode.querySelectorAll('div');
//   return list[list.length - 1];
// }

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];
  while (nextNode.children[0]) {
    nextNode = nextNode.children[0];
  }
  return nextNode;

}

function increaseRankBy(n) {
  let rankedNumbers = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < rankedNumbers.length; i++) {
    rankedNumbers[i].innerHTML = parseInt(rankedNumbers[i].innerHTML) + n;
  }
}

// function increaseRankBy(n) {
//   const rankedLists = document.querySelectorAll('.ranked-list')
//
//   for (let i = 0, l = rankedLists.length; i < l; i++) {
//     let children = rankedLists[i].children
//
//     for (let j = 0, k = children.length; j < k; j++) {
//       children[j].innerHTML = parseInt(children[j].innerHTML) + n
//     }
//   }
// }
