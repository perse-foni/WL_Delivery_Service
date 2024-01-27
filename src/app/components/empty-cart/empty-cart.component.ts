import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-empty-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empty-cart.component.html',
  styleUrl: './empty-cart.component.css',
})
export class EmptyCartComponent {
  user: any;
  service = inject(ProfileService);

  ngOnInit() {
    this.service.getUserProfile().subscribe({
      next: (response) => (this.user = response),
    });
  }
}
