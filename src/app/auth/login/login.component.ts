import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

// import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,  
    ButtonModule,
    InputTextModule,
    PasswordModule ,
    CardModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private authService:AuthService,private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {

    console.log("onSubmit function is callled" );
    console.log(this.loginForm);
    
    if (this.loginForm.valid) {

      this.router.navigate(['/dashboard'])
      
      this.authService.login(this.loginForm.value).subscribe( result => {
        console.log("auth Details",result);
        
        this.router.navigate(['/dashboard'])
        }
      )
      
    } else {
      console.log('Form is invalid');
    }
  }
  onForgotPassword() {
    console.log('Forgot Password Clicked');
  }  
}
