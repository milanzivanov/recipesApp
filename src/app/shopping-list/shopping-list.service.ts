import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 15)
  ];

  getIngredients() {
    // with slice() method we make copy of the Ingredient[]
    return this.ingredients.slice();
    // return this.ingredients; one solution
  }

  addIngredient(ingredients: Ingredient) {
    this.ingredients.push(ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // one option
    // for (let ingredient of ingredients) {
    //     this.addIngredient(ingredient);
    // }

    //  another option
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
