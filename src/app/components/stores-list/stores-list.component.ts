import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from '../store/store.component';
import { StoresService } from '../../services/stores.service';
import { Store } from '../../models/store';

@Component({
  selector: 'app-stores-list',
  standalone: true,
  imports: [CommonModule, StoreComponent],
  templateUrl: './stores-list.component.html',
  styleUrl: './stores-list.component.css',
})
export class StoresListComponent {
  
  storesList: any;
  service = inject(StoresService);
  storeList: Store[] = [];

  ngOnInit() {
    this.service.getStores().subscribe({
      next: (data) => {
        console.log(data);
        this.storeList = data;
      },
    });
  }
}
