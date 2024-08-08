import { notFound } from "next/navigation";
import { RecipesResponse } from "../../home/interfaces/recipes";

interface Props {
  params: { id: string }
}
const getSingleRecipes = async (id = '1'): Promise<any> => {
  try {
    const data: any = await fetch(`'https://dummyjson.com/recipes/'${id}`, {
      cache: 'force-cache', //TODO: CAMBIAR ESTO EN FUTURO,
      next: {
        revalidate: 60 * 60 * 30 * 6
      }
    })
      .then(res => res.json());
    return data;
  }
  catch (error) {
    notFound()
  }
}
export default async function DetailPage({ params }: Props) {
  const recipes = await getSingleRecipes(params.id);

  return (
    <div>
      <h1>Hello Page</h1>
    </div>
  );
}