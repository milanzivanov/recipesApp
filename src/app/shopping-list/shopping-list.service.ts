import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEdditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 15)
  ];

  getIngredients() {
    // with slice() method we make copy of the Ingredient[]
    return this.ingredients.slice();
    // return this.ingredients; one solution
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredients: Ingredient) {
    this.ingredients.push(ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // one option
    // for (let ingredient of ingredients) {
    //     this.addIngredient(ingredient);
    // }

    //  another option
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
