var userPoint = 0;
var aiPoint = 0;

function getAISelection() {
  var number = Math.floor((Math.random() * (3)));
  var array = ['rock','paper','scissors'];
   return array[number];
}


var aiValue = getAISelection();

function pickWinner(userValue,aiValue){
   if (userValue === aiValue){
      console.log('draw');
      return 'draw';
    } else if (userValue =='rock' && aiValue =='paper'){
      console.log('ai');
      aiPoint ++;
    }else if (userValue =='rock' && aiValue =='scissors'){
      console.log('user'); 
      userPoint ++;
      return 'user';
    }else if (userValue =='scissors' && aiValue =='paper'){
      console.log('user'); 
      userPoint ++;
      return 'user';
    }else if (userValue =='scissors' && aiValue =='rock'){
      console.log('ai');
      aiPoint ++;
    }else if (userValue =='paper' && aiValue =='rock'){
      console.log('user'); 
      userPoint  ++;
      return 'user';
    }else if (userValue =='paper' && aiValue =='scissors'){
      console.log('ai');
      aiPoint ++;
    }
}

// This function sets the scoreboard with the correct points
function setScore() {
    $('#userPoint').text(userPoint);
    $('#aiPoint').text(aiPoint);
}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won! You selected '+ userValue + ' and the computer selected '+aiValue+'. Click a box to play again');
        $('#userPoint').text(userPoint);
        $('#aiPoint').text(aiPoint);
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! You selected '+ userValue+ ' and the computer selected '+aiValue+'. Click a box to play again');
        $('#userPoint').text(userPoint);
        $('#aiPoint').text(aiPoint);
    } else {
        $('#message').delay(50).text('You have lost! You selected '+userValue+ ' and the computer selected '+aiValue+'. Click a box to play again');
        $('#userPoint').text(userPoint);
        $('#aiPoint').text(aiPoint);
    }
}

// This function runs on page load
$(document).ready(function(){
  $( '.token' ).click(function (evt) {
  evaluate(evt);
  
});});


