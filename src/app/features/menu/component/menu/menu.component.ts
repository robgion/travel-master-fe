import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fin-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   p="";
  onClick(p){
    if(p==='prenota'){
      console.log(p)
    }else{
      console.log(p)
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
