import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent{
         foodInfo:any
  
         constructor(private router:ActivatedRoute){

          this.foodInfo=this.router.snapshot.queryParams
         }

        





  
}

