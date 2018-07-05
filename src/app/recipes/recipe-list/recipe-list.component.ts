import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipeServices: RecipeService,
    private router: Router,
  private route: ActivatedRoute) { }

  ngOnInit() {

    this.recipeServices.recipesChanged
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );

    this.recipes = this.recipeServices.getRecipes();
  }

  onNewRecipe() {
    // relative path
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
