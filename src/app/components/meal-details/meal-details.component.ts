import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Icategory } from '../../interfaces/icategory';

@Component({
  selector: 'app-meal-details',
  imports: [],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.scss',
})
export class MealDetailsComponent {
  id: any;
  mealDetails: Icategory[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private Meal: CategoryService
  ) {
    activatedRoute.params.subscribe((res) => {
      console.log(res['id']);
      this.id = res['id'];
    });
  }

  getSpecificMeal() {
    this.Meal.getSpecificMeal(this.id).subscribe({
      next: (res) => {
        console.log(res.meals);
        this.mealDetails = res.meals;
        console.log(this.mealDetails);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnInit(): void {
    this.getSpecificMeal();
  }
}
