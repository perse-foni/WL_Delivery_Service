import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';
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
  service = inject(CategoryService)

  ngOnInit() {
    this.service.getCategory().subscribe({
      next: response => this.categoriesList = response
    })
  }
}