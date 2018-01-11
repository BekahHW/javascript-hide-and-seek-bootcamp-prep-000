function getFirstSelector(selector) {
  return document.querySelector(selector)

}

function nestedTarget(){
return document.querySelector(" #nested .target");
}

function increaseRankBy(n){
return document.querySelector("#ranked-list"+ n)

}

function deepestChild(){
var nodes = document.querySelectorAll("#grand-node div");
var mostDeep = nodes[nodes.length- 1];
return mostDeep

}

