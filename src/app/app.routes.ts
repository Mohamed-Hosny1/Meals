import { Routes } from '@angular/router';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: `mealDetails/:id`,
    component: MealDetailsComponent,
    title: `Meal Details`,
  },
  {
    path: `Home`,
    component: HomeComponent,
    title: `Meals`,
  },
  {
    path: '',
    redirectTo: `Home`,
    pathMatch: `full`,
  },
];
