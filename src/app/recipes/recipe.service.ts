import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is a test',
            'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
            [
                new Ingredient('Bread', 5),
                new Ingredient('Salt', 10)
            ]),
        new Recipe(
            'Another Test Recipe',
            'This is a test',
            'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
            [
                new Ingredient('Salt', 10),
                new Ingredient('Meat', 5)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number){
        return this.recipes[id];
    } 

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
       this.shoppingListService.addIngredients(ingredients);
    }


}