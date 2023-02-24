let parent=document.querySelector(".connect4Box")
   let rows=parent.children // getting rows as children of connect4Box
   let blocks=[];
   let i;
   let j;
   let currentPlayer="player1";
   let txt;
   const blockStyle=()=>{
    
    for(i=0;i<=5;i++)
    {
    blocks[i]=rows[i].children// getting circle blocks as children of rows
    for(k=0;k<=6;k++)
    {
    blocks[i][k].style.cssText=
      "height:70px;width:70px; border:solid; blue;border-radius: 50%;background-color:white";// adding styles to blocks
     blocks[i][k].value=0;
     
    }
    }
  }
  blockStyle();
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
        j=5
        while (j >= 0) {
            blocks=rows[j].children
              if(blocks[i].style.backgroundColor=="white"){
                blocks[i].style.backgroundColor="red"
                blocks[i].value=1 //setting value of all the red buttons to 1
                currentPlayer="player2"
                txt=document.querySelector(".txt")
                txt.innerHTML=currentPlayer
                break;
               }
              j--
            } 
            checkWinner();       
    }
    const player2=(i)=>{
        j=5
        while (j >= 0) {
            blocks=rows[j].children
              if(blocks[i].style.backgroundColor=="white"){
                blocks[i].style.backgroundColor="yellow"
                blocks[i].value=2 //setting value of all the red buttons to 2
                currentPlayer="player1"
                txt=document.querySelector(".txt")
                txt.innerHTML=currentPlayer
                break;
               }
              j--
            } 
            checkWinner();     
    }
    
    const startGame=()=>{
        btnClick();
     
     }
     const checkWinner=()=>
     {
      
      for (let j=5;j>=0;j++)
      {
      blocks=rows[j].children
      for (i=0;i<=6;i++)
        {
        // if(parseInt(blocks[i].value)===parseInt(blocks[i+1].value))
        // {
          document.querySelector(".rednames").append(blocks[i].value)
          //  }
        
        }
      }
     
    }