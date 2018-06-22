import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is test', 'https://cookinguniverse.tv/wp-content/uploads/2012/11/Sarma-with-potatos.jpg'),
    new Recipe('A test recipe2', 'This is test2', 'https://cookinguniverse.tv/wp-content/uploads/2012/11/Sarma-with-potatos.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
