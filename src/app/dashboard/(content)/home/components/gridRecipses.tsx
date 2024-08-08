import React from 'react'
import { fetchRecipes } from '../services/Recipes';
import { Recipe } from '../interfaces/recipes';
import RecipeElement from '@/components/recipes/recipes';

const GridRecipes = async () => {
    const recipes = await fetchRecipes();
  return (
    <div className="flex flex-col">
            <span className="text-2xl my-2">Listado de recetas <small>Estáticos</small></span>
            <div className="flex flex-wrap gap-10 items-center justify-center">
                {recipes?.map((recipe:Recipe, index:number)=>{
                    return (
                        <RecipeElement recipe={recipe} key={`recipe-${recipe.id}`}/>
                    )
                })}
            </div>
        </div>
  )
}

export default GridRecipes
