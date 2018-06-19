import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is test', 'https://cookinguniverse.tv/wp-content/uploads/2012/11/Sarma-with-potatos.jpg'),
    new Recipe('A test recipe2', 'This is test2', 'https://cookinguniverse.tv/wp-content/uploads/2012/11/Sarma-with-potatos.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
