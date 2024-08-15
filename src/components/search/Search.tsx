'use client'
import { useAppDispatch } from '@/store';
import { updateFilter } from '@/store/recipes/recipesSlice';
import React from 'react';

const Search = () => {
  const dispatch = useAppDispatch();

  function handleChangeFilter(value: string): void {
    dispatch(updateFilter(value))
  }

  return (
    <div className="max-w-xl mx-auto">
      <form className="flex items-center space-x-2">
        <label htmlFor="voice-search" className="sr-only">Search</label>
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

          </div>
          <input
            type="text"
            id="voice-search"
            className="h-8 w-full pl-10 pr-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Recipes"
            onChange={(e) => handleChangeFilter(e.target.value)}
          />
          <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;