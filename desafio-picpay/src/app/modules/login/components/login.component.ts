import { Component, OnInit } from '@angular/core';
import  RequestLogin  from 'src/app/shared/models/RequestLogin';
import { LoginService } from 'src/app/shared/services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit{

  public requestLogin!: RequestLogin;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  showPassword: boolean = false;

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  public clickLogin(): void {
    this.loginService.clickLogin(this.requestLogin).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error(error);
      }
    );
  }


}
