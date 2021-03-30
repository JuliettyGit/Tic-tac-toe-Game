//region CreateCells
/*
for (let i = 0; i < 9; i++)
{
  document.getElementById('table').innerHTML += '<div class ="cell"></div>';
}*/
//endregion

//region Players
document.querySelector('.confirm').onclick = confirmClick;

function confirmClick()
{
  console.log('work');
  let playerX = document.querySelector('.playerX').value;
  let playerO = document.querySelector('.playerO').value;
  console.log(playerX, playerO);
  
  let str = document.querySelector('.out1').textContent;
  let newStr = str.replace(/\*/gi, playerX);
  console.log(newStr);
  document.querySelector('.out1').textContent = newStr;
  
  let str2 = document.querySelector('.out2').textContent;
  let newStr2 = str2.replace(/\*/gi, playerO);
  console.log(newStr2);
  document.querySelector('.out2').textContent = newStr2;
  
  /*document.querySelector('.out1').textContent = playerX + " " + "plays for crosses";
  document.querySelector('.out2').textContent = playerO + " " + "plays for toes";*/
}
//endregion


//region Play
let counter = 0;
playerX = '<img src = "cross.png" alt = cross>';
playerO = '<img src = "zero.png" alt= zero>';
let move = document.querySelector('.move');

document.querySelector('.table').onclick = function (event)
{
  console.log(event);
  if(event.target.className === 'cell' && event.target !== 'img')
  {
    if(counter % 2 === 0)
    {
      move.innerHTML = '0 moves';
      event.target.innerHTML += playerX;
    }
    else
    {
      move.innerHTML = 'X moves';
      event.target.innerHTML += playerO;
    }
    counter++;
    checkWinner();

    if (counter === 9)
    {
      alert('The game ended in a draw.');
    }
  }
}
//endregion


function checkWinner()
{
  let arr = document.getElementsByClassName('cell');
  console.log(arr);

  if((arr[0].innerHTML === '<img src="zero.png" alt="zero">' &&
      arr[1].innerHTML === '<img src="zero.png" alt="zero">' &&
      arr[2].innerHTML === '<img src="zero.png" alt="zero">') ||

      (arr[3].innerHTML === '<img src = "zero.png" alt= zero>'&&
       arr[4].innerHTML === '<img src = "zero.png" alt= zero>' &&
       arr[5].innerHTML === '<img src = "zero.png" alt= zero>') ||

      (arr[6].innerHTML === '<img src = "zero.png" alt= zero>' &&
       arr[7].innerHTML === '<img src = "zero.png" alt= zero>' &&
       arr[8].innerHTML === '<img src = "zero.png" alt= zero>') ||

      (arr[0].innerHTML === '<img src = "zero.png" alt= zero>' &&
       arr[3].innerHTML === '<img src = "zero.png" alt= zero>' &&
       arr[6].innerHTML === '<img src = "zero.png" alt= zero>') ||

      (arr[1].innerHTML === '<img src = "zero.png" alt= zero>' &&
       arr[4].innerHTML === '<img src = "zero.png" alt= zero>' &&
       arr[7].innerHTML === '<img src = "zero.png" alt= zero>') ||

      (arr[2].innerHTML === '<img src = "zero.png" alt= zero>' &&
       arr[5].innerHTML === '<img src = "zero.png" alt= zero>' &&
       arr[8].innerHTML === '<img src = "zero.png" alt= zero>'))
  {
    console.log('damn');
  }

  else if((arr[0].innerHTML === '<img src="cross.png" alt="cross">' &&
      arr[1].innerHTML === '<img src="cross.png" alt="cross">' &&
      arr[2].innerHTML === '<img src="cross.png" alt="cross">') ||

      (arr[3].innerHTML === '<img src="cross.png" alt="cross">'&&
          arr[4].innerHTML === '<img src="cross.png" alt="cross">' &&
          arr[5].innerHTML === '<img src="cross.png" alt="cross">') ||

      (arr[6].innerHTML === '<img src="cross.png" alt="cross">' &&
          arr[7].innerHTML === '<img src="cross.png" alt="cross">' &&
          arr[8].innerHTML === '<img src="cross.png" alt="cross">') ||

      (arr[0].innerHTML === '<img src="cross.png" alt="cross">' &&
          arr[3].innerHTML === '<img src="cross.png" alt="cross">' &&
          arr[6].innerHTML === '<img src="cross.png" alt="cross">') ||

      (arr[1].innerHTML === '<img src="cross.png" alt="cross">' &&
          arr[4].innerHTML === '<img src="cross.png" alt="cross">' &&
          arr[7].innerHTML === '<img src="cross.png" alt="cross">') ||

      (arr[2].innerHTML === '<img src="cross.png" alt="cross">' &&
          arr[5].innerHTML === '<img src="cross.png" alt="cross">' &&
          arr[8].innerHTML === '<img src="cross.png" alt="cross">'))
  {
    alert('Cross win')
  }
}
//region GameLogic


//endregion


//region ReloadButton
document.querySelector('.playAgain').onclick = reloadPage;
function reloadPage()
{
  window.location.reload();
}
//endregion