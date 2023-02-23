class Connect{
    constructor(i,j){
      this.parent=document.querySelector(".connect4Box")
      this.rows=this.parent.children // getting rows as children of connect4Box
      this.blocks=[];
      this.j
      this.i
      this.k=this.rows.length-1;
      this.r=0
      this.y=0
      this.currentPlayer="player1";
      this.txt=document.querySelector(".txt");
    }

// adding css style for the blocks
blockStyle(i,j){
    for( this.i=i;this.i<this.rows.length;this.i++)
    {
     this.blocks=this.rows[this.i].children // getting circle blocks as children of rows
    for(this.j=j;this.j<this.blocks.length;this.j++){
        this.blocks[this.j].style.cssText=
        "height:70px;width:70px; border:solid; blue;border-radius: 50%;background-color:white";// adding styles to blocks
       }
    }
  }
  player1(i){
    this.k=5
    this.i=i;
    while (this.k >= 0) {
      this.blocks=this.rows[this.k].children
      if(this.blocks[this.i].style.backgroundColor=="white"){
        this.blocks[this.i].style.backgroundColor="red"
        this.currentPlayer="player2"
        this.txt.innerHTML=this.currentPlayer
        this.r++
        break;
       }
      this.k--
        } 
        }
        player2(i){
            this.i=i;
            this.k=5
            while (this.k >= 0) {
            this.blocks=this.rows[this.k].children
            if(this.blocks[this.i].style.backgroundColor=="white"){
              this.blocks[this.i].style.backgroundColor="yellow"
              this.currentPlayer="player1"
              this.txt.innerHTML=this.currentPlayer
              this.y++
              break;
            }
           this.k--
              }
          }
     player(p)  //calling player1 and player2 functions
      {
       if(this.currentPlayer=="player1"){
       this.player1(p)
       }
       else if(this.currentPlayer=="player2"){
         this.player2(p)
       }
      }
      btnClick(){
      
        this.txt.innerHTML=this.currentPlayer
        
        this.blocks=x.rows[0].children
        this.blocks[0].addEventListener("click",()=>{this.player(0)})
        this.blocks[1].addEventListener("click",()=>{this.player(1)})
        this.blocks[2].addEventListener("click",()=>{this.player(2)})
        this.blocks[3].addEventListener("click",()=>{this.player(3)})
        this.blocks[4].addEventListener("click",()=>{this.player(4)})
        this.blocks[5].addEventListener("click",()=>{this.player(5)})
        this.blocks[6].addEventListener("click",()=>{this.player(6)})
        }



}
let x= new Connect();
x.blockStyle(0,0);
const startGame=()=>{ 
    x.btnClick()
}