import { Ingredient } from './../shared/ingredient.model';
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  // long way
  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.imagePath = imagePath;
    this.description = desc;
    this.ingredients = ingredients;
  }

  // short way
  // constructor(private name: string,
  //             private description: string,
  //             private imagePath: string,
                //  private ingredient: Ingredient) {}
}

