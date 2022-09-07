import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hex="RGB(";
  end=")";
  red=0;
  green=0;
  blue=0;
  color="RGB(0,0,0)";
  bool=false;
  second=1000;
  check()  // checking for valid hex values
  { 
    
   this.color=this.hex+this.red+","+this.green+","+this.blue+this.end;
   
   
    if(this.color.length>=17)
    {
      alert("enter 6 digit of hex value excluding # ");
    }
  }
  
    
    
  
  
}
