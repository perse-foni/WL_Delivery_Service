import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Category } from '../../models/category';
import { CategoryDisplayComponent } from '../category-display/category-display.component';
import { Store } from '../../models/store';
import { StoresService } from '../../services/stores.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterLink, CategoryDisplayComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  @Input() category: Category = {
    id: 0,
    category: '',
    avatar : ''
  }

  service = inject(StoresService)
  stores: Store[] = [];
  
  onSelectCategory(category: string) {
    this.service.getStoresByCategory(category).subscribe({
      next: (stores: any) => {
        console.log(stores); 
      },
    });
  }

}