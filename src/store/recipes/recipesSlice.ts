
import { Recipe } from '@/app/dashboard/(content)/home/interfaces/recipes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface RecipesState {
    recipes: Recipe[],
    filter:string
}
const initialState:RecipesState = {
   recipes:[],
   filter:''
}

const RecipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addRecipes(state, action: PayloadAction<Recipe[]>) {
            state.recipes = action.payload;
        },
        updateFilter(state, action:PayloadAction<string>){
            state.filter=action.payload;
        }
    }
});

export const {addRecipes,updateFilter } = RecipeSlice.actions
export default RecipeSlice.reducer