'use client'

import RecipeElement from '@/components/recipes/recipes'
import React, { useEffect } from 'react'
import { Recipe } from '../interfaces/recipes';
import { useAppDispatch, useAppSelector } from '@/store';
import { addRecipes } from '@/store/recipes/recipesSlice'
interface Props {
    recipes: Recipe[]
}
const ListRecipes = ({ recipes }: Props) => {
    const count = useAppSelector(state => state.recipe.recipes);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(addRecipes(recipes))
    }, [recipes]);
    return (
            <div className="flex flex-wrap gap-10 items-center justify-center">
            {recipes?.map((recipe: Recipe, index: number) => {
                return (
                    <RecipeElement recipe={recipe} key={`recipe-${recipe.id}`} />
                )
            })}
            </div>
    )
}

export default ListRecipes
