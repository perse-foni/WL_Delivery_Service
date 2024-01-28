import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../services/profile.service';


@Component({
  selector: 'app-account-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-page.component.html',
  styleUrl: './account-page.component.css'
})
export class AccountPageComponent {
  
  user: any = {};
  service = inject(ProfileService)

  ngOnInit() {

    this.service.getUserProfile().subscribe({
      next: response => this.user = response

    })
  }
}
