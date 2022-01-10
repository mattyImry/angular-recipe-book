import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Spetzel',
      'Local dish from Trentino', 
      'https://www.savorynothings.com/wp-content/uploads/2019/08/jaegerspaetzle-image-2.jpg',
      [
        new Ingredient('Spinach', 10),
        new Ingredient('Pancetta', 15)
      ]),
    new Recipe(
      'Lasagna', 
      'Mammas favourite', 
      'https://s23209.pcdn.co/wp-content/uploads/2016/03/Easiest-Lasagna-EverIMG_0217.jpg',
      [
        new Ingredient('Sauce', 5),
        new Ingredient('Pasta', 10)
      ]),
  ];
  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
