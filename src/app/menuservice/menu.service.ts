import { Injectable } from '@angular/core';
 import { FoodInfo } from '../menu/info.module';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor() { }
     
  getImg():FoodInfo[]{
    return [
      {
        Name:"burger",
        img:'/assets/menu/burger.jpg',
        id:1,
        rating:4,
        price:15,
        favorite:true,
        recipe:"In a bowl, mix ground beef, egg, onion, bread crumbs, Worcestershire, garlic, 1/2 teaspoon salt, and 1/4 teaspoon pepper until well blended. Divide mixture into four equal portions and shape each into a patty about 4 inches wide Lay burgers on an oiled barbecue grill over a solid bed of hot coals or high heat on a gas grill (you can hold your hand at grill level only 2 to 3 seconds); close lid on gas grill. Cook burger"
      },

      {
        Name:"fries",
        img:'/assets/menu/fries.jpg',
        id:2,
        rating:3.9,
        price:7,
        favorite:false,
        recipe:"Preheat oven to 425° F. Spread frozen fries in a single layer on a dark, non-stick baking sheet or shallow baking pan. Bake 3 minutes, flip product over and continue baking an additional 2 to 3 minutes. Serve immediately."
      },
     {
      Name:"onion rings",
      img:'/assets/menu/onion rings.jpg',
      id:3,
      rating:3.9,
      price:9,
      favorite:false,
      recipe:"Onion ring batter is made from a combination of flour, baking powder, garlic powder, cayenne, salt, and pepper. These dry ingredients are combined with ice cold water to make the batter. Before battering the sliced onion rings, they're dredged in cornstarch to help the batter stick."
     },
      {
        Name:"peperoni pizza",
        img:'/assets/menu/peperoni pizza.jpg',
        id:4,
        rating:5,
        price:20,
        favorite:true,
        recipe:"Preheat the oven to 425 degrees F (220 degrees C). Grease two 12-inch pizza pans.,   Make sauce: Whisk together water, tomato paste, oregano, basil, garlic powder, onion powder, sugar, salt, and pepper in a medium bowl until smooth. Set aside.Make crust: Combine 2 cups flour, yeast, sugar, and salt in a large bowl. Add warm water and oil; mix until well blended, about 1 minute. Gradually add remaining flour, a little at a time, until a soft, sticky dough forms. Make crust: Combine 2 cups flour, yeast, sugar, and salt in a large bowl. Add warm water and oil; mix until well blended, about 1 minute. Gradually add remaining flour, a little at a time, until a soft, sticky dough forms.Transfer dough to a floured surface; knead until dough is smooth and elastic, about 4 minutes. Add more flour as needed. (If using RapidRise yeast, let dough rest, covered, for 10 minutes.Transfer dough to a floured surface; knead until dough is smooth and elastic, about 4 minutes. Add more flour as needed. (If using RapidRise yeast, let dough rest, covered, for 10 minutes.Transfer dough to a floured surface; knead until dough is smooth and elastic, about 4 minutes. Add more flour as needed. (If using RapidRise yeast, let dough rest, covered, for 10 minutesTransfer dough to a floured surface; knead until dough is smooth and elastic, about 4 minutes. Add more flour as needed. If using RapidRise yeast, let dough rest, covered, for 10 minutes"
      },
      {
        Name:"pizza",
        img:'/assets/menu/pizza1.jpg',
        id:5,
        rating:4.9,
        price:14,
        favorite:true,
        recipe:"Use a homemade dough with lots of flavor. I will bore your brains out about how to achieve this in my Pizza Dough post  Use a decent Pizza Sauce (here’s my recipe) Preheat your oven at least 30 minutes. Yes, really, set a timer. I don’t care when your oven beeps to let you know it’s reached the right temperature. Wait 30 minutes. Par bake your pizza crust to make sure your pizza has a crisp bottom and a cooked center Use a pizza stone for crisp edges. Sorry, this is kind of nonnegotiable. Your oven sucks at pizza making. You need a hack."
      },
      {
        Name:"rice rolls",
        img:'/assets/menu/rice rolls.jpg',
        id:6,
        rating:3.3,
        price:6,
        favorite:false,
        recipe:"Toss the cleaned shrimp with 2 tablespoons water, 1/2 teaspoon sugar and 1/8 teaspoon baking soda. After the shrimp have been coated, cover and refrigerate for 2 hours.  After 2 hours, rinse the shrimp under a gentle stream of cold running water for 5 minutes to wash away the sugar and baking soda and pat thoroughly dry with a paper towel. This will greatly improve the texture of the shrimp! Marinate the shrimp with 1/4 teaspoon sesame oil, a pinch of salt, 1/2 teaspoon cornstarch, and 1/4 teaspoon ground white pepper. Cover and return to the refrigerator while you prepare the rest of the ingredients. "
      },
      {
        Name:"beef steak",
        img:'/assets/menu/beef steak.jpg',
        id:7,
        rating:5,
        price:25,
        favorite:true,
        recipe:"Rub the steak all over with a good lug of olive oil and a good pinch of sea salt and black pepper. Add the steak to a hot pan, then cook for 6 minutes for medium-rare, or to your liking, turning every minute."
      },
      {
        Name:"caesar salad",
        img:'/assets/menu/caesar salad.jpg',
        id:8,
        rating:4.2,
        price:10,
        favorite:false,
        recipe:" 1 large or 2 small heads of romaine lettuce Parmesan cheese, shredded or shaved Crisp croutons – homemade can be made several days ahead. The recipe below makes enough for 2 salads.Caesar salad dressing – homemade is best and here is our favorite store-bought dressing in a pinch"
      },
     {
      Name:"chicken wings",
        img:'/assets/menu/chicken wings.jpg',
        id:9,
        rating:4.8,
        price:8,
        favorite:false,
        recipe:"There are many factors to consider in the perfect chicken wing: flavor, crisp skin, to sauce or not to sauce. If you're in the camp that's all about the crispy skin, then these fried chicken wings are for you. While we love classic buffalo wings, fried wings satisfy that craving for a salty, crunchy bite made for dipping (or tossing) in your favorite sauce. Coating our chicken in a seasoned flour mixture ensures that these wings are not only perfectly golden and crisp after frying, but extremely flavorful. Serve these at your Super Bowl party with an array of your favorite wing sauces so everyone can customize these crispy, juicy wings."
     },
     {
      Name:"curry rice",
        img:'/assets/menu/curry rice.jpg',
        id:10,
        rating:2.1,
        price:11,
        favorite:false,
        recipe:"all you need for this recipe is frozen peas,salt and peper, garlic,ginger, basmati rice,chicken."
     },
     {
      Name:"pasta carbonara",
        img:'/assets/menu/pasta carbonara.jpg',
        id:11,
        rating:4.9,
        price:14,
        favorite:true,
        recipe:"1 tablespoon extra virgin olive oil or unsalted butter1/2 pound pancetta or thick cut bacon, diced 3 to 4 whole eggs1 pound spaghetti (or bucatini or fettuccine) Kosher salt and freshly ground black pepper to taste"
     },
     {
      Name:"salmon",
        img:'/assets/menu/salmon.jpg',
        id:12,
        rating:3.1,
        price:13,
        favorite:false,
        recipe:"Heat the oven to 275°F. Place a salmon fillet in a baking dish. Rub all over with olive oil, and season with salt and pepper. Roast until salmon flakes easily, or a thermometer inserted in the thickest part reads 120°F (about 30 minutes for a 6-ounce fillet)"
     },
     {
      Name:"tacos",
        img:'/assets/menu/tacos.jpg',
        id:13,
        rating:4.6,
        price:6,
        favorite:false,
        recipe:"If you want to keep it classic, the best taco toppings are cheese, pico de gallo, lettuce, tomatoes, and sour cream. But you can also add in caramelized onions, jalepenos, green chiles, beans, and more!"
     },
     {
      Name:"shawarma",
        img:'/assets/menu/shawarma.jpg',
        id:14,
        rating:5.0,
        price:18,
        favorite:false,
        recipe:"Chicken breasts (de-boned or boneless)Chicken thighs/laps (de-boned or boneless)Shawarma bread (pita bread or tortilla wrapsSmall cabbage. Medium sized carrots (grated or cut into thin strips) 1 large cucumber (cut into thin strips and circles) 2 big tomatoes (cut into thin strips)"
     },
     {
      Name:"khachapuri",
        img:'/assets/menu/khachapuri.jpg',
        id:15,
        rating:5,
        price:10,
        favorite:true,
        recipe:"Combine flour, salt, yeast, and sugar in a bowl. Then add warm milk. Using the hook attachment, knead the dough until it takes shape. Then add oil and knead some more Place the dough in a greased bowl. Cover and let it double in size. Remove from bowl and divide the dough into 4 boat-shaped pieces. Place the bread boast on a baking sheet lined with parchment. Combine the three kinds of cheese and fill each bread boat. Using a pastry brush, brush with egg wash and bake for 15 minutes at 450 degrees Fahrenheit. Pull the khachapuri out of the oven, then make a well in the middle. Drop the egg in the center, add pieces of butter to the melted cheese, and bake for another 5-6 minutes."
     }

    ]

  }


}
