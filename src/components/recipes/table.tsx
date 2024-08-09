import { Recipe } from '@/app/dashboard/(content)/home/interfaces/recipes'
import Link from 'next/link'
import React from 'react'
import { IoArrowBack } from 'react-icons/io5'
interface Props {
    recipe?: Recipe
}
export default function TableDetailRecipe({ recipe }: Props) {
    return (
        <>
            <div>
                <div className="w-10">
                </div>
                <div className="block w-4/5  mt-3 bg-white mx-auto ">
                    <table className="items-center bg-transparent w-full border-collapse">
                        <thead>
                            <tr>
                                <th colSpan={4} className="text-center px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    {recipe?.name} <small>[{recipe?.id}]</small>
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center text-blueGray-700 ">
                                    Ingredientes
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 max-w-40">
                                    {recipe?.ingredients.map((ingredient: string, index: number) => {
                                        return (
                                            <p key={'ingrediet-' + index}>- {ingredient}</p>
                                        )
                                    })}
                                </td>
                            </tr>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center text-blueGray-700 ">
                                    Instrucciones
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 w-full">
                                    {recipe?.instructions.map((instruction: string, index: number) => {
                                        return (
                                            <p key={'instruction-' + index}>- {instruction}</p>
                                        )
                                    })}
                                </td>
                            </tr>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center text-blueGray-700 ">
                                    Valoraciones
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                    {recipe?.rating}
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
            <footer className="relative pt-8 pb-6 mt-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                Jhonatan Zuniga 2024
                            </div>
                        </div>
                    </div>
                </div>
            </footer></>

    )
}
