import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';

@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) {
  }

  storeRecipes() {
    // token
    const token = this.authService.getToken();
    return this.http
      .put('https://ng-recipe-book-ac1ff.firebaseio.com/recipes.json?auth=' +
        token, this.recipeService.getRecipes(), {
          observe: 'events'
        });
  }

  getRecipes() {
    // token
    const token = this.authService.getToken();

    // casting
    this.http.get<Recipe[]>('https://ng-recipe-book-ac1ff.firebaseio.com/recipes.json?auth=' + token)
    // this.http.get('https://ng-recipe-book-ac1ff.firebaseio.com/recipes.json?auth=' + token, {
    //   // defoult we do not need to set it
    //   observe: 'response',
    //   responseType: 'json'
    // })
    // another way
    // this.http.get>('https://ng-recipe-book-ac1ff.firebaseio.com/recipes.json?auth=' + token)
      // .pipe(map((recipes: Recipes[]) => {
      .pipe(map((recipes) => {
        console.log(recipes);

        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
        // return[];
      }
      ))
      .subscribe(
        (recipes) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
