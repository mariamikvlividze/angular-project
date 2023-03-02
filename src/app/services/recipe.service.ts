import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
   

     constructor (public http:HttpClient) { }
     getAllRecipes(){
       return this.http.get('https://api.jikan.moe/v4/anime?q=naruto&sfw')

   } 

}
