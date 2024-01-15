import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from '../landing-page/login-form/login-form.component';

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RegistrationFormComponent],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent {

}
