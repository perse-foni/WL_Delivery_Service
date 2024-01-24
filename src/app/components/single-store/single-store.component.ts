import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresService } from '../../services/stores.service';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-single-store',
  standalone: true,
  imports: [CommonModule, ProductComponent, CartComponent],
  templateUrl: './single-store.component.html',
  styleUrl: './single-store.component.css',
})
export class SingleStoreComponent {
  id: any;
  service = inject(StoresService);
  store: any = {};

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    this.service.getStores().subscribe({
      next: (stores) => {
        console.log(stores);
        this.store = stores.find(
          (arrayItem) => arrayItem.id.toString() === this.id
        );
      },
    });
  }
}
