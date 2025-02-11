import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  getMeal(): Observable<any> {
    return this.http.get(
      'https://www.themealdb.com/api/json/v1/1/search.php?s='
    );
  }
  getCategory(meal: any): Observable<any> {
    return this.http.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`
    );
  }

  getSpecificMeal(id: any): Observable<any> {
    return this.http.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  }
}
