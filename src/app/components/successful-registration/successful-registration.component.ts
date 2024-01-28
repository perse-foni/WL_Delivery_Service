import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-successful-registration',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './successful-registration.component.html',
  styleUrl: './successful-registration.component.css',
})
export class SuccessfulRegistrationComponent {}
