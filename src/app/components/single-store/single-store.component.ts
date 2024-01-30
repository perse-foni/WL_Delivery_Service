import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresService } from '../../services/stores.service';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../../services/cart.service';
import { NoProductsComponent } from '../no-products/no-products.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-single-store',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent,
    CartComponent,
    NoProductsComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './single-store.component.html',
  styleUrl: './single-store.component.css',
})
export class SingleStoreComponent {
  id: any;
  service = inject(StoresService);
  cartService = inject(CartService);
  store: any = {};
  searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.searchForm = new FormGroup({
      searchValue: new FormControl(''),
    });
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    this.cartService.clearCart();

    this.service.getStores().subscribe({
      next: (stores) => {
          this.store = stores.find(
            (arrayItem) => arrayItem.id.toString() === this.id
          );
      },
    });
  }

  getProductsByName() {
    console.log('Search form Values:', this.searchForm.value.searchValue);
    let searchValue = this.searchForm.value.searchValue;
    this.store.products = this.store.products.filter((product: any) =>
      product.name.toLowerCase().startsWith(searchValue.toLowerCase())
    );
  }
}
