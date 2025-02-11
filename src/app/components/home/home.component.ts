import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Icategory } from '../../interfaces/icategory';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly categoryService = inject(CategoryService);
  meals: Icategory[] = [];
  categoriesName: string[] = [
    'Beef',
    'Breakfast',
    'Chicken',
    'Dessert',
    'Goat',
    'Lamb',
    'Miscellaneous',
    'Pasta',
    'Pork',
    'Seafood',
    'Side',
    'Starter',
    'Vegan',
    'Vegetarian',
  ];

  getCategory(meal: any): void {
    this.categoryService.getCategory(meal).subscribe({
      next: (res) => {
        console.log(res.meals);
        this.meals = res.meals;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getMealData() {
    this.categoryService.getMeal().subscribe({
      next: (res) => {
        console.log(res.meals);
        this.meals = res.meals;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.getMealData();
  }
}
