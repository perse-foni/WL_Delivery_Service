import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {

}
