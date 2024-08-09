
import { Recipe } from '@/app/dashboard/(content)/home/interfaces/recipes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface RecipesState {
    recipes: Recipe[]
}
const initialState:RecipesState = {
   recipes:[]
}

const RecipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addRecipes(state, action: PayloadAction<Recipe[]>) {
            state.recipes = action.payload;
        }
    }
});

export const {addRecipes } = RecipeSlice.actions
export default RecipeSlice.reducer