'use client'

import RecipeElement from '@/components/recipes/recipes'
import React, { useEffect, useState } from 'react'
import { Recipe } from '../interfaces/recipes';
import { useAppDispatch, useAppSelector } from '@/store';
import { addRecipes } from '@/store/recipes/recipesSlice'
interface Props {
    recipes: Recipe[]
}
const ListRecipes = ({ recipes }: Props) => {
    const filter = useAppSelector(state => state.recipe.filter);
    const dispatch = useAppDispatch();
    const [filterTag, setFilterTag] = useState(""); // Estado para el filtro

    useEffect(() => {
        dispatch(addRecipes(recipes));
        setFilterTag(filter || '')
    }, [recipes, filter]);
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(filterTag.toLowerCase())
    );
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {filteredRecipes?.map((recipe: Recipe, index: number) => {
                return (
                    <RecipeElement recipe={recipe} key={`recipe-${recipe.id}-${index}`} />
                )
            })}
        </div>
    )
}

export default ListRecipes
