const computer = 'paper';
console.log(computer);

let me = 'paper';
console.log(me);

 if (me === 'paper'){
   console.log('It\'s a Tie!');
  }
  else if (me === 'scissors'){
      console.log('I Win!');
  }

  else if (me === 'rock') {
        console.log('Computer Wins!');
      }

  else if (me === me || 'scissors' === 'scissors' || computer === computer) {
          console.log('It\'s a Tie!');
    }
