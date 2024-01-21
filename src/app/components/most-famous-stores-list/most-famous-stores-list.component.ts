import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MostFamousStoreComponent } from '../most-famous-store/most-famous-store.component';
import { FamousStoresService } from '../../services/famous-stores.service';
import { MostFamous } from '../../models/most-famous';

@Component({
  selector: 'app-most-famous-stores-list',
  standalone: true,
  imports: [CommonModule, MostFamousStoreComponent],
  templateUrl: './most-famous-stores-list.component.html',
  styleUrl: './most-famous-stores-list.component.css'
})
export class MostFamousStoresListComponent {
  
  mostFamousStores: any;
  service = inject(FamousStoresService);
  mostFamousStore: MostFamous[] = [];
  

  ngOnInit() {
    this.service.getMostFamous().subscribe({
      next: data => {
        console.log(data);
        this.mostFamousStores = data;
      },
    });
  }
}