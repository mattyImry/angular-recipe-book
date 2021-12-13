import { 
  Component, 
  OnInit, 
  Input, 
  Output,
  EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>() // use void when no informationa are selected

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipeSelected.emit(); //also here () nothing as no info as above are selected
  }
}
