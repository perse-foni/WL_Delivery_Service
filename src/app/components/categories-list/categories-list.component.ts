import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/store.service';
import { CategoryComponent } from '../category/category.component';


@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [CommonModule, CategoryComponent],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.css'
})
export class CategoriesListComponent {
 
  categoriesList: any;
  service = inject(DataService)

  ngOnInit() {
    this.service.getStore().subscribe({
      next: response => this.categoriesList = response
    })
  }

}
