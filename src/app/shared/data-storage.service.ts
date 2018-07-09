import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService) {
  }

  storeRecipes() {
    return this.http
      .put('https://ng-recipe-book-ac1ff.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    // casting
    this.http.get<Recipe[]>('https://ng-recipe-book-ac1ff.firebaseio.com/recipes.json')
      .pipe(map((recipes) => {
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
      ))
      .subscribe(
        (recipes) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
