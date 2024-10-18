import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterOutlet,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  ispasswordisvisible:boolean=false;
 
  password:string='';

  TogglePasswordvisiblity(){
    this.ispasswordisvisible=!this.ispasswordisvisible;
    console.log('toggle')
  }
}
