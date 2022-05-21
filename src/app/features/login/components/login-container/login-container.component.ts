import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/model/user-model';

@Component({
  selector: 'fin-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent implements OnInit {

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
          this.router.navigateByUrl('menu')
        } else {
          console.log("Le crendiaziali non corrispondono a nessun utente registrato");
        }
      }, error => {
        console.log(error);
      }
    )

  }
}
