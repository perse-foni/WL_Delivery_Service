import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { CategoryComponent } from '../category/category.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [CommonModule, CategoryComponent, NgxSkeletonLoaderModule],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.css'
})
export class CategoriesListComponent {
 
  service = inject(CategoryService);
  categoriesList: any = [];
  skeletons: number[] = Array(5);

  ngOnInit() {
    this.service.getCategory().subscribe({
      next: data => {
        setTimeout(() => {
          console.log(data);
          this.categoriesList = data;
        }, 1000);
      }
    })
  }}