import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/model/user-model';

@Component({
  selector: 'fin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  userAuth: string = "";

  array: User;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
  }

  guestAuth(username: string, password: string) {

    this.userService.getUserAuth(username, password).subscribe(
      result => {
        if (result) {
          this.router.navigateByUrl('rottamenu')
        } else {
          console.log("Le crendiaziali non corrispondono a nessun utente registrato");
        }
      }, error => {
        console.log(error);
      }
    )

  }
}
