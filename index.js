function getFirstSelector(selector) {
  return document.querySelector(selector)

}

function nestedTarget(){
return document.querySelector(" #nested .target");
}

function increaseRankBy(n){
var rl= document.querySelectorAll("#ranked-list")
 for (let i = 0;  i < rl.length; i++) {
    let children = rl[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }

  
}

function deepestChild(){
var nodes = document.querySelectorAll("#grand-node div");
var mostDeep = nodes[nodes.length- 1];
return mostDeep

}

