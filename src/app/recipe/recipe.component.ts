import { Component, OnInit } from '@angular/core';
import { Info } from '../booking/booking.model';
import { FoodInfo } from '../menu/info.module';
//import { ActivatedRoute } from '@angular/router';
import { recipeInfo } from './recipe.module';
import { RecipeserviceService } from './recipeservice.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
 
  export class RecipeComponent {
    recipeData:recipeInfo[]=[] 
  
     info:any;

     recipe:any;

      inptData: any;
      

    constructor(private recipeserv:RecipeserviceService){
      this.recipeData=this.recipeserv.getRecipe()
    }

   

   
     showmodal:boolean=false

     index:any=undefined
     
    test(recipe:any){
      
        this.index  =  recipe;

        this.showmodal = true;
  }
      

    exit(){
      this.showmodal=false;
     }
     onSearchClick(){
        
     }
   
       
    }