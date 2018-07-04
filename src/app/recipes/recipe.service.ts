import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {

  // recipeSelected = new EventEmitter<Recipe>();
  // better way of comunication between components

  private recipes: Recipe[] = [
    new Recipe(
      'Sarma',
      'This is test',
      'https://cookinguniverse.tv/wp-content/uploads/2012/11/Sarma-with-potatos.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Peceni krumpli', 203)
      ]),
    new Recipe(
      'Burek',
      'This is test2',
      'http://www.balkanfoodrecipes.com/wp-content/uploads/2015/10/sirnica1.jpg'
      ,
      [
        new Ingredient('Sarma', 5),
        new Ingredient('Musaka', 3)
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
