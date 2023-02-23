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
}
let x= new Connect();
x.blockStyle(0,0);