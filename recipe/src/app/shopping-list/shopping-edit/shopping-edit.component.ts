import { utf8Encode } from '@angular/compiler/src/util';
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  
  // ingredientAdded = new EventEmitter<{name: string, amount: number}>(); // you can explicit show the object or
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();     // just pass the model name Ingredients output the ingediaents to parent whre array is

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    // this.ingredientAdded.emit(newIngredient);
    this.slService.addIngredient(newIngredient);
  }
}
