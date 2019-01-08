import $ from 'jquery';
import { Memory } from './Memory';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  var memory = new Memory();
  var deck = memory.deck();
  var cardFace = '';
  var cardId;
  var matchedCards = [];
  var thisPlay = [];

  for(var i = 0; i < deck.length; i++) {
    $('#memoryDeck').append(`<div class="${deck[i]} card back" id="${i}"></div>`);
  }

  $('.card').click(function() {
    $(this).removeClass('back');
    cardFace = $(this).attr("class");
    cardId = $(this).attr("id");

    if(!matchedCards.includes(cardId) && (thisPlay.length === 0 || cardId != thisPlay[0][1])) {
      thisPlay.push([cardFace, cardId]);
    }

    if(thisPlay.length === 2) {
      if(memory.compareFaces(thisPlay)) {
        matchedCards.push(thisPlay[0][1], thisPlay[1][1]);
        thisPlay = [];
      }
      else {
        setTimeout(function(){
          $(`#${thisPlay[0][1]}`).addClass('back');
          $(`#${thisPlay[1][1]}`).addClass('back');
          thisPlay = [];
        }, 300)
      }
    }
    if(matchedCards.length === deck.length) {
      $('#memoryDeck').html("You Win!!!");
    }
    $('#count').text(memory.turnCount);
  })

});
