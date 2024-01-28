import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from '../store/store.component';
import { StoresService } from '../../services/stores.service';
import { Store } from '../../models/store';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-stores-list',
  standalone: true,
  imports: [CommonModule, StoreComponent, NgxSkeletonLoaderModule],
  templateUrl: './stores-list.component.html',
  styleUrl: './stores-list.component.css',
})
export class StoresListComponent {
  
  service = inject(StoresService);

  storeList: Store[] = [];
  skeletons: number[] = Array(8);
  
  ngOnInit() {
    this.service.getStores().subscribe({
      next: (data) => {
        setTimeout(() => {
          console.log(data);
          this.storeList = data;
        }, 1000);
      },
    });
  }
}
