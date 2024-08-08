import axios from "axios";
import { Recipe, RecipesResponse } from "../interfaces/recipes";
const API_URL='https://dummyjson.com/recipes'
export const fetchRecipes = async (): Promise<Recipe[]|null> => {
    try {
      const response:RecipesResponse = await fetch(`${API_URL}`)
      .then(res => res.json());
      return response.recipes;
    } catch (error) {
      console.error('Error fetching recipes:', error);
     return null;
    }
  };