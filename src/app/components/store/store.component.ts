import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {
  @Input() store: any;
}