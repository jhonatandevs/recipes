
import React from 'react'
import { fetchRecipes } from '../services/Recipes';
import ListRecipes from './listRecipes';

const GridRecipes = async () => {
    const recipes = await fetchRecipes();
  
    return (
        <div className="flex flex-col">
                <ListRecipes recipes={recipes||[]}/>
        </div>
    )
}

export default GridRecipes
