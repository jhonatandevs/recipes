'use client'
import { updateDifficulty } from '@/store/recipes/recipesSlice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const Difficulty = () => {
  const dispatch = useDispatch();

  // Estado local para los checkboxes
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);

  // Manejar el cambio en los checkboxes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    // Actualizar el estado local basado en el checkbox seleccionado
    let updatedDifficulties;
    if (checked) {
      updatedDifficulties = [...selectedDifficulties, value];
    } else {
      updatedDifficulties = selectedDifficulties.filter(difficulty => difficulty !== value);
    }

    setSelectedDifficulties(updatedDifficulties);

    // Despachar la acción para actualizar el estado en Redux
    dispatch(updateDifficulty(updatedDifficulties));
  };
  return (
    <div className="flex w-full pl-5">
      <div className="justify-center">
        <h3>Filtrar por Dificultad</h3>
        <div className='flex flex-col mx-auto'>
          <label>
            <input
              type="checkbox"
              value="Easy"
              checked={selectedDifficulties.includes("Easy")}
              onChange={handleCheckboxChange}
            />
            Easy
          </label>
          <label>
            <input
              type="checkbox"
              value="Medium"
              checked={selectedDifficulties.includes("Medium")}
              onChange={handleCheckboxChange}
            />
            Medium
          </label>
          <label>
            <input
              type="checkbox"
              value="Hard"
              checked={selectedDifficulties.includes("Hard")}
              onChange={handleCheckboxChange}
            />
            Hard
          </label>
        </div>
      </div>
    </div>
  )
}

export default Difficulty
