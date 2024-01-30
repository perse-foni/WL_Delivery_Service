import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { EmptyCartComponent } from './components/empty-cart/empty-cart.component';
import { SuccessfulRegistrationComponent } from './components/successful-registration/successful-registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NgxScrollTopModule,
    NavigationBarComponent,
    FooterComponent,
    CartComponent,
    EmptyCartComponent,
    SuccessfulRegistrationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'WL_Delivery_Service';
}
