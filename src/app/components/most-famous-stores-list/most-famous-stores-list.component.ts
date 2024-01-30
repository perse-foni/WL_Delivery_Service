import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MostFamousStoreComponent } from '../most-famous-store/most-famous-store.component';
import { FamousStoresService } from '../../services/famous-stores.service';
import { MostFamous } from '../../models/most-famous';
import { CarouselModule } from 'primeng/carousel';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-most-famous-stores-list',
  standalone: true,
  imports: [CommonModule,RouterModule, MostFamousStoreComponent, CarouselModule, NgxSkeletonLoaderModule],
  templateUrl: './most-famous-stores-list.component.html',
  styleUrl: './most-famous-stores-list.component.css',
})
export class MostFamousStoresListComponent {
  mostFamousStores: any;
  service = inject(FamousStoresService);
  mostFamousStore: MostFamous[] = [];

  skeletons: number[] = Array(4)

  ngOnInit() {
    this.service.getMostFamous().subscribe({
      next: (data) => {
        setTimeout( () => {
          console.log(data);
          this.mostFamousStores = data;
        }, 1000);
      },
    });
  }
}