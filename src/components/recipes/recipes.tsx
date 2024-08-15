
import { Recipe } from "@/app/dashboard/(content)/home/interfaces/recipes";
import Image from 'next/image';
import Link from 'next/link';
import { IoHeart } from "react-icons/io5";
interface Props{
    recipe:Recipe
}
export default  function RecipeElement({recipe}: Props) {
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg w-60 h-80">
        <div className="text-center p-6 bg-gray-800 border-b">
          <Image priority={false} src={recipe.image!} className="h-28 w-28 text-white rounded-full mx-auto" width={40} height={40} alt={`image-card-${recipe.name}`}></Image>
          <p className="pt-2 text-md font-semibold text-gray-50 capitalize">{recipe.name.substring(0,20)}</p>
          <p className="text-sm text-gray-100">{recipe.difficulty}</p>
          <div className="mt-5">
            <Link href={`detail/${recipe.id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Detail
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link href="/account/campaigns" className="px-4 py-2 hover:bg-gray-100 flex">

            <div className="text-red-500">
          <IoHeart/>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Favorito
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>

          </Link>
          
        </div>
      </div>
    </div>
  );
}