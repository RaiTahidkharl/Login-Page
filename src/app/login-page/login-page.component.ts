import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { flushMicrotasks } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterOutlet,RouterLink,RouterModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
    ispasswordisvisible:boolean=false;
 
    password:string='';

    TogglePasswordvisiblity(){
      this.ispasswordisvisible=!this.ispasswordisvisible;
      console.log('toggle')
    }
}
