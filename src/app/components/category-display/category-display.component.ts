import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '../../models/store';
import { StoresService } from '../../services/stores.service';
import { ActivatedRoute } from '@angular/router';
import { StoreComponent } from "../store/store.component";
import { NoStoresComponent } from '../no-stores/no-stores.component';
@Component({
    selector: 'app-category-display',
    standalone: true,
    templateUrl: './category-display.component.html',
    styleUrl: './category-display.component.css',
    imports: [CommonModule, StoreComponent, NoStoresComponent]
})
export class CategoryDisplayComponent {
  id: any;
  service = inject(StoresService)
  stores: Store[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.service.getStoresByCategory(this.id).subscribe({
      next: (stores) => {
        console.log(stores);
        this.stores = stores;
      },
    });
  }
}
