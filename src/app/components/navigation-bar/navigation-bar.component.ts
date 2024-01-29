import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../../services/cart.service';
import {FormControl, FormGroup, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { StoresService } from '../../services/stores.service';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, CartComponent, ReactiveFormsModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
})
export class NavigationBarComponent {
  service = inject(CartService);
  serviceStores = inject(StoresService);
  @Input() searchBarText: any;
  searchForm!: FormGroup;

  getTotalQuantity() {
    return Math.max(
      this.service.getItems().reduce((acc, item) => acc + item.quantity, 0),
      0
    );
  }

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = new FormGroup({
      searchValue: new FormControl(''),
    });
  }

  onSearch() {
    console.log('Search Form Values:', this.searchForm.value.searchValue);
    this.serviceStores.getStores().subscribe((stores) => {
      let searchValue = this.searchForm.value.searchValue;
      let foundStores = stores.filter((store) =>
        store.name.toLowerCase().includes(searchValue)
      );
      console.log(foundStores);
    });
  }
}
