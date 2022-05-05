import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
      this.router.navigateByUrl('transports')
    }else {
      this.router.navigateByUrl('booking')
      console.log(p)
    }

  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
