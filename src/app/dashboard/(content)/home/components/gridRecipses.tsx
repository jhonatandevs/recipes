
import React from 'react'
import { fetchRecipes } from '../services/Recipes';
import { Recipe } from '../interfaces/recipes';
import RecipeElement from '@/components/recipes/recipes';
import { useAppSelector } from '@/store';
import ListRecipes from './listRecipes';

const GridRecipes = async () => {
    const recipes = await fetchRecipes();
    // const r= useAppSelector(state=>state.recipe);
    // const count= useAppSelector(state=>state.recipe.recipes);

    return (
        <div className="flex flex-col">
                <ListRecipes recipes={recipes||[]}/>
        </div>
    )
}

export default GridRecipes
