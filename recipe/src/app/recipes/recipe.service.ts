import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a recipe test', 'https://3.bp.blogspot.com/-l5_isU_8wNw/WZMvUwdAfQI/AAAAAAAAD0Y/FWUjJhmZUnsbh1hHbHpQWfspPMfcjTC_ACLcBGAs/s640/1.JPG'),
    new Recipe('Lasagna', 'Mammas favourite', 'https://s23209.pcdn.co/wp-content/uploads/2016/03/Easiest-Lasagna-EverIMG_0217.jpg'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}
