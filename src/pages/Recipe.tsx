import { useAppSelector } from "../redux/hooks";
import { useParams } from "react-router-dom";

const Recipe = () => {
    const { id } = useParams();
    const recipes = useAppSelector((state) => state.recipes.recipes);
    const currentRecipe = recipes.find((recipe) => recipe.id === id);

    return (
        <div>
            <h1 className="text-center text-2xl font-extrabold mb-5 block">
                {currentRecipe?.title}
            </h1>
            <h1 className="font-semibold my-5">
                {currentRecipe?.servings} Servings Recipe:
            </h1>

            {currentRecipe?.ingredients.map((ingre, id) => (
                <div key={id} className="flex items-center gap-x-4">
                    <div className="w-2 h-2 rounded-full bg-black"></div>
                    <h1 className="font-semibold">{ingre}</h1>
                </div>
            ))}
            <p className="mt-5 font-semibold">{currentRecipe?.instructions}</p>
        </div>
    );
};

export default Recipe;
