import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a recipe test', 'https://3.bp.blogspot.com/-l5_isU_8wNw/WZMvUwdAfQI/AAAAAAAAD0Y/FWUjJhmZUnsbh1hHbHpQWfspPMfcjTC_ACLcBGAs/s640/1.JPG')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
