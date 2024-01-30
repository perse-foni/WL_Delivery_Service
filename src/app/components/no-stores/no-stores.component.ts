import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-no-stores',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './no-stores.component.html',
  styleUrl: './no-stores.component.css'
})
export class NoStoresComponent {

}
