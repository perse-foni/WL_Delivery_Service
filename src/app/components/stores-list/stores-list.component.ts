import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from '../store/store.component';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-stores-list',
  standalone: true,
  imports: [CommonModule, StoreComponent],
  templateUrl: './stores-list.component.html',
  styleUrl: './stores-list.component.css'
})
export class StoresListComponent {

  storesList: any;
  service = inject(DataService)

  ngOnInit() {
    this.service.getData().subscribe({
      next: response =>this.storesList = response
    })
  }
}