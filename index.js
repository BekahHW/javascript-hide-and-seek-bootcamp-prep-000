function getFirstSelector(selector) {
  return document.querySelector(selector)

}

function nestedTarget(){
return document.querySelector(" #nested .target");
}

function increaseRankBy(n){
document.ranked-list(parseInt(n+2))
}

function deepestChild(){
  function deepestChild(node) {
  node.find(':last');
}

var node = $('#grand-node');
var mostDeep = deepest(node);
}