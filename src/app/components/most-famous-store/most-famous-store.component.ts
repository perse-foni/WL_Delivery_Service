import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MostFamous } from '../../models/most-famous';

@Component({
  selector: 'app-most-famous-store',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './most-famous-store.component.html',
  styleUrl: './most-famous-store.component.css'
})
export class MostFamousStoreComponent {

  @Input() famousStore: MostFamous = {
    id: 0,
    name: '',
    category: '',
    address: '',
    description: '',
    avatar: '',
    rating: 0
  };
}
