import { notFound } from "next/navigation";
import { Recipe, RecipesResponse } from "../../home/interfaces/recipes";
import TableDetailRecipe from "@/components/recipes/table";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

interface Props {
  params: { id: string }
}
const getSingleRecipes = async (id = '1'): Promise<Recipe | undefined> => {
  console.log("get simple")
  try {
    const data: Recipe = await fetch(`https://dummyjson.com/recipes/${id}`)
      .then(res => res.json());
    console.log("Respuesta:  ", data)
    return data;
  }
  catch (error) {
    notFound();
  }
}
export default async function DetailPage({ params }: Props) {
  const recipe = await getSingleRecipes(params.id);

  return (
    <section className=" bg-blueGray-50">
      <Link href={'/dashboard/home'}>
        <p className='flex items-center text-blue-900 pt-5'> 
          <span className='pr-1 items-center'><IoArrowBack/> </span>
          Volver
          </p>
        </Link>
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-center text-blueGray-700">Detalle Recipe </h3>
              </div>

            </div>
          </div>
        </div>
        
        <TableDetailRecipe recipe={recipe} />
      </div>
    </section>
  );
}