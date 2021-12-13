import { Component, ElementRef, EventEmitter, OnInit, ViewChild, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  // ingredientAdded = new EventEmitter<{name: string, amount: number}>(); // you can explicit show the object or
  @Output() ingredientAdded = new EventEmitter<Ingredient>();     // just pass the model name Ingredients

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient)
  }
}
