import type { Metadata } from "next";
import GridRecipes from "./components/gridRecipses";

export const metadata: Metadata = {
    title: 'Home ',
    description: 'List of Recipes',
   };
export default function HomePage() {
  return (
    <div className="flex flex-col">
           <GridRecipes/>
        </div>
  );
}