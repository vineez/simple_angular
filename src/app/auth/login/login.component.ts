import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  loginForm:any = {
    "username":"",
    "password":""
  }

  ngOnInit() {
  }

  login(){
    if(this.loginForm.username == "vinee" && this.loginForm.password == "123456"){
      localStorage.setItem("USERNAME", this.loginForm.username);
      this.router.navigate(['/auth/home']);
    }
    else{
      alert("Wrong Password!")
    }
  }

}
