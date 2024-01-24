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
  styleUrl: './categories-list.component.css',
})
export class CategoriesListComponent {
  currentIndex: number = 0;

  constructor(private service: CategoryService) {};
  categoriesList: any = [];
  skeletons: number[] = Array(6);

  ngOnInit() {
    this.service.getCategory().subscribe({
      next: (data) => {
        setTimeout(() => {
          console.log(data);
          this.categoriesList = data;
        }, 1000);
      },
    });
  }

  moveCarousel(direction: number) {
    const newIndex = this.currentIndex + direction;
    if (newIndex >= 0 && newIndex < this.categoriesList.length) {
      this.currentIndex = newIndex;
    }
  }
}
