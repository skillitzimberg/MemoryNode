export function Memory() {
  this.turnCount = 0;
  // this.matchedCards = [];
  // this.thisPlay = [];
}

export function Card(face) {
  this.face = face;
  this.back = "back";
}

Memory.prototype.deck = function() {
  var faces = ["black", "red", "blue", "green", "orange"];
  var fullDeck = [];
  faces.forEach(function(card){
    fullDeck.push(card);
    fullDeck.push(card);
  });

  var x;
  for(var i = fullDeck.length - 1; i > 0; i--){
    var randomNumber = Math.floor(Math.random()*(i + 1));
    x = fullDeck[i];
    fullDeck[i] = fullDeck[randomNumber];
    fullDeck[randomNumber] = x;
  }
  return fullDeck;
}

Memory.prototype.compareFaces = function(clickedCards) {
  this.turnCount++;
  console.log(this.turnCount);
  if(clickedCards[0][0] === clickedCards[1][0]) {
    return true;
  }
  else {
    return false;
  }
}

// Memory.prototype.checkClickStatus = function(cardFace. cardId) {
//   if(!this.matchedCards.includes(cardId) && (this.thisPlay.length === 0 || cardId != this.thisPlay[0][1])) {
//     this.thisPlay.push([cardFace, cardId]);
//   }
// }

// Memory.prototype.turn = function() {
//   if(thisPlay.length === 2) {
//     if(memory.compareFaces(thisPlay)) {
//       matchedCards.push(thisPlay[0][1], thisPlay[1][1]);
//       thisPlay = [];
//     }
//     else {
//       setTimeout(function(){
//         $(`#${thisPlay[0][1]}`).addClass('back');
//         $(`#${thisPlay[1][1]}`).addClass('back');
//         thisPlay = [];
//       }, 1500)
//     }
//   }
// }
