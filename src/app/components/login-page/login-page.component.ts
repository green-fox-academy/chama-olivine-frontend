import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../services/login-service/login-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {
  usernameInput: string;
  passwordInput: string;
  loginMessage: string;
  userID: number;

  constructor(private loginService: LoginService, public router: Router) {}

  sendLogin() {
    if (this.usernameInput && this.passwordInput) {
      this.loginService.login(this.usernameInput, this.passwordInput).subscribe(
        response => {
          this.userID = response.id;
          this.router.navigate([`/heroes-hall/${response.id}`]);
        },
        error => {
          this.loginMessage = error;
        }
      );
    } else {
      this.loginMessage = "Please add a username and a password!";
    }
  }
  ngOnInit() {}
}
