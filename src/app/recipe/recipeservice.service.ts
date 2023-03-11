import { Injectable } from '@angular/core';
import { recipeInfo } from './recipe.module';

@Injectable({
  providedIn: 'root'
})
export class RecipeserviceService {

  constructor() { }
  getRecipe():recipeInfo[]{
    return[
      {
        img:"/assets/simple pasta.webp",
        Name:"carbonara pasta",
        time:"-30min",
        step1:"100g pancetta",
        step2:"50g pecorino cheese",
        step3:"50g parmesan",
        step4:"3 large eggs",
        step5:"350g spaghetti",
        step6:"2 plump garlic cloves, peeled and left whole",
        step7:"50g unsalted butter",
        step8:"sea salt and freshly ground black pepper",
       

      },
      {
        img:"/assets/recipe/roasted-vegetable.jpg",
        Name:"ratatouille",
        time:"-2 hour",
        step1:"2 tbsp olive oil",
        step2:"1 red onion, sliced",
        step3:"2 garlic cloves",
        step4:"2 large aubergines, cut into 1.5cm pieces",
        step5:"3 courgettes, halved and cut into 2cm pieces",
        step6:"3 mixed peppers, cut into 2cm pieces",
        step7:"1 tbsp tomato purée",
        step8:"6 large ripe tomatoes, roughly chopped",
       // step9:"",

       // step10:"",
    
        //step11:"",
    
       // step12:"",
       // step13:"",
    
       // step14:"",
    
       // step15:"",
      },
      {
        img:"/assets/recipe/vegetarian ramen.jpg",
        Name:"vegetarian ramen",
        time:"- hour",
        step1:"80g pack instant noodles (look for an Asian brand with a flavour like sesame)",
        step2:"2 spring onions, finely chopped",
        step3:"½ head pak choi",
        step4:"1 egg",
        step5:"1 tsp sesame seeds",
        step6:"chilli sauce, to serve",
        step7:"broccoli sprouts",
        step8:"half a spoon soy sauce",
      },
      {
        img:"/assets/recipe/lasagna.jpg",
        Name:"lasagne",
        time:"-3hour",
        step1:"3 tbsp olive oil,2 celery sticks, finely chopped 1 onion, finely chopped",
        step2:"1 carrot (about 100g), finely chopped, 3 garlic cloves, crushed 140g cubetti di pancetta",
        step3:"500g beef mince (we used 10% fat);500g pork mince or British veal mince; 200ml milk ",
        step4:"2 x 400g cans chopped tomatoes; 2 bay leaves",
        step5:"1 rosemary sprig; 2 thyme sprigs; 2 tsp dried oregano",
        step6:"2 beef stock cubes;  500ml red wine",
        step7:"about 400g dried pasta sheets",
        step8:"50g parmesan, finely grated",
      },
      {
        img:"/assets/recipe/meatball.jpg",
        Name:"meatball and tomato soup",
        time:"-2.5 hour",
        step1:"1½ tbsp rapeseed oil",
        step2:"1 onion, finely chopped",
        step3:"2 red peppers, deseeded and sliced",
        step4:"1 garlic clove, crushed",
        step5:"½ tsp chilli flakes",
        step6:"2 x 400g cans chopped tomatoes",
        step7:"100g giant couscous; 500ml hot vegetable stock",
        step8:"12 pork meatballs; 150g baby spinach; ½ small bunch of basil",
      },
      {
        img:"/assets/recipe/chicken stroganoff.jpg",
        Name:"chicken stroganoff",
        time:"-1 hour",
        step1:"2 tbsp olive oil",
        step2:"4 skinless chicken breasts, cut into chunks, rice mash or pasta, to serve",
        step3:"2 onions, finely chopped",
        step4:"4 garlic cloves, crushed",
        step5:"1 tbsp sweet paprika",
        step6:"400ml chicken stock",
        step7:"2 tbsp Worcestershire sauce",
        step8:"200g soured cream or crème fraiche",
      },
      {
        img:"/assets/recipe/salmon.jpg",
        Name:"Salmon with beetroot, feta & lime salsa",
        time:"-1.3 hour",
        step1:"200g cooked beetroot",
        step2:"70g feta",
        step3:"2 limes",
        step4:"2 skin-on salmon fillets",
        step5:"2 onion",
        step6:"cilantro",
        step7:"garlic (optional)",
        step8:"salt",
      },
      {
        img:"/assets/recipe/beef stir-fry.jpg",
        Name:"Beef & Sichuan pepper stir-fry",
        time:"-50 min ",
        step1:"2 tbsp rapeseed oil; 300g steak, sliced into thin strips",
        step2:"1 tbsp cornflour;2 mixed peppers, deseeded and finely sliced",
        step3:"2 small red onions, finely sliced; ½ tsp chilli flakes",
        step4:"1 tsp Sichuan peppercorns, ground using a pestle and mortar",
        step5:"2 tbsp low-salt dark soy sauce",
        step6:"1 tbsp chilli oil (optional)",
        step7:"300g cooked brown basmati rice",
        step8:"200g baby corn, halved on an angle",
      },
      {
        img:"/assets/recipe/steak pie.jpg",
        Name:"steak pie",
        time:"-50  min ",
        step1:"3 tbsp sunflower oil",
        step2:"1kg braising steak, diced",
        step3:"2 onions, roughly chopped",
        step4:"3 tbsp plain flour",
        step5:"1 tbsp tomato ketchup",
        step6:"2 beef stock cubes mixed with 600ml boiling water",
        step7:"375g sheet of ready-rolled puff pastry",
        step8:"1 egg yolk, beaten",
      },
     
    ]
      
    
  }
}
