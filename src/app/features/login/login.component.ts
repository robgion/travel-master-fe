import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string= "";

  constructor() { }

  ngOnInit(): void {
  }

  guestAuth(username:string, password:string){
    if(username==="Diego" && password==="Diego"){
      //punta alla rotta del compoennte selezione mezzo / visualizza prenotazoni
      console.log("entrato");
      
    }else{
      console.log("credenziali sbagliate");
      
    }

  }
}
