import { ShoppingListService } from './../shopping-list.service';
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  edditedItemIndex: number;
  edditedItem: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEdditing
      .subscribe(
        (index: number) => {
          this.edditedItemIndex = index;
          this.editMode = true;
          this.edditedItem = this.slService.getIngredient(index);
          this.slForm.setValue({
            name: this.edditedItem.name,
            amount: this.edditedItem.amount
          });
        }
      );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.slService.addIngredient(newIngredient);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
