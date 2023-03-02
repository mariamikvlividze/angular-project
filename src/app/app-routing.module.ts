import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
 {path:"",component:HomeComponent},
 {path:"menu",component:MenuComponent},
 {path:"recipe",component:RecipeComponent},
 {path:"review",component:ReviewComponent},
 {path:"booking",component:BookingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
