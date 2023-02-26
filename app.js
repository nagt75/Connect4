let parent=document.querySelector(".connect4Box")
   let rows=parent.children // getting rows as children of connect4Box
   let blocks=[];
   let i;
   let j;
   let currentPlayer="player1";
   let txt;
   let c=[];

   //making array variable c to a 2 dimensional array
   for (let i = 0; i <=5; i++) {
      c[i] = [];
    for (let j = 0; j <=6; j++) {
    c[i][j] = 0;
    }
   }
   const blockStyle=()=>{
    for(j=0;j<=5;j++)
    {
    blocks[j]=rows[j].children// getting circle blocks as children of rows
    for(i=0;i<=6;i++)
    {
      blocks[j][i].style.cssText=
      "height:70px;width:70px; border:solid; blue;border-radius: 50%;background-color:white";// adding styles to blocks
    }
    }
  }
  blockStyle();
  
  const btnClick=()=>{
    txt=document.querySelector(".txt")
    txt.innerHTML=currentPlayer
    blocks[0]=rows[0].children
    blocks[0][0].addEventListener("click",function(){player(0)})
    blocks[0][1].addEventListener("click",function(){player(1)})
    blocks[0][2].addEventListener("click",function(){player(2)})
    blocks[0][3].addEventListener("click",function(){player(3)})
    blocks[0][4].addEventListener("click",function(){player(4)})
    blocks[0][5].addEventListener("click",function(){player(5)})
    blocks[0][6].addEventListener("click",function(){player(6)})
    }
    const player=(p)=>{
        if(currentPlayer=="player1"){
            player1(p)
            }
            else if(currentPlayer=="player2"){
             player2(p)
            }

    }
    const player1=(i)=>{
      for (j=5;j>=0;j--){
              if(blocks[j][i].style.backgroundColor==="white"){
                blocks[j][i].style.backgroundColor="red"
                c[j][i]=10
                currentPlayer="player2"
                txt=document.querySelector(".txt")
                txt.innerHTML=currentPlayer
                break;
               }
        }
        checkWinner();  
  }

  const player2=(i)=>{
        
   for( j=5;j>=0;j--) {
      if(blocks[j][i].style.backgroundColor==="white"){
        blocks[j][i].style.backgroundColor="yellow"
        c[j][i]=20
        currentPlayer="player1"
        txt=document.querySelector(".txt")
        txt.innerHTML=currentPlayer
        break;
       }
     } 
    
    checkWinner();       
}

const startGame=()=>{
  btnClick();

}
const reset=()=>
{
  location.reload();
}
const checkWinner=()=>
     {//row matching
    for (let j=5;j>=0;j--)
      {
        for(i=0;i<=6;i++)
         {
         if(c[j][i]==10 || c[j][i]==20 )
         {
         if(c[j][i]===c[j][i+1] && c[j][i]===c[j][i+2] && c[j][i]===c[j][i+3])
         {
          result();
          }
        }
      }
    }
  //column matching
        for(i=0;i<=6;i++)
        {
          for (let j=5;j>=0;j--)
          {

            if(c[j][i]==10 || c[j][i]==20 )
            {
            if(c[j][i]===c[j-1][i] && c[j][i]===c[j-2][i] && c[j][i]===c[j-3][i])
          {
           result();
           }
          }
          }
        }
        //diagnol mathing from bottom left to up direction
        for(i=0;i<=6;i++)
        {
          for (let j=5;j>=0;j--)
          {
            if(c[j][i]==10 || c[j][i]==20 )
            {
              if(c[j][i]===c[j-1][i+1] && c[j][i]===c[j-2][i+2] && c[j][i]===c[j-3][i+3])
              {
                result(); 
              }
            }
          } 
        }
        ////diagnol mathing from bottom right to up direction
        for(i=6;i>=0;i--)
        {
          for (let j=5;j>=0;j--)
          {
            if(c[j][i]==10 || c[j][i]==20 )
            {
              if(c[j][i]===c[j-1][i-1] && c[j][i]===c[j-2][i-2] && c[j][i]===c[j-3][i-3])
              {
                result(); 
              }
            }
          } 
        }
        // if(counter===42)
        // {
        //   document.querySelector(".winner").innerHTML="Tie"
        // }
    }    
    
    const result=()=>{
      
      if(currentPlayer=="player1"){
        document.querySelector(".winner").innerHTML="Player2 Wins"
        disable();
      }
      else if(currentPlayer=="player2"){
        document.querySelector(".winner").innerHTML="Player1 Wins"
         disable();
       }
    }
    //to make buttons disable if one of the players win the game
    const disable=()=>{
      blocks[0]=rows[0].children
    blocks[0][0].addEventListener("click",function(){gameOver()})
    blocks[0][1].addEventListener("click",function(){gameOver()})
    blocks[0][2].addEventListener("click",function(){gameOver()})
    blocks[0][3].addEventListener("click",function(){gameOver()})
    blocks[0][4].addEventListener("click",function(){gameOver()})
    blocks[0][5].addEventListener("click",function(){gameOver()})
    blocks[0][6].addEventListener("click",function(){gameOver()})
    }

    //removes all the rows and columns and displays Gameover message"
   const gameOver=()=>
   {
   let connect4 = document.querySelector(".connect4Box")
    while (connect4.hasChildNodes()) {
     connect4.removeChild(connect4.firstChild);
    }
    let txt= document.createElement("h1")
    txt.classList.add("txt2")
    txt.innerHTML="Game Over"
    connect4.appendChild(txt)
  }
    
      
  
   