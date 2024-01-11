import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from '../store/store.component';
import { StoreService } from '../../services/store.service';
import { Store } from '../interfaces/store';

@Component({
  selector: 'app-stores-list',
  standalone: true,
  imports: [CommonModule, StoreComponent],
  templateUrl: './stores-list.component.html',
  styleUrl: './stores-list.component.css'
})
export class StoresListComponent {

  storesList: any;
  service = inject(StoreService)
  storeList: Store [] = []

  ngOnInit() {
    this.service.getStore().subscribe({
      next: data => {
        console.log(data);
        this.storeList = data;
      }
    })
  }
}