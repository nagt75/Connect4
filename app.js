class Connect{
    constructor(i,j){
      this.parent=document.querySelector(".connect4Box")
      this.rows=this.parent.children // getting rows as children of connect4Box
      this.blocks=[];
      this.j
      this.i
    }


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
    this.i=i;
    
    while(this.k>=0)
    {
        this.blocks=this.rows[this.k].children
      if(this.blocks[this.i].style.backgroundColor=="white"){
        this.blocks[this.i].style.backgroundColor="red"
        this.r++
       this.txt=document.querySelector(".txt")
        this.txt.innerHTML="player2"
  
        this.btnClick("player2")
        
        break;
      }
      else if(this.blocks[this.i].style.backgroundColor=="red" || this.blocks[this.i].style.backgroundColor=="yellow"){
        this.k--
        this.blocks=this.rows[this.k].children
        this.blocks[this.i].style.backgroundColor="red"
        this.txt=document.querySelector(".txt")
        this.txt.innerHTML="player2"
        this.r++
        this.btnClick("player2")
     
        break;
       }
         } 
    }    
}
let x= new Connect();
x.blockStyle(0,0);