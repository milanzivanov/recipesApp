import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is test', 'https://cookinguniverse.tv/wp-content/uploads/2012/11/Sarma-with-potatos.jpg'),
    new Recipe('A test recipe2', 'This is test2', 'https://cookinguniverse.tv/wp-content/uploads/2012/11/Sarma-with-potatos.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
